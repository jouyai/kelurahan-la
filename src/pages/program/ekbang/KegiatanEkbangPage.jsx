import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import {
  ArrowLeft,
  HardHat,
  TrendingUp,
  Brush,
  Users,
  Truck,
  MessageSquare,
  Hammer,
  Loader2
} from 'lucide-react';
import { useData } from "../../../hooks/useContent";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Users': return <Users className="h-6 w-6 text-blue-600" />;
    case 'Brush': return <Brush className="h-6 w-6 text-green-600" />;
    case 'Truck': return <Truck className="h-6 w-6 text-orange-600" />;
    case 'TrendingUp': return <TrendingUp className="h-6 w-6 text-purple-600" />;
    case 'Hammer': return <Hammer className="h-6 w-6 text-red-600" />;
    default: return <HardHat className="h-6 w-6 text-slate-600" />;
  }
};

export default function KegiatanEkbangPage() {
  const { data: dbKegiatan, loading } = useData('items', { type: 'kegiatan_ekbang' });

  const isLoading = loading;

  const kegiatanList = dbKegiatan.length > 0 ? dbKegiatan.map(k => ({
    id: k.id,
    title: k.title,
    desc: k.description,
    icon: getIconComponent(k.data?.icon),
    color: k.data?.color || "bg-slate-50 border-slate-100"
  })) : [
    {
      id: 1,
      title: "Musrenbang Kelurahan",
      desc: "Forum musyawarah tahunan untuk menyepakati Rencana Kerja Pembangunan (RKP) desa/kelurahan.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-100",
    },
    {
      id: 2,
      title: "Penataan Kawasan Unggulan",
      desc: "Program triwulan penataan lingkungan kumuh/tidur menjadi taman atau ruang terbuka hijau yang asri.",
      icon: <Brush className="h-6 w-6 text-green-600" />,
      color: "bg-green-50 border-green-100",
    },
    {
      id: 3,
      title: "Pasukan Oranye (PPSU)",
      desc: "Penanganan prasarana dan sarana umum seperti pembersihan saluran, jalan, dan penebangan pohon rawan tumbang.",
      icon: <Truck className="h-6 w-6 text-orange-600" />,
      color: "bg-orange-50 border-orange-100",
    },
    {
      id: 4,
      title: "Pendampingan UMKM (Jakpreneur)",
      desc: "Pembinaan pelaku usaha mikro melalui pelatihan, perizinan (NIB), dan pemasaran produk.",
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      color: "bg-purple-50 border-purple-100",
    },
    {
      id: 5,
      title: "Kerja Bakti Massal",
      desc: "Kegiatan gotong royong warga setiap minggu pagi untuk membersihkan lingkungan RW.",
      icon: <Hammer className="h-6 w-6 text-red-600" />,
      color: "bg-red-50 border-red-100",
    },
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
        {/* Pattern Construction */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <HardHat className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Ekonomi & Pembangunan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kegiatan Pembangunan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Mewujudkan infrastruktur yang handal and ekonomi warga yang mandiri melalui berbagai program strategis.
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
                <HardHat className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Program Unggulan</h2>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {kegiatanList.map((item) => (
                <Card key={item.id} className={`shadow-sm hover:shadow-md transition-all group ${item.color}`}>
                  <CardContent className="p-5 flex flex-col sm:flex-row gap-5 items-start">
                    <div className="shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#0B3D2E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* Widget Aduan Fisik */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Lapor Kerusakan
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Temukan jalan berlubang, saluran mampet, atau lampu jalan mati? Laporkan segera agar ditindaklanjuti oleh PPSU.
                </p>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h5 className="font-bold text-orange-800 text-xs uppercase mb-2">Respon Cepat</h5>
                  <ul className="list-disc ml-4 text-xs text-orange-700 space-y-1">
                    <li>Penebangan pohon rawan</li>
                    <li>Pembersihan tali air</li>
                    <li>Perbaikan jalan lingkungan</li>
                  </ul>
                </div>

                <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold" asChild>
                  <Link to="/pengaduan">
                    Buat Laporan Fisik
                  </Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}