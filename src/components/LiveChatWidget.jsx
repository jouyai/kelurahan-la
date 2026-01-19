import { useState, useEffect, useRef, Fragment } from "react";
import { supabase } from "../lib/supabaseClient";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateAIContext } from "../data/knowledgeBase";
import {
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  UserCircleIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import {
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

// --- KONFIGURASI ---
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// --- HELPER: DYNAMIC GREETING ---
const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 11) return "Selamat Pagi";
  if (hour >= 11 && hour < 15) return "Selamat Siang";
  if (hour >= 15 && hour < 18) return "Selamat Sore";
  return "Selamat Malam";
};

// --- COMPONENT: TYPEWRITER EFFECT ---
const Typewriter = ({ text, speed = 15, onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      if (onComplete) onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <span className="whitespace-pre-wrap leading-relaxed">
      {text.slice(0, index)}
    </span>
  );
};

export default function LiveChatWidget({ 
  isOpen, 
  setIsOpen, 
  startHumanMode = false, 
  onResetHumanMode,
  chatTopic = "" // Menerima topik dari App
}) {
  const [sessionId, setSessionId] = useState(null);

  // State Form Identitas
  const [showIdentityForm, setShowIdentityForm] = useState(true);
  const [userIdentity, setUserIdentity] = useState({ name: "", contact: "" });
  const [isRegistering, setIsRegistering] = useState(false);

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isHumanMode, setIsHumanMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [greeting, setGreeting] = useState("Selamat Pagi");

  const messagesEndRef = useRef(null);

  // LOGIC AUTO CONNECT STAFF
  useEffect(() => {
    const connectStaff = async () => {
      if (isOpen && startHumanMode) {
        setIsHumanMode(true);
        // Jika sudah ada sesi aktif, update statusnya di database
        if (sessionId) {
          await supabase
            .from("chat_sessions")
            .update({ status: "live", last_message_at: new Date() })
            .eq("id", sessionId);
        }
        if (onResetHumanMode) onResetHumanMode();
      }
    };
    connectStaff();
  }, [isOpen, startHumanMode, sessionId, onResetHumanMode]);

  // 1. Cek Sesi Saat Load
  useEffect(() => {
    setGreeting(getTimeBasedGreeting());
    const checkSession = async () => {
      const storedSession = localStorage.getItem("chat_session_id");
      if (storedSession) {
        setSessionId(storedSession);
        setShowIdentityForm(false);
        fetchHistory(storedSession);

        const { data } = await supabase
          .from("chat_sessions")
          .select("status")
          .eq("id", storedSession)
          .single();
        if (data && data.status === "live") setIsHumanMode(true);
      }
    };
    checkSession();
  }, []);

  const fetchHistory = async (id) => {
    const { data } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("session_id", id)
      .order("created_at", { ascending: true });
    if (data) setMessages(data);
  };

  // 2. Realtime Listener
  useEffect(() => {
    if (!sessionId) return;

    const channel = supabase
      .channel(`room:${sessionId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          setMessages((prev) => {
            if (prev.find((m) => m.id === payload.new.id)) return prev;
            return [...prev, payload.new];
          });
          if (payload.new.sender === "system") setIsTyping(false);
        },
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "chat_sessions",
          filter: `id=eq.${sessionId}`,
        },
        (payload) => {
          if (
            payload.new.status === "bot" ||
            payload.new.status === "resolved"
          ) {
            setIsHumanMode(false);
          }
          else if (payload.new.status === "live") {
            setIsHumanMode(true);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping, showIdentityForm]);

  // 3. HANDLER: SUBMIT FORM IDENTITAS (MODIFIED)
  const handleStartChat = async (e) => {
    e.preventDefault();
    if (!userIdentity.name.trim() || !userIdentity.contact.trim()) return;

    setIsRegistering(true);

    // Tentukan status awal
    const initialStatus = (isHumanMode || startHumanMode) ? "live" : "bot";

    const { data, error } = await supabase
      .from("chat_sessions")
      .insert([
        {
          user_name: userIdentity.name,
          contact: userIdentity.contact,
          status: initialStatus,
        },
      ])
      .select()
      .single();

    if (data) {
      localStorage.setItem("chat_session_id", data.id);
      setSessionId(data.id);
      setShowIdentityForm(false);
      
      // JIKA MODE STAFF: Kirim pesan sistem & pesan otomatis user berisi topik
      if (initialStatus === "live") {
        // 1. Pesan Sambutan Sistem
        await supabase
          .from("chat_messages")
          .insert([
            { 
              session_id: data.id, 
              sender: "system", 
              message: "Anda terhubung dengan layanan Staff. Silakan sampaikan keperluan Anda." 
            },
          ]);

        // 2. Pesan Otomatis dari User sesuai Topik Halaman
        if (chatTopic) {
          await supabase
            .from("chat_messages")
            .insert([
              { 
                session_id: data.id, 
                sender: "user", 
                message: `Halo, saya ingin bertanya mengenai ${chatTopic}.` 
              },
            ]);
        }
      }
    } else {
      console.error("Gagal membuat sesi:", error);
    }
    setIsRegistering(false);
  };

  // 4. HANDLER: KIRIM PESAN
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !sessionId) return;

    const userText = inputText;
    setInputText("");

    await supabase
      .from("chat_messages")
      .insert([{ session_id: sessionId, sender: "user", message: userText }]);
    await supabase
      .from("chat_sessions")
      .update({ last_message_at: new Date() })
      .eq("id", sessionId);

    if (isHumanMode) return;

    // AI Processing
    setIsTyping(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
      const contextData = generateAIContext();

      const prompt = `
        ${contextData}
        KAMU ADALAH BOT CS KELURAHAN LENTENG AGUNG.
        Waktu: ${greeting}. User: ${userIdentity.name || "Warga"}.
        
        ATURAN:
        1. Jika user bertanya di luar konteks atau minta staff, JAWAB: "HANDOVER_TO_HUMAN".
        2. Jawab sopan & formal.

        PERTANYAAN: ${userText}
      `;

      const result = await model.generateContent(prompt);
      const aiResponse = result.response.text().trim();

      if (aiResponse.includes("HANDOVER_TO_HUMAN")) {
        setIsHumanMode(true);
        await supabase
          .from("chat_sessions")
          .update({ status: "live", last_message_at: new Date() })
          .eq("id", sessionId);

        const fallbackMsg =
          "Mohon maaf, saya akan menghubungkan Anda dengan Petugas Kelurahan kami. Mohon tunggu sebentar...";
        await supabase
          .from("chat_messages")
          .insert([
            { session_id: sessionId, sender: "system", message: fallbackMsg },
          ]);
      } else {
        await supabase
          .from("chat_messages")
          .insert([
            { session_id: sessionId, sender: "system", message: aiResponse },
          ]);
      }
    } catch (error) {
      console.error("AI Error:", error);
      setIsHumanMode(true);
      await supabase.from("chat_messages").insert([
        {
          session_id: sessionId,
          sender: "system",
          message: "Maaf, sistem sedang sibuk. Menghubungkan ke admin...",
        },
      ]);
      await supabase
        .from("chat_sessions")
        .update({ status: "live", last_message_at: new Date() })
        .eq("id", sessionId);
    }
  };

  return (
    <>
      {/* TOMBOL FLOATING */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#124076] hover:bg-blue-800 text-white px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="flex flex-col items-start -space-y-0.5 text-left">
            <span className="text-[10px] text-blue-200 font-medium">
              BUTUH BANTUAN?
            </span>
            <span className="text-sm font-bold">Chat Asisten</span>
          </div>
          <ChatBubbleLeftRightIcon className="h-6 w-6 text-yellow-300 group-hover:rotate-6 transition-transform" />
        </button>
      )}

      {/* MODAL CHAT */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[9999]"
          onClose={() => setIsOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 sm:hidden" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-end sm:items-end sm:justify-end sm:bottom-24 sm:right-6 pointer-events-none">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-y-full opacity-0 sm:translate-y-10 sm:scale-95"
              enterTo="translate-y-0 opacity-100 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="translate-y-0 opacity-100 sm:scale-100"
              leaveTo="translate-y-full opacity-0 sm:translate-y-10 sm:scale-95"
            >
              <DialogPanel className="pointer-events-auto w-full h-[100dvh] sm:h-[520px] sm:w-[340px] bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-black/5 font-sans">
                {/* HEADER */}
                <div className="bg-[#124076] p-3.5 flex justify-between items-center shadow-md shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-1.5 rounded-full backdrop-blur-sm border border-white/20 relative">
                      {isHumanMode ? (
                        <BuildingOffice2Icon className="h-5 w-5 text-white" />
                      ) : (
                        <SparklesIcon className="h-5 w-5 text-yellow-300" />
                      )}
                      <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-[#124076] bg-green-400"></span>
                    </div>
                    <div>
                      <DialogTitle className="font-bold text-white text-sm">
                        {showIdentityForm
                          ? "Selamat Datang"
                          : isHumanMode
                            ? "Petugas Kelurahan"
                            : "Asisten Virtual"}
                      </DialogTitle>
                      <p className="text-[11px] text-blue-200">
                        {showIdentityForm
                          ? "Layanan Warga"
                          : isHumanMode
                            ? "Online"
                            : "Menjawab otomatis"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-white/10 rounded-full text-white transition-colors"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* VIEW 1: FORM IDENTITAS */}
                {showIdentityForm ? (
                  <div className="flex-1 p-5 flex flex-col justify-center bg-[#F5F7FA]">
                    <div className="text-center mb-5">
                      <div className="w-14 h-14 bg-[#124076] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <UserCircleIcon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 text-base">
                        Isi Data Diri
                      </h3>
                      <p className="text-[11px] text-gray-500 mt-1 leading-tight px-2">
                        Agar petugas kami dapat menghubungi Anda kembali.
                      </p>
                    </div>

                    <form onSubmit={handleStartChat} className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-gray-600 ml-1">
                          Nama Lengkap
                        </label>
                        <div className="relative">
                          <IdentificationIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Budi Santoso"
                            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#124076] focus:border-[#124076] outline-none transition"
                            value={userIdentity.name}
                            onChange={(e) =>
                              setUserIdentity({
                                ...userIdentity,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-gray-600 ml-1">
                          No. WhatsApp / Email
                        </label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="0812..."
                            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#124076] focus:border-[#124076] outline-none transition"
                            value={userIdentity.contact}
                            onChange={(e) =>
                              setUserIdentity({
                                ...userIdentity,
                                contact: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <button
                        disabled={isRegistering}
                        className="w-full bg-[#124076] hover:bg-blue-800 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95 disabled:bg-gray-400 mt-3 flex justify-center text-sm"
                      >
                        {isRegistering ? (
                          <span className="flex items-center gap-2">
                            <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>{" "}
                            Memproses...
                          </span>
                        ) : (
                          "Mulai Chat"
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  // VIEW 2: CHAT ROOM
                  <>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F7FA]">
                      <div className="flex gap-2">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-[#124076] flex items-center justify-center border border-white shadow-sm">
                          <SparklesIcon className="h-3.5 w-3.5 text-yellow-300" />
                        </div>
                        <div className="max-w-[85%] px-3 py-2.5 rounded-2xl rounded-tl-none bg-white text-gray-800 text-sm shadow-sm border border-gray-100">
                          <Typewriter
                            text={`${greeting}, Kak ${userIdentity.name || "Warga"}! 👋\nSaya Asisten Virtual Kelurahan.\n\nAda yang bisa saya bantu?`}
                            speed={10}
                          />
                        </div>
                      </div>

                      {messages.map((msg, index) => (
                        <div
                          key={msg.id}
                          className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                        >
                          <div className="shrink-0 self-end">
                            {msg.sender === "user" ? (
                              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                                <UserCircleIcon className="h-4 w-4 text-gray-500" />
                              </div>
                            ) : (
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center text-white ${isHumanMode && msg.sender === "system" && !msg.message.includes("bot") ? "bg-orange-600" : "bg-[#124076]"}`}
                              >
                                <SparklesIcon className="h-3.5 w-3.5" />
                              </div>
                            )}
                          </div>
                          <div
                            className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-sm shadow-sm ${
                              msg.sender === "user"
                                ? "bg-[#124076] text-white rounded-br-none"
                                : "bg-white text-gray-800 rounded-bl-none border border-gray-100"
                            }`}
                          >
                            {msg.sender === "system" &&
                            index === messages.length - 1 &&
                            !isHumanMode ? (
                              <Typewriter text={msg.message} speed={15} />
                            ) : (
                              <p className="whitespace-pre-wrap leading-relaxed">
                                {msg.message}
                              </p>
                            )}
                            <p
                              className={`text-[9px] mt-1 text-right ${msg.sender === "user" ? "text-blue-200" : "text-gray-400"}`}
                            >
                              {new Date(msg.created_at).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex gap-2">
                          <div className="shrink-0 w-7 h-7 rounded-full bg-[#124076] flex items-center justify-center">
                            <SparklesIcon className="h-3.5 w-3.5 text-yellow-300" />
                          </div>
                          <div className="bg-white px-3 py-2.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                            <div className="flex gap-1 items-center h-5">
                              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 bg-white border-t border-gray-100">
                      <form
                        onSubmit={handleSendMessage}
                        className="relative flex items-center gap-2"
                      >
                        <input
                          type="text"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          placeholder="Ketik pesan..."
                          disabled={isTyping}
                          className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#124076] focus:ring-1 focus:ring-[#124076] rounded-lg text-sm transition-all outline-none text-gray-800 placeholder-gray-400"
                        />
                        <button
                          type="submit"
                          disabled={!inputText.trim() || isTyping}
                          className="absolute right-2 p-1.5 bg-[#124076] text-white rounded-md hover:bg-blue-800 disabled:bg-gray-300 transition-colors shadow-sm"
                        >
                          <PaperAirplaneIcon className="h-4 w-4" />
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}