import React from 'react';
import { Link } from 'react-router-dom';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import {
  ArrowLeft,
  FileText,
  Home,
  Heart,
  Scale,
  Wallet,
  Globe2,
  Clock,
  MessageSquare,
  ChevronRight,
  Info,
  Loader2
} from 'lucide-react';
import { useData } from '../../../hooks/useContent';

import { getServiceTheme } from "../../../lib/serviceUtils";

export default function PelayananAdministrasiPage({ onConnectStaff }) {
  const { data: dbLayanan, loading } = useData('items', { type: 'layanan' });

  // Filter dynamic services that belong to "Administrasi" group
  const adminCategories = ["Pertanahan & Waris", "Pernikahan", "Warga Negara Asing", "Pajak & Aset"];

  const dynamicServices = dbLayanan.filter(s => adminCategories.includes(s.data?.kategori));

  // Determine the list to display: dynamic if available, otherwise original fallback structure
  const servicesList = dynamicServices.length > 0 ? dynamicServices.map(s => {
    const theme = getServiceTheme(s.data?.kategori);
    return {
      ...s,
      icon: theme.icon,
      color: theme.bgLight,
      border: theme.borderHover,
      link: `/layanan/administrasi/${s.id}`
    };
  }) : [
    {
      id: 1,
      title: "Layanan Pertanahan",
      description: "Pengurusan surat keterangan tanah, PM1, dan administrasi pertanahan lainnya.",
      link: "/layanan/administrasi/tanah",
      icon: <Home className="h-6 w-6 text-green-600" />,
      bg: "bg-green-50",
      border: "hover:border-green-500"
    },
    {
      id: 2,
      title: "Status Perkawinan",
      description: "Surat pengantar nikah (N1-N4), keterangan belum menikah, atau status duda/janda.",
      link: "/layanan/administrasi/status-perkawinan",
      icon: <Heart className="h-6 w-6 text-pink-600" />,
      bg: "bg-pink-50",
      border: "hover:border-pink-500"
    },
    {
      id: 3,
      title: "Pernyataan Hukum & Waris",
      description: "Surat keterangan waris, pernyataan ahli waris, dan legalitas hukum keluarga.",
      link: "/layanan/administrasi/pernyataan-hukum-warisan",
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-500"
    },
    {
      id: 4,
      title: "Pajak & Aset",
      description: "Administrasi terkait PBB-P2, NJOP, dan surat keterangan kepemilikan aset.",
      link: "/layanan/administrasi/pajak-aset",
      icon: <Wallet className="h-6 w-6 text-amber-600" />,
      bg: "bg-amber-50",
      border: "hover:border-amber-500"
    },
    {
      id: 5,
      title: "Warga Negara Asing (WNA)",
      description: "Surat Keterangan Tempat Tinggal (SKTT) and administrasi kependudukan WNA.",
      link: "/layanan/administrasi/warga-negara-asing",
      icon: <Globe2 className="h-6 w-6 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-500"
    },
  ];

  if (loading) {
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
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Layanan Publik
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pelayanan Administrasi Umum
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Pusat layanan pengurusan dokumen pertanahan, legalitas hukum, dan administrasi kewilayahan.
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
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT COLUMN: LIST LAYANAN */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <FileText className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Pilih Jenis Layanan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {servicesList.map((item) => (
                <Link key={item.id} to={item.link} className="block h-full">
                  <Card className={`h-full border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group ${item.border}`}>
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${item.bg}`}>
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-[#0B3D2E] transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0 mt-auto">
                      <div className="text-sm font-semibold text-[#0B3D2E] flex items-center group-hover:translate-x-2 transition-transform">
                        Akses Layanan <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">

            {/* Widget Jam Operasional */}
            <Card className="border-l-4 border-l-[#0B3D2E] shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-slate-800 text-lg">
                  <Clock className="h-5 w-5 text-[#0B3D2E]" />
                  Jam Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Senin - Kamis</span>
                  <span className="font-bold text-slate-900">07:30 - 16:00</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Jumat</span>
                  <span className="font-bold text-slate-900">07:30 - 16:30</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-600">Sabtu - Minggu</span>
                  <span className="font-bold text-red-500 bg-red-50 px-2 rounded">Tutup</span>
                </div>
              </CardContent>
            </Card>

            {/* Widget Persyaratan Umum */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-amber-800 text-sm font-bold uppercase tracking-wider">
                  <Info className="h-4 w-4" /> Persyaratan Umum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-amber-900/80">
                    <span className="text-amber-500 mt-0.5">•</span>
                    Surat Pengantar RT/RW (Jika diperlukan).
                  </li>
                  <li className="flex items-start gap-2 text-sm text-amber-900/80">
                    <span className="text-amber-500 mt-0.5">•</span>
                    KTP & KK Asli beserta Fotocopy.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-amber-900/80">
                    <span className="text-amber-500 mt-0.5">•</span>
                    Dokumen pendukung (Sertifikat, Surat Nikah, dll).
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Widget Chat Staff */}
            <Card className="bg-[#0B3D2E] text-white border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <MessageSquare className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-lg mb-1">Butuh Bantuan?</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Bingung dengan persyaratan dokumen? Tanyakan langsung pada petugas kami.
                </p>
                <Button
                  onClick={() => onConnectStaff && onConnectStaff("Tanya Persyaratan Administrasi")}
                  className="w-full bg-amber-500 text-[#0B3D2E] hover:bg-amber-400 font-bold"
                >
                  Chat Petugas Sekarang
                </Button>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </div>
  );
}