import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import {
  ArrowLeft,
  GraduationCap,
  MapPin,
  BookOpen,
  Star,
  School,
  MessageSquare,
  Loader2
} from 'lucide-react';
import { useData } from "../../hooks/useContent";

export default function PendidikanPage() {
  const { data: dbSchools, loading: schoolsLoading } = useData('items', { type: 'pendidikan' });
  const [filter, setFilter] = useState("Semua");

  const isLoading = schoolsLoading;

  const schoolsList = dbSchools.length > 0 ? dbSchools.map(s => ({
    id: s.id,
    name: s.title,
    level: s.data?.level || "SD",
    address: s.description,
    akreditasi: s.data?.akreditasi || "A",
    status: s.data?.status || "Negeri"
  })) : [
    { id: 1, name: "SDN Lenteng Agung 01 Pagi", level: "SD", address: "Jl. Agung Raya No. 1", akreditasi: "A", status: "Negeri" },
    { id: 2, name: "SDN Lenteng Agung 03 Pagi", level: "SD", address: "Jl. Camat Gabun I", akreditasi: "A", status: "Negeri" },
    { id: 3, name: "SMP Negeri 98 Jakarta", level: "SMP", address: "Jl. Raya Lenteng Agung", akreditasi: "A", status: "Negeri" },
    { id: 4, name: "SMA Negeri 38 Jakarta", level: "SMA", address: "Jl. Raya Lenteng Agung", akreditasi: "A", status: "Negeri" },
    { id: 5, name: "PAUD Melati RW 02", level: "PAUD", address: "Balai Warga RW 02", akreditasi: "B", status: "Swasta" },
    { id: 6, name: "TK Islam Al-Ikhlas", level: "TK", address: "Jl. Kebagusan Kecil", akreditasi: "A", status: "Swasta" },
    { id: 7, name: "SMK Perguruan Cikini", level: "SMA", address: "Jl. Srengseng Sawah", akreditasi: "A", status: "Swasta" },
    { id: 8, name: "PKBM Negeri 15 (Paket A/B/C)", level: "Non-Formal", address: "Jl. Joe", akreditasi: "B", status: "Negeri" },
  ];

  const filteredSchools = filter === "Semua"
    ? schoolsList
    : schoolsList.filter(s => s.level === filter || (filter === "SMA" && s.level === "SMK"));

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-[#0B3D2E] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">

      {/* === HERO SECTION === */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <GraduationCap className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Informasi Publik
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Sarana Pendidikan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Data sekolah and lembaga pendidikan formal maupun non-formal yang tersebar di wilayah Kelurahan Lenteng Agung.
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT: SCHOOL LIST */}
          <div className="lg:col-span-2 space-y-6">

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-2">
              {["Semua", "PAUD", "SD", "SMP", "SMA"].map((level) => (
                <Button
                  key={level}
                  variant={filter === level ? "default" : "outline"}
                  onClick={() => setFilter(level)}
                  className={`rounded-full px-5 h-9 text-xs font-bold ${filter === level
                    ? "bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white border-transparent"
                    : "bg-white text-slate-600 border-slate-300 hover:border-[#0B3D2E] hover:text-[#0B3D2E]"
                    }`}
                >
                  {level}
                </Button>
              ))}
            </div>

            <div className="grid gap-4">
              {filteredSchools.map((item) => (
                <Card key={item.id} className="border-slate-200 shadow-sm hover:shadow-md transition-all group">
                  <CardContent className="p-5 flex flex-col sm:flex-row gap-5 items-start">
                    <div className="shrink-0 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 border border-blue-100 group-hover:scale-110 transition-transform">
                      {item.level === "Non-Formal" ? <BookOpen className="w-6 h-6" /> : <School className="w-6 h-6" />}
                    </div>

                    <div className="flex-1 w-full">
                      <div className="flex flex-wrap justify-between items-start mb-1 gap-2">
                        <h3 className="font-bold text-slate-800 text-lg group-hover:text-[#0B3D2E] transition-colors leading-tight">
                          {item.name}
                        </h3>
                        <Badge variant="secondary" className={`border ${item.status === 'Negeri' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-orange-50 text-orange-700 border-orange-100'
                          }`}>
                          {item.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                        <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                        {item.address}
                      </div>

                      <div className="flex gap-3">
                        <Badge variant="outline" className="bg-slate-50 border-slate-200 text-slate-600 font-normal gap-1">
                          <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                          Akreditasi: <strong>{item.akreditasi}</strong>
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* Info KJP & PPDB */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> Informasi Penting
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h5 className="font-bold text-amber-800 text-sm mb-1">KJP Plus</h5>
                  <p className="text-xs text-amber-800/80 leading-relaxed">
                    Pusat Pelayanan Pendanaan Personal dan Operasional Pendidikan (P4OP) bagi warga tidak mampu.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-bold text-blue-800 text-sm mb-1">PPDB Online</h5>
                  <p className="text-xs text-blue-800/80 leading-relaxed">
                    Pendaftaran Peserta Didik Baru (PPDB) DKI Jakarta biasanya dibuka bulan Mei-Juni.
                  </p>
                </div>

                <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold mt-2" asChild>
                  <Link to="/pengaduan">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Tanya Info KJP/PPDB
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