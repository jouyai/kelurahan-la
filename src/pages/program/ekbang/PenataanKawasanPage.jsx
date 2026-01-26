import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// --- ICONS ---
import {
  ArrowLeft,
  Map,
  Sprout,
  PaintBucket,
  MapPin,
  CheckCircle2,
  Clock,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from "../../../hooks/useContent";

export default function PenataanKawasanPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('penataan-kawasan');
  const { data: dbProjects, loading: projectsLoading } = useData('items', { type: 'penataan_kawasan' });

  const isLoading = contentLoading || projectsLoading;

  const projectsList = dbProjects.length > 0 ? dbProjects.map(p => ({
    id: p.id,
    title: p.title,
    desc: p.description,
    status: p.data?.status || "Direncanakan",
    progress: p.data?.progress || 0,
    triwulan: p.data?.triwulan || "",
    color: p.data?.color || "bg-slate-300",
    badgeColor: p.data?.badgeColor || "bg-slate-100 text-slate-700"
  })) : [
    {
      id: 1,
      title: "Taman Interaksi Warga RW 02",
      desc: "Pembuatan taman bermain anak, mural edukasi, and penanaman pohon pelindung di lahan tidur.",
      status: "Selesai",
      progress: 100,
      triwulan: "TW I - 2025",
      color: "bg-green-600",
      badgeColor: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      title: "Vertical Garden Gg. Haji Awi",
      desc: "Penghijauan lorong gang sempit dengan tanaman hias vertikal and pengecatan kanstin.",
      status: "Dalam Pengerjaan",
      progress: 75,
      triwulan: "TW II - 2025",
      color: "bg-amber-500",
      badgeColor: "bg-amber-100 text-amber-700"
    },
    {
      id: 3,
      title: "Penataan Bantaran Kali Ciliwung",
      desc: "Pembersihan semak belukar and pembuatan jogging track sederhana di area bantaran.",
      status: "Direncanakan",
      progress: 0,
      triwulan: "TW III - 2025",
      color: "bg-slate-300",
      badgeColor: "bg-slate-100 text-slate-700"
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
          <Sprout className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-green-400 text-green-300 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Lingkungan Hidup
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Penataan Kawasan Unggulan"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Mengubah sudut-sudut wilayah yang kurang tertata menjadi ruang hijau yang asri and bermanfaat bagi warga."}
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
                <Map className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Progres Penataan</h2>
            </div>

            <div className="space-y-6">
              {projectsList.map((item) => (
                <Card key={item.id} className="border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className={`mb-2 hover:bg-opacity-80 ${item.badgeColor} border-none`}>
                          {item.status}
                        </Badge>
                        <CardTitle className="text-lg font-bold text-slate-800">
                          {item.title}
                        </CardTitle>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">Periode</span>
                        <span className="text-sm font-semibold text-[#0B3D2E]">{item.triwulan}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Progres Fisik</span>
                        <span className="font-bold">{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" indicatorColor={item.color} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-green-800 text-lg font-bold flex items-center gap-2">
                  <PaintBucket className="h-5 w-5" /> Usulkan Lokasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-green-900/80 leading-relaxed">
                  Punya lahan tidur atau sudut kumuh di lingkunganmu? Usulkan untuk program penataan triwulan berikutnya.
                </p>
                <div className="bg-white/50 p-3 rounded-lg border border-green-100">
                  <h5 className="font-bold text-green-800 text-xs mb-2">Kriteria Lokasi:</h5>
                  <ul className="list-disc ml-4 text-xs text-green-700 space-y-1">
                    <li>Lahan fasilitas umum / sosial</li>
                    <li>Kondisi kurang terawat</li>
                    <li>Mendapat persetujuan warga</li>
                  </ul>
                </div>
                <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold" asChild>
                  <Link to="/pengaduan">
                    Ajukan Usulan
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