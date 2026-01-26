import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import {
  ArrowLeft,
  Users,
  ClipboardCheck,
  Heart,
  Leaf,
  Banknote,
  Megaphone,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from "../../../hooks/useContent";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'ClipboardCheck': return <ClipboardCheck className="h-6 w-6 text-blue-600" />;
    case 'Heart': return <Heart className="h-6 w-6 text-red-600" />;
    case 'Leaf': return <Leaf className="h-6 w-6 text-green-600" />;
    case 'Banknote': return <Banknote className="h-6 w-6 text-purple-600" />;
    default: return <Users className="h-6 w-6 text-slate-600" />;
  }
};

export default function DasawismaPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('dasawisma');
  const { data: dbActivities, loading: activitiesLoading } = useData('items', { type: 'kegiatan_dasawisma' });

  const isLoading = contentLoading || activitiesLoading;

  const activitiesList = dbActivities.length > 0 ? dbActivities.map(a => ({
    id: a.id,
    title: a.title,
    desc: a.description,
    icon: getIconComponent(a.data?.icon),
    color: a.data?.color || "bg-slate-50 border-slate-100",
  })) : [
    {
      id: 1,
      title: "Pendataan Keluarga (Carik)",
      desc: "Melakukan pendataan terpadu satu pintu meliputi data kesehatan, pendidikan, and ekonomi warga secara door-to-door.",
      icon: <ClipboardCheck className="h-6 w-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-100",
    },
    {
      id: 2,
      title: "Jumantik (Jentik Nyamuk)",
      desc: "Pemeriksaan rutin tempat penampungan air di rumah warga untuk mencegah perkembangbiakan nyamuk DBD setiap Jumat.",
      icon: <Heart className="h-6 w-6 text-red-600" />,
      color: "bg-red-50 border-red-100",
    },
    {
      id: 3,
      title: "Tanaman Obat (TOGA)",
      desc: "Pemanfaatan lahan pekarangan sempit untuk budidaya tanaman obat and sayuran guna ketahanan pangan keluarga.",
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      color: "bg-green-50 border-green-100",
    },
    {
      id: 4,
      title: "UP2K (Usaha Keluarga)",
      desc: "Pemberdayaan ibu rumah tangga melalui pelatihan kerajinan and kuliner untuk menambah penghasilan keluarga.",
      icon: <Banknote className="h-6 w-6 text-purple-600" />,
      color: "bg-purple-50 border-purple-100",
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
        {/* Pattern Users */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Users className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Pemberdayaan Keluarga
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Kelompok Dasawisma"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Ujung tombak pemberdayaan kesejahteraan keluarga (PKK) di tingkat rukun tetangga."}
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

          {/* LEFT COLUMN: KEGIATAN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Intro Card */}
            <Card className="border-l-4 border-l-[#0B3D2E] shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-slate-800">
                  <Users className="h-6 w-6 text-[#0B3D2E]" /> Mengenal Dasawisma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Dasawisma adalah kelompok ibu-ibu yang berasal dari <strong>10-20 kepala keluarga (KK)</strong> rumah yang bertetangga. Kelompok ini memiliki peran vital dalam membantu pemerintah kelurahan memantau kondisi warga secara <em>real-time</em>, mulai dari ibu hamil, balita, hingga lansia.
                </p>
              </CardContent>
            </Card>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <Leaf className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Kegiatan Pokok</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {activitiesList.map((item) => (
                <Card key={item.id} className={`shadow-sm hover:shadow-md transition-all group ${item.color}`}>
                  <CardHeader className="pb-2">
                    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-3">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-[#0B3D2E] transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* 10 Program Pokok PKK */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold text-center">
                  10 Program Pokok PKK
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {[
                    "Penghayatan & Pengamalan Pancasila",
                    "Gotong Royong",
                    "Pangan",
                    "Sandang",
                    "Perumahan & Tata Laksana RT",
                    "Pendidikan & Keterampilan",
                    "Kesehatan",
                    "Pengembangan Kehidupan Berkoperasi",
                    "Kelestarian Lingkungan Hidup",
                    "Perencanaan Sehat"
                  ].map((prog, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                      <span>{prog}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#0B3D2E]/5 rounded-lg p-5 text-center border border-[#0B3D2E]/10 mt-6">
                  <Megaphone className="h-8 w-8 text-[#0B3D2E] mx-auto mb-2" />
                  <h5 className="font-bold text-[#0B3D2E] text-sm mb-1">Ingin Bergabung?</h5>
                  <p className="text-xs text-slate-600 mb-4">
                    Mari berkontribusi untuk lingkungan sekitar dengan menjadi kader Dasawisma.
                  </p>
                  <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold" asChild>
                    <Link to="/pengaduan">
                      Hubungi PKK Kelurahan
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