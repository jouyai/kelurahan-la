import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- ICONS ---
import {
  Siren,
  MapPin,
  Loader2,
  ShieldAlert,
  Eye,
  AlertTriangle,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';
import { useData } from "../../hooks/useContent";

// Dummy Data Anggota FKDM
export default function FkdmPage() {
  const { data: dbFKDM, loading: fkdmLoading } = useData('items', { type: 'fkdm' });

  const isLoading = fkdmLoading;

  const listFKDM = dbFKDM.length > 0 ? dbFKDM.map(f => ({
    id: f.id,
    name: f.title,
    image_url: f.image_url,
    jabatan: f.data?.jabatan || "Anggota",
    wilayah: f.data?.wilayah || f.description || "",
  })) : [
    { id: 1, name: "Bapak H. Zamroni", jabatan: "Ketua FKDM", wilayah: "Kelurahan Lenteng Agung", color: "bg-red-100 text-red-700" },
    { id: 2, name: "Bapak Dedi Suryadi", jabatan: "Wakil Ketua", wilayah: "Kelurahan Lenteng Agung", color: "bg-orange-100 text-orange-700" },
    { id: 3, name: "Ibu Siti Aminah", jabatan: "Sekretaris", wilayah: "Kelurahan Lenteng Agung", color: "bg-blue-100 text-blue-700" },
    { id: 4, name: "Bapak Rahmat Hidayat", jabatan: "Anggota", wilayah: "Bidang Pemerintahan", color: "bg-gray-100 text-gray-700" },
    { id: 5, name: "Bapak Joko Susilo", jabatan: "Anggota", wilayah: "Bidang Keamanan", color: "bg-gray-100 text-gray-700" },
    { id: 6, name: "Ibu Wahyuni", jabatan: "Anggota", wilayah: "Bidang Kesejahteraan", color: "bg-gray-100 text-gray-700" },
    { id: 7, name: "Bapak Anton", jabatan: "Anggota", wilayah: "Bidang Pembangunan", color: "bg-gray-100 text-gray-700" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-[#0B3D2E] animate-spin" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">

      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern Shield */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-red-400 text-red-300 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Keamanan & Ketertiban
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Forum Kewaspadaan Dini Masyarakat
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Mendeteksi potensi ancaman, tantangan, hambatan, and gangguan di lingkungan masyarakat sejak dini.
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

          {/* LEFT COLUMN: LIST ANGGOTA */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <ShieldAlert className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Anggota FKDM</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listFKDM.map((member) => (
                <Card key={member.id} className="border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4 border-4 border-slate-50 shadow-sm">
                      <AvatarImage src={member.image_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} />
                      <AvatarFallback className="bg-red-600 text-white text-xl">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-red-600 transition-colors">
                      {member.name}
                    </h3>
                    <Badge variant="outline" className="mb-3 border-slate-200 text-slate-600 font-normal">
                      {member.jabatan}
                    </Badge>

                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-auto">
                      <MapPin className="h-3 w-3" />
                      <span>{member.wilayah}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* Widget Deteksi Dini */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-red-700 text-lg font-bold flex items-center gap-2">
                  <Eye className="h-5 w-5" /> Deteksi & Cegah
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  FKDM membantu pemerintah dalam deteksi dini potensi bencana alam, gesekan sosial, dan gangguan keamanan agar dapat dicegah sebelum meluas.
                </p>

                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h5 className="font-bold text-red-800 text-xs uppercase mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-3 w-3" /> Fokus Pengawasan
                  </h5>
                  <ul className="list-disc ml-4 text-xs text-red-700 space-y-1">
                    <li>Potensi Banjir & Longsor</li>
                    <li>Konflik Sosial Warga</li>
                    <li>Gangguan Ketertiban Umum</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-5 text-center border border-slate-200 mt-4">
                  <Siren className="h-8 w-8 text-red-600 mx-auto mb-2 animate-pulse" />
                  <h5 className="font-bold text-slate-800 text-sm mb-1">Lihat Potensi Bahaya?</h5>
                  <p className="text-xs text-slate-600 mb-4">
                    Segera laporkan hal mencurigakan atau tanda-tanda bencana kepada kami.
                  </p>
                  <Button variant="destructive" className="w-full bg-red-600 hover:bg-red-700 font-bold" asChild>
                    <Link to="/pengaduan">
                      Lapor Sekarang
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