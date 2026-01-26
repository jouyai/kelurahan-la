import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import { 
  ArrowLeft, 
  Users, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Building2, 
  Hand
} from 'lucide-react';

// Data Organisasi
const organizations = [
  {
    id: 1,
    name: "TP PKK Kelurahan",
    fullname: "Tim Penggerak Pemberdayaan Kesejahteraan Keluarga",
    desc: "Gerakan nasional dalam pembangunan masyarakat yang tumbuh dari bawah dengan wanita sebagai penggeraknya untuk mewujudkan keluarga sejahtera.",
    leader: "Ibu Ketua PKK",
    jadwal: "Selasa (Minggu ke-2)",
    icon: <Heart className="h-8 w-8 text-pink-600" />,
    color: "bg-pink-50 border-pink-100",
    buttonColor: "bg-pink-600 hover:bg-pink-700"
  },
  {
    id: 2,
    name: "Karang Taruna",
    fullname: "Karang Taruna Tunas Harapan",
    desc: "Wadah pengembangan generasi muda non-partisan yang tumbuh atas dasar kesadaran dan rasa tanggung jawab sosial untuk masyarakat.",
    leader: "Sdr. Ketua Karang Taruna",
    jadwal: "Sabtu Malam",
    icon: <Sparkles className="h-8 w-8 text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    id: 3,
    name: "Posyandu",
    fullname: "Pos Pelayanan Terpadu",
    desc: "Upaya kesehatan bersumberdaya masyarakat (UKBM) yang dikelola dari, oleh, untuk, dan bersama masyarakat guna memberdayakan kesehatan keluarga.",
    leader: "Koordinator Kader",
    jadwal: "Awal Bulan",
    icon: <Users className="h-8 w-8 text-green-600" />,
    color: "bg-green-50 border-green-100",
    buttonColor: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 4,
    name: "LPM",
    fullname: "Lembaga Pemberdayaan Masyarakat",
    desc: "Mitra kerja kelurahan dalam menampung dan menyalurkan aspirasi masyarakat serta menyusun rencana pembangunan partisipatif.",
    leader: "Bapak Ketua LPM",
    jadwal: "Kondisional",
    icon: <Building2 className="h-8 w-8 text-orange-600" />,
    color: "bg-orange-50 border-orange-100",
    buttonColor: "bg-orange-600 hover:bg-orange-700"
  },
  {
    id: 5,
    name: "Majelis Taklim",
    fullname: "Forum Komunikasi Majelis Taklim",
    desc: "Lembaga pendidikan non-formal Islam yang bertujuan meningkatkan keimanan dan ketaqwaan serta mempererat ukhuwah islamiyah.",
    leader: "Ust. Ketua Forum",
    jadwal: "Jumat Pagi",
    icon: <ShieldCheck className="h-8 w-8 text-purple-600" />,
    color: "bg-purple-50 border-purple-100",
    buttonColor: "bg-purple-600 hover:bg-purple-700"
  },
  {
    id: 6,
    name: "Forum Anak",
    fullname: "Forum Anak Kelurahan (FAK)",
    desc: "Wadah partisipasi anak untuk menyuarakan aspirasi dan kebutuhan anak dalam proses pembangunan kelurahan.",
    leader: "Duta Anak",
    jadwal: "Minggu Sore",
    icon: <Hand className="h-8 w-8 text-yellow-600" />,
    color: "bg-yellow-50 border-yellow-100",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700"
  }
];

export default function OrganisasiPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* === HERO SECTION === */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Users className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Mitra Pemerintah
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Lembaga Kemasyarakatan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Daftar organisasi mitra pemerintah kelurahan yang berperan aktif dalam memberdayakan masyarakat.
          </p>
        </div>
      </div>

      {/* === BREADCRUMB === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </Link>
        </Button>
      </div>

      {/* === CONTENT SECTION === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: ORGANIZATION GRID */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizations.map((org) => (
                <Card 
                  key={org.id} 
                  className={`border ${org.color} shadow-sm hover:shadow-lg transition-all group overflow-hidden`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-white p-3 rounded-2xl shadow-sm">
                        {org.icon}
                      </div>
                      <Badge variant="outline" className="bg-white/50 text-slate-500 border-slate-200">
                        Mitra Resmi
                      </Badge>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-[#0B3D2E] transition-colors">
                        {org.name}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wide">
                        {org.fullname}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {org.desc}
                      </p>
                    </div>
                    
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-col gap-1 pt-4 border-t border-slate-200/50">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Ketua:</span>
                          <span className="font-semibold text-slate-700">{org.leader}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Jadwal:</span>
                          <span className="font-semibold text-slate-700">{org.jadwal}</span>
                        </div>
                      </div>

                      <Button className={`w-full ${org.buttonColor} text-white font-bold`} asChild>
                        <Link to="/pengaduan">
                          Hubungi Pengurus
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/4 space-y-6">
            
            {/* Widget: Join Volunteer */}
            <Card className="bg-[#0B3D2E] text-white border-none shadow-lg sticky top-24">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Ingin Berkontribusi?</h4>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Jadilah bagian dari perubahan positif di lingkungan Anda. Bergabunglah menjadi relawan.
                </p>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between bg-white/10 hover:bg-white/20 text-white border-none h-auto py-3" asChild>
                    <Link to="/pengaduan">
                      <span>Karang Taruna</span>
                      <span>→</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-between bg-white/10 hover:bg-white/20 text-white border-none h-auto py-3" asChild>
                    <Link to="/pengaduan">
                      <span>Kader PKK</span>
                      <span>→</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-between bg-white/10 hover:bg-white/20 text-white border-none h-auto py-3" asChild>
                    <Link to="/pengaduan">
                      <span>Relawan Lainnya</span>
                      <span>→</span>
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