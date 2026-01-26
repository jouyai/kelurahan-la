import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// --- ICONS ---
import {
  ArrowLeft,
  MapPin,
  Building2,
  Trophy,
  Heart,
  Smile,
  CheckCircle2,
  Phone,
  Info,
  Search,
  Trash2,
  Moon,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from "../../hooks/useContent";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Smile': return <Smile className="h-8 w-8 text-green-600" />;
    case 'Trophy': return <Trophy className="h-8 w-8 text-orange-600" />;
    case 'Heart': return <Heart className="h-8 w-8 text-red-600" />;
    case 'Trash2': return <Trash2 className="h-8 w-8 text-blue-600" />;
    case 'Moon': return <Moon className="h-8 w-8 text-purple-600" />;
    default: return <Building2 className="h-8 w-8 text-slate-600" />;
  }
};

export default function FasilitasPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('fasilitas');
  const { data: dbFacilities, loading: facilitiesLoading } = useData('items', { type: 'fasilitas' });
  const [searchTerm, setSearchTerm] = useState("");

  const isLoading = contentLoading || facilitiesLoading;

  const facilitiesList = dbFacilities.length > 0 ? dbFacilities.map(f => ({
    id: f.id,
    name: f.title,
    category: f.data?.category || "Fasilitas Umum",
    address: f.description,
    features: f.data?.features || [],
    bgColor: f.data?.bgColor || "bg-slate-50",
    icon: getIconComponent(f.data?.icon),
    status: f.data?.status || "Buka",
    statusBadge: f.data?.statusBadge || "bg-green-100 text-green-700"
  })) : [
    {
      id: 1,
      name: "RPTRA Lenteng Agung",
      category: "Ruang Publik",
      address: "Jl. Lontar RT 010/RW 03",
      features: ["Taman Bermain Anak", "Perpustakaan", "Lapangan Futsal", "Ruang Laktasi"],
      bgColor: "bg-green-50",
      icon: <Smile className="h-8 w-8 text-green-600" />,
      status: "Buka",
      statusBadge: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      name: "Gedung Sasana Krida (GSK)",
      category: "Olahraga & Seni",
      address: "Jl. Agung Raya No. 1",
      features: ["Lapangan Bulutangkis", "Panggung Seni", "Aula Serbaguna"],
      bgColor: "bg-orange-50",
      icon: <Trophy className="h-8 w-8 text-orange-600" />,
      status: "Perlu Reservasi",
      statusBadge: "bg-orange-100 text-orange-700"
    },
    {
      id: 3,
      name: "Puskesmas Kelurahan 1",
      category: "Kesehatan",
      address: "Jl. Camat Gabun II",
      features: ["Poli Umum", "Poli Gigi", "KIA/KB", "Farmasi"],
      bgColor: "bg-red-50",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      status: "Buka (07.30 - 16.00)",
      statusBadge: "bg-green-100 text-green-700"
    },
    {
      id: 4,
      name: "Bank Sampah Induk",
      category: "Lingkungan",
      address: "Jl. Kebagusan Kecil",
      features: ["Penimbangan Sampah", "Daur Ulang", "Edukasi Kompos"],
      bgColor: "bg-blue-50",
      icon: <Trash2 className="h-8 w-8 text-blue-600" />,
      status: "Buka (Senin & Kamis)",
      statusBadge: "bg-blue-100 text-blue-700"
    },
    {
      id: 5,
      name: "Masjid Raya Al-Ikhlas",
      category: "Ibadah",
      address: "Jl. Raya Lenteng Agung",
      features: ["Ruang Sholat Utama", "Aula Pengajian", "Parkir Luas"],
      bgColor: "bg-purple-50",
      icon: <Moon className="h-8 w-8 text-purple-600" />,
      status: "Buka 24 Jam",
      statusBadge: "bg-purple-100 text-purple-700"
    }
  ];

  const filteredFacilities = facilitiesList.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Building2 className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Sarana Publik
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Fasilitas Umum"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Daftar sarana and prasarana publik yang tersedia di Kelurahan Lenteng Agung untuk mendukung aktivitas warga."}
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

          {/* LEFT: FACILITIES LIST */}
          <div className="lg:col-span-2 space-y-6">

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari fasilitas (misal: RPTRA, Puskesmas)..."
                className="pl-10 h-12 text-base border-slate-300 focus-visible:ring-[#0B3D2E]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid gap-6">
              {filteredFacilities.map((item) => (
                <Card key={item.id} className="border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    {/* Icon Box */}
                    <div className={`p-6 flex items-center justify-center ${item.bgColor} sm:w-32`}>
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1">
                            {item.category}
                          </span>
                          <h3 className="font-bold text-slate-800 text-lg group-hover:text-[#0B3D2E] transition-colors leading-tight">
                            {item.name}
                          </h3>
                        </div>
                        <Badge variant="secondary" className={item.statusBadge}>
                          {item.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                        <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                        {item.address}
                      </div>

                      {/* Features List */}
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="font-normal bg-slate-50 text-slate-600 border-slate-200 gap-1">
                            <CheckCircle2 className="h-3 w-3 text-[#0B3D2E]" />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {filteredFacilities.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                  <p className="text-slate-500">Fasilitas tidak ditemukan.</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* Widget: Peminjaman Fasilitas */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <Info className="h-5 w-5" /> Prosedur Peminjaman
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Untuk penggunaan Aula Kelurahan atau Gedung Sasana Krida (GSK) bagi kegiatan warga, mohon perhatikan prosedur berikut:
                </p>

                <ol className="relative border-l border-slate-200 ml-3 space-y-6">
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-[#0B3D2E] rounded-full mt-1.5 -left-1.5 border border-white shadow-sm"></div>
                    <h5 className="text-xs font-bold text-slate-900">Surat Permohonan</h5>
                    <p className="text-xs text-slate-500 mt-1">Ajukan surat ke Sekretariat Kelurahan min. 7 hari sebelum acara.</p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <h5 className="text-xs font-bold text-slate-900">Verifikasi Jadwal</h5>
                    <p className="text-xs text-slate-500 mt-1">Petugas akan mengecek ketersediaan jadwal gedung.</p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <h5 className="text-xs font-bold text-slate-900">Persetujuan</h5>
                    <p className="text-xs text-slate-500 mt-1">Jika disetujui, pemohon akan menerima surat izin penggunaan.</p>
                  </li>
                </ol>

                <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold mt-2" asChild>
                  <Link to="/pengaduan">
                    <Phone className="h-4 w-4 mr-2" />
                    Cek Ketersediaan
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