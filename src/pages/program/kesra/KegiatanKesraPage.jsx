import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import { 
  ArrowLeft, 
  Heart, 
  CalendarDays, 
  MapPin, 
  HandHeart, 
  Activity, 
  GraduationCap, 
  Gift,
  MessageSquare,
  Info
} from 'lucide-react';

// Dummy Data Kegiatan Kesra
const kegiatanKesra = [
  {
    id: 1,
    title: "Posyandu Balita & Lansia",
    desc: "Layanan kesehatan dasar rutin untuk pemantauan tumbuh kembang balita dan cek kesehatan lansia di setiap RW.",
    jadwal: "Awal Bulan (Tgl 1-5)",
    lokasi: "Balai Warga RW 01 - RW 10",
    icon: <Activity className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
  },
  {
    id: 2,
    title: "Penyaluran Bantuan Sosial",
    desc: "Distribusi bantuan pangan non-tunai (BPNT) dan bantuan sosial tunai (BST) dari pemerintah pusat & daerah.",
    jadwal: "Sesuai Jadwal Dinsos",
    lokasi: "Kantor Kelurahan / RPTRA",
    icon: <HandHeart className="h-6 w-6 text-red-600" />,
    color: "bg-red-50 border-red-100",
  },
  {
    id: 3,
    title: "Senam Jantung Sehat",
    desc: "Olahraga bersama warga untuk menjaga kebugaran fisik dan mempererat silaturahmi antar tetangga.",
    jadwal: "Minggu Pagi (06:30 WIB)",
    lokasi: "Halaman RPTRA Lenteng Agung",
    icon: <Heart className="h-6 w-6 text-green-600" />,
    color: "bg-green-50 border-green-100",
  },
  {
    id: 4,
    title: "Santunan Yatim & Dhuafa",
    desc: "Program kepedulian sosial berupa pemberian santunan kepada anak yatim piatu dan kaum dhuafa.",
    jadwal: "Ramadhan & Muharram",
    lokasi: "Masjid Jami Al-Ikhlas",
    icon: <Gift className="h-6 w-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-100",
  },
  {
    id: 5,
    title: "Pelatihan Keterampilan",
    desc: "Pelatihan memasak, menjahit, dan kerajinan tangan untuk meningkatkan ekonomi keluarga.",
    jadwal: "Triwulan (Per 3 Bulan)",
    lokasi: "Aula Kelurahan Lt. 3",
    icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
    color: "bg-orange-50 border-orange-100",
  },
];

export default function KegiatanKesraPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern Heart */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Heart className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Kesejahteraan Rakyat
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kegiatan Sosial & Kesehatan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Berbagai program untuk meningkatkan kualitas hidup, kesehatan, dan kepedulian sosial warga.
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </Link>
        </Button>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: LIST KEGIATAN */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-2">
               <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                 <CalendarDays className="h-6 w-6 text-[#0B3D2E]" />
               </div>
               <h2 className="text-2xl font-bold text-slate-900">Agenda Rutin</h2>
            </div>

            <div className="space-y-4">
              {kegiatanKesra.map((item) => (
                <Card key={item.id} className={`shadow-sm hover:shadow-md transition-all group ${item.color}`}>
                  <CardContent className="p-5 flex flex-col sm:flex-row gap-5">
                    {/* Icon */}
                    <div className="shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#0B3D2E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {item.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="bg-white/60 text-slate-600 hover:bg-white border border-slate-200 font-normal">
                          <CalendarDays className="h-3 w-3 mr-1" /> {item.jadwal}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/60 text-slate-600 hover:bg-white border border-slate-200 font-normal">
                          <MapPin className="h-3 w-3 mr-1" /> {item.lokasi}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">
            
            {/* Widget Info Kesra */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <Info className="h-5 w-5" /> Fokus Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Seksi Kesra bertugas membantu Lurah dalam bidang pembangunan manusia, kesehatan, pendidikan, mental spiritual, dan bantuan sosial.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h5 className="font-bold text-purple-800 text-xs uppercase mb-2">Prioritas Utama</h5>
                  <ul className="list-disc ml-4 text-xs text-purple-700 space-y-1">
                    <li>Verifikasi data Bansos</li>
                    <li>Fasilitasi Posyandu/Posbindu</li>
                    <li>Koordinasi kegiatan keagamaan</li>
                  </ul>
                </div>

                <div className="bg-[#0B3D2E]/5 rounded-lg p-5 text-center border border-[#0B3D2E]/10 mt-4">
                  <MessageSquare className="h-8 w-8 text-[#0B3D2E] mx-auto mb-2" />
                  <h5 className="font-bold text-[#0B3D2E] text-sm mb-1">Informasi Bansos?</h5>
                  <p className="text-xs text-slate-600 mb-4">
                    Cek jadwal penyaluran atau syarat pengajuan bantuan melalui petugas kami.
                  </p>
                  <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold" asChild>
                    <Link to="/pengaduan">
                      Tanya Petugas Kesra
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}