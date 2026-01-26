import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import {
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Utensils,
  Scissors,
  Monitor,
  Wrench,
  CalendarCheck,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from "../../../hooks/useContent";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Utensils': return <Utensils className="h-6 w-6 text-orange-600" />;
    case 'Scissors': return <Scissors className="h-6 w-6 text-pink-600" />;
    case 'Monitor': return <Monitor className="h-6 w-6 text-blue-600" />;
    case 'Wrench': return <Wrench className="h-6 w-6 text-slate-600" />;
    default: return <Briefcase className="h-6 w-6 text-slate-600" />;
  }
};

export default function PelatihanPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('pelatihan');
  const { data: dbPelatihan, loading: pelatihanLoading } = useData('items', { type: 'pelatihan_kerja' });

  const isLoading = contentLoading || pelatihanLoading;

  const pelatihanList = dbPelatihan.length > 0 ? dbPelatihan.map(p => ({
    id: p.id,
    title: p.title,
    desc: p.description,
    kuota: p.data?.kuota || "N/A",
    icon: getIconComponent(p.data?.icon),
    color: p.data?.color || "bg-slate-50 border-slate-200"
  })) : [
    {
      id: 1,
      title: "Tata Boga & Kuliner",
      desc: "Pelatihan memasak kue basah, kering, and masakan nusantara untuk wirausaha katering.",
      kuota: "20 Orang/Batch",
      icon: <Utensils className="h-6 w-6 text-orange-600" />,
      color: "bg-orange-50 border-orange-200"
    },
    {
      id: 2,
      title: "Tata Busana & Menjahit",
      desc: "Pelatihan dasar menjahit, pola, and desain busana tingkat dasar hingga mahir.",
      kuota: "15 Orang/Batch",
      icon: <Scissors className="h-6 w-6 text-pink-600" />,
      color: "bg-pink-50 border-pink-200"
    },
    {
      id: 3,
      title: "Teknisi Komputer & HP",
      desc: "Pelatihan perakitan komputer, instalasi software, and servis handphone.",
      kuota: "10 Orang/Batch",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 4,
      title: "Teknik Las & AC",
      desc: "Pelatihan kejuruan teknik las listrik and perawatan/perbaikan AC split.",
      kuota: "12 Orang/Batch",
      icon: <Wrench className="h-6 w-6 text-slate-600" />,
      color: "bg-slate-50 border-slate-200"
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
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <GraduationCap className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Pemberdayaan Masyarakat
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Pelatihan Kerja & Wirausaha"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Tingkatkan keahlian (skill) Anda melalui program pelatihan gratis dari PPKD and Kelurahan."}
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

          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Jenis Pelatihan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pelatihanList.map((item) => (
                <Card key={item.id} className={`border shadow-sm hover:shadow-lg transition-all ${item.color}`}>
                  <CardHeader className="pb-2">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-3">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4 h-16">
                      {item.desc}
                    </p>
                    <Badge variant="secondary" className="bg-white/80 text-slate-700">
                      Kuota: {item.kuota}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-[#0B3D2E] text-white border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5 text-amber-400" />
                  Info Pendaftaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-300">
                  Pendaftaran pelatihan biasanya dibuka setiap awal triwulan. Syarat umum:
                </p>
                <ul className="list-disc ml-4 text-xs text-slate-300 space-y-1">
                  <li>KTP DKI Jakarta (Prioritas Domisili)</li>
                  <li>Usia 18 - 45 Tahun</li>
                  <li>Belum bekerja / Sedang mencari kerja</li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B3D2E] font-bold border-none" asChild>
                  <Link to="/pengaduan">
                    Tanya Jadwal
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