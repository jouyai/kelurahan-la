import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabaseClient";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateAIContext } from "../data/knowledgeBase";
import { useLiveChat } from "../context/LiveChatContext";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// --- ICONS (Lucide React - Konsisten dengan page lain) ---
import {
  MessageSquare,
  X,
  Send,
  User,
  Bot,
  Sparkles,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { useData } from "../hooks/useContent";

// --- KONFIGURASI AI ---
// Inisialisasi genAI akan dilakukan di dalam handler untuk memastikan Key terbaru terbaca.
const GENAI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

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

export default function LiveChatWidget() {
  // Get values from context
  const { isOpen, setIsOpen, isHumanMode: contextHumanMode, setIsHumanMode: setContextHumanMode, resetHumanMode, chatTopic } = useLiveChat();

  const showWidget = isOpen;
  const toggleWidget = setIsOpen;

  const [sessionId, setSessionId] = useState(null);

  // State Form Identitas
  const [showIdentityForm, setShowIdentityForm] = useState(true);
  const [userIdentity, setUserIdentity] = useState({ name: "", contact: "" });
  const [isRegistering, setIsRegistering] = useState(false);

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isHumanMode, setIsHumanMode] = useState(contextHumanMode || false);
  const [isTyping, setIsTyping] = useState(false);
  const [greeting, setGreeting] = useState("Selamat Pagi");
  const lastExtractedTopicRef = useRef(chatTopic || null);

  // Sync local isHumanMode with context
  useEffect(() => {
    setIsHumanMode(contextHumanMode || false);
  }, [contextHumanMode]);

  const messagesEndRef = useRef(null);

  // --- FETCH DYNAMIC DATA FOR BOT CONTEXT ---
  const { data: dbLayanan } = useData('items', { type: 'layanan' });
  const { data: dbFasilitas } = useData('items', { type: 'fasilitas' });

  // LOGIC AUTO CONNECT STAFF when contextHumanMode is true
  useEffect(() => {
    const connectStaff = async () => {
      if (showWidget && contextHumanMode) {
        setIsHumanMode(true);
        setContextHumanMode(true);
        if (sessionId) {
          await supabase
            .from("chat_sessions")
            .update({ status: "live", last_message_at: new Date() })
            .eq("id", sessionId);
        }
        resetHumanMode();
      }
    };
    connectStaff();
  }, [showWidget, contextHumanMode, sessionId, setContextHumanMode, resetHumanMode]);

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
        { event: "INSERT", schema: "public", table: "chat_messages", filter: `session_id=eq.${sessionId}` },
        (payload) => {
          setMessages((prev) => {
            if (prev.find((m) => m.id === payload.new.id)) return prev;
            return [...prev, payload.new];
          });
          if (payload.new.sender === "system") setIsTyping(false);
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "chat_sessions", filter: `id=eq.${sessionId}` },
        (payload) => {
          if (payload.new.status === "bot" || payload.new.status === "resolved") {
            setIsHumanMode(false);
          } else if (payload.new.status === "live") {
            setIsHumanMode(true);
          }
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showWidget, isTyping, showIdentityForm]);

  // Inject consultation message when chat is opened with a topic
  useEffect(() => {
    const injectConsultationMessage = async () => {
      if (showWidget && chatTopic && sessionId && !showIdentityForm) {
        // Check if consultation message already exists for this topic
        const { data: existingMessages } = await supabase
          .from("chat_messages")
          .select("message")
          .eq("session_id", sessionId)
          .order("created_at", { ascending: false })
          .limit(5);

        const hasConsultationMessage = existingMessages?.some(msg =>
          msg.message.includes(chatTopic) &&
          (msg.message.includes("Halo, saya ingin bertanya mengenai") ||
            msg.message.includes("Saya ada pertanyaan lain mengenai"))
        );

        if (!hasConsultationMessage) {
          // Update session timestamp
          await supabase
            .from("chat_sessions")
            .update({ last_message_at: new Date() })
            .eq("id", sessionId);

          // Send consultation message with consistent format
          // If there are existing messages, use "Saya ada pertanyaan lain", otherwise use "Halo"
          const consultationMessage = (existingMessages && existingMessages.length > 0)
            ? `Saya ada pertanyaan lain mengenai layanan : ${chatTopic}`
            : `Halo, saya ingin bertanya mengenai layanan : ${chatTopic}`;

          await supabase.from("chat_messages").insert([
            { session_id: sessionId, sender: "user", message: consultationMessage }
          ]);

          // Update last_message_at
          await supabase
            .from("chat_sessions")
            .update({ last_message_at: new Date() })
            .eq("id", sessionId);
        }
      }
    };

    injectConsultationMessage();
  }, [showWidget, chatTopic, sessionId, showIdentityForm]);

  // 3. HANDLER: SUBMIT FORM IDENTITAS
  const handleStartChat = async (e) => {
    e.preventDefault();
    if (!userIdentity.name.trim() || !userIdentity.contact.trim()) return;

    setIsRegistering(true);
    // Start with bot mode by default, or live if context specifically requested it
    const initialStatus = contextHumanMode ? "live" : "bot";

    try {
      // Prepare insert data
      const insertData = {
        user_name: userIdentity.name,
        contact: userIdentity.contact,
        status: initialStatus,
      };

      // Hapus penggunaan kolom 'topic' karena tabel di DB mungkin belum ada kolom tersebut.
      // Topik akan dideteksi dari isi pesan (Message Based) oleh Dashboard/System.
      // if (chatTopic) {
      //   insertData.topic = chatTopic;
      // }

      const { data, error } = await supabase
        .from("chat_sessions")
        .insert([insertData])
        .select()
        .single();

      if (error) {
        console.error("Error creating chat session:", error);
        alert("Gagal membuat sesi chat. Silakan coba lagi.");
        setIsRegistering(false);
        return;
      }

      if (data) {
        localStorage.setItem("chat_session_id", data.id);
        setSessionId(data.id);
        setShowIdentityForm(false);

        // Set topic if chatTopic is provided (update after insert to be safe)
        if (chatTopic) {
          await supabase
            .from("chat_sessions")
            .update({ last_message_at: new Date() })
            .eq("id", data.id);
        }

        if (initialStatus === "live") {
          await supabase.from("chat_messages").insert([
            { session_id: data.id, sender: "system", message: "Anda terhubung dengan layanan Staff. Silakan sampaikan keperluan Anda." },
          ]);
        }

        if (chatTopic) {
          // Kirim pesan konsultasi awal sesuai topik yang dipilih warga
          await supabase.from("chat_messages").insert([
            { session_id: data.id, sender: "user", message: `Halo, saya ingin bertanya mengenai layanan : ${chatTopic}` },
          ]);
        }
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsRegistering(false);
    }
  };

  // Helper function to extract topic from consultation messages
  const extractTopicFromMessage = (message) => {
    // Pattern 1: "Halo, saya ingin bertanya mengenai layanan : [topik]" or "Halo, saya ingin bertanya mengenai [topik]"
    // Support berbagai variasi: dengan/tanpa koma, dengan/tanpa "layanan :", dengan/tanpa titik
    const pattern1 = /Halo,?\s+saya\s+ingin\s+bertanya\s+mengenai\s+(?:layanan\s*:\s*)?(.+?)(?:\.|$|,)/i;
    // Pattern 2: "Saya ada pertanyaan lain mengenai layanan : [topik]" or "Saya ada pertanyaan lain mengenai [topik]"
    const pattern2 = /Saya\s+ada\s+pertanyaan\s+lain\s+mengenai\s+(?:layanan\s*:\s*)?(.+?)(?:\.|$|,)/i;

    // Normalize message: hapus whitespace berlebih
    const normalizedMessage = message.trim();

    const match1 = normalizedMessage.match(pattern1);
    const match2 = normalizedMessage.match(pattern2);

    if (match1 && match1[1]) {
      const topic = match1[1].trim().replace(/\.$/, ''); // Hapus titik di akhir jika ada
      return topic || null;
    }
    if (match2 && match2[1]) {
      const topic = match2[1].trim().replace(/\.$/, ''); // Hapus titik di akhir jika ada
      return topic || null;
    }

    return null;
  };

  // 4. HANDLER: KIRIM PESAN (LOGIC UTAMA)
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !sessionId) return;

    const userText = inputText;
    setInputText("");

    // Insert user message first
    await supabase.from("chat_messages").insert([{ session_id: sessionId, sender: "user", message: userText }]);

    // Check if this is a consultation message and extract topic
    const extractedTopic = extractTopicFromMessage(userText);

    // Always update last_message_at
    await supabase.from("chat_sessions").update({ last_message_at: new Date() }).eq("id", sessionId);

    if (extractedTopic) {
      // Always update last_message_at (and topic if the column is added later, 
      // but for now we remove it to avoid 400 error)
      const { error: updateError } = await supabase
        .from("chat_sessions")
        .update({ last_message_at: new Date() })
        .eq("id", sessionId);

      if (updateError) {
        console.error("Error updating session:", updateError);
      }

      // If topic is different from last seen, add system message
      if (lastExtractedTopicRef.current !== extractedTopic) {
        lastExtractedTopicRef.current = extractedTopic;
        await supabase.from("chat_messages").insert([
          {
            session_id: sessionId,
            sender: "system",
            message: `[Sistem] User ingin berkonsultasi mengenai topik baru: ${extractedTopic}`
          }
        ]);
      }
    }

    if (isHumanMode) return;

    // AI Processing - Client Side (Using Knowledge Base)
    setIsTyping(true);
    try {
      if (!GENAI_API_KEY || GENAI_API_KEY.includes("your_gemini_api_key") || GENAI_API_KEY === "") {
        console.error("DEBUG: VITE_GEMINI_API_KEY is missing or invalid");
        throw new Error("API Key Gemini belum diisi dengan benar di file .env");
      }

      console.log("DEBUG: Initializing Gemini with Key starting with:", GENAI_API_KEY.substring(0, 5));
      const genAI = new GoogleGenerativeAI(GENAI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
      const contextData = generateAIContext(dbLayanan, dbFasilitas);

      const prompt = `
        ${contextData}
        
        DATA PERCAKAPAN SAAT INI:
        Nama Warga: ${userIdentity.name || "Warga"}
        Input Warga: "${userText}"
        
        Bantu warga tersebut sesuai dengan Database Persyaratan dan Aturan Komunikasi yang telah ditetapkan di atas.
      `;

      const result = await model.generateContent(prompt);
      const aiResponse = result.response.text();

      if (aiResponse.includes("HANDOVER_TO_HUMAN")) {
        setIsHumanMode(true);
        await supabase.from("chat_sessions").update({ status: "live", last_message_at: new Date() }).eq("id", sessionId);
        const fallbackMsg = "Mohon maaf, saya akan menghubungkan Anda dengan Petugas Kelurahan kami. Mohon tunggu sebentar...";
        await supabase.from("chat_messages").insert([{ session_id: sessionId, sender: "system", message: fallbackMsg }]);
      } else {
        await supabase.from("chat_messages").insert([{ session_id: sessionId, sender: "system", message: aiResponse }]);
      }
    } catch (error) {
      console.error("AI Error:", error);

      let errorMsg = "Gagal menghubungi asisten AI. Menghubungkan ke petugas...";

      // Handle Specific Rate Limit / Quota Error
      if (error.message?.includes("429") || error.message?.includes("quota")) {
        errorMsg = "Mohon maaf, sistem AI sedang sibuk (kuota penuh). Saya akan hubungkan Anda langsung ke Petugas Kelurahan kami. Mohon tunggu...";
      }

      setIsHumanMode(true);
      await supabase.from("chat_messages").insert([{ session_id: sessionId, sender: "system", message: errorMsg }]);
      await supabase.from("chat_sessions").update({ status: "live", last_message_at: new Date() }).eq("id", sessionId);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 font-sans">

      {/* --- CHAT WINDOW --- */}
      {showWidget && (
        <Card className="w-[350px] h-[500px] shadow-2xl border-none animate-in slide-in-from-bottom-10 fade-in duration-300 overflow-hidden flex flex-col">

          {/* HEADER */}
          <div className="bg-[#0B3D2E] p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex gap-3 items-center">
              <div className="relative">
                <Avatar className="h-10 w-10 border-2 border-white/20">
                  <AvatarImage src="/logo_kel.png" />
                  <AvatarFallback className="bg-white/10 text-white">LA</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#0B3D2E] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm">
                  {showIdentityForm ? "Layanan Konsultasi" : isHumanMode ? "Petugas Kelurahan" : "Asisten Digital (ADILA)"}
                </h4>
                <p className="text-xs text-green-100 flex items-center gap-1">
                  {showIdentityForm ? "PTSP Lenteng Agung" : isHumanMode ? "Online" : "AI Assistant (Online)"}
                </p>
              </div>
            </div>
            <button onClick={() => toggleWidget(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-hidden flex flex-col bg-slate-50 relative">

            {showIdentityForm ? (
              // VIEW 1: FORM IDENTITAS
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0B3D2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-[#0B3D2E]" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">Konsultasi Layanan</h3>
                  <p className="text-xs text-slate-500 mt-1">Mohon isi identitas singkat untuk memulai bantuan layanan yang akurat.</p>
                </div>

                <form onSubmit={handleStartChat} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600">Nama Lengkap</label>
                    <Input
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={userIdentity.name}
                      onChange={(e) => setUserIdentity({ ...userIdentity, name: e.target.value })}
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600">No. WhatsApp / Email</label>
                    <Input
                      required
                      placeholder="0812..."
                      value={userIdentity.contact}
                      onChange={(e) => setUserIdentity({ ...userIdentity, contact: e.target.value })}
                      className="bg-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 mt-2"
                    disabled={isRegistering}
                  >
                    {isRegistering ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    {isRegistering ? "Memproses..." : "Mulai Chat"}
                  </Button>
                </form>
              </div>
            ) : (
              // VIEW 2: CHAT ROOM
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Greeting Bubble */}
                  <div className="flex gap-2">
                    <Avatar className="h-8 w-8 mt-1 border border-slate-200">
                      <AvatarImage src="/logo_kel.png" />
                      <AvatarFallback className="bg-[#0B3D2E] text-white"><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-700 max-w-[85%]">
                      <Typewriter
                        text={`${greeting}, Bapak/Ibu ${userIdentity.name || "Warga"}! 👋\nSaya ADILA (Asisten Digital Lenteng Agung).\n\nAda yang dapat saya bantu mengenai layanan kelurahan?`}
                        speed={10}
                      />
                    </div>
                  </div>

                  {/* Messages Loop */}
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <Avatar className="h-8 w-8 mt-1 border border-slate-200 shrink-0">
                        {msg.sender === "user" ? (
                          <AvatarFallback className="bg-slate-200 text-slate-600"><User className="h-4 w-4" /></AvatarFallback>
                        ) : (
                          <AvatarFallback className={`${isHumanMode && msg.sender === "system" && !msg.message.includes("bot") ? "bg-amber-500" : "bg-[#0B3D2E]"} text-white`}>
                            {isHumanMode && msg.sender === "system" ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                          </AvatarFallback>
                        )}
                      </Avatar>

                      <div className={`p-3 rounded-2xl shadow-sm text-sm max-w-[85%] ${msg.sender === "user"
                        ? "bg-[#0B3D2E] text-white rounded-tr-none"
                        : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
                        }`}>
                        {msg.sender === "system" && !isHumanMode ? (
                          <Typewriter text={msg.message} speed={5} />
                        ) : (
                          <p className="whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                        )}
                        <span className={`text-[9px] block text-right mt-1 ${msg.sender === "user" ? "text-green-200" : "text-slate-400"}`}>
                          {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-2">
                      <Avatar className="h-8 w-8 border border-slate-200">
                        <AvatarFallback className="bg-[#0B3D2E] text-white"><Sparkles className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 w-16 flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white border-t border-slate-100">
                  <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                    <Input
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Ketik pesan..."
                      disabled={isTyping}
                      className="pr-12 bg-slate-50 focus-visible:ring-[#0B3D2E]"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={!inputText.trim() || isTyping}
                      className="absolute right-1 top-1 h-8 w-8 bg-[#0B3D2E] hover:bg-[#0B3D2E]/90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}
          </div>
        </Card>
      )}

      {/* --- TOGGLE BUTTON (FAB) --- */}
      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${showWidget ? 'bg-red-500 hover:bg-red-600 rotate-90' : 'bg-[#0B3D2E] hover:bg-[#092e23] hover:scale-110'}`}
        onClick={() => toggleWidget(!showWidget)}
      >
        {showWidget ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <div className="relative">
            <MessageSquare className="h-6 w-6 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border border-white"></span>
            </span>
          </div>
        )}
      </Button>

    </div>
  );
}