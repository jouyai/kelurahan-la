import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import {
  ArrowLeft,
  CreditCard,
  Users,
  Truck,
  Baby,
  FileText,
  ChevronRight,
  Loader2,
  Clock,
  Info
} from "lucide-react";
import { useData } from "../../../hooks/useContent";

import { getServiceTheme } from "../../../lib/serviceUtils";

export default function PelayananKependudukanPage({ onConnectStaff }) {
  const { data: dbLayanan, loading: servicesLoading } = useData('items', { type: 'layanan' });

  const isLoading = servicesLoading;

  const kependudukanCategories = ['Kependudukan', 'Perpindahan Penduduk'];
  const dbServices = dbLayanan.filter(s => kependudukanCategories.includes(s.data?.kategori));

  const servicesList = dbServices.length > 0 ? dbServices.map(s => {
    const theme = getServiceTheme(s.data?.kategori);
    return {
      ...s,
      icon: theme.icon,
      color: theme.color,
      link: `/layanan/kependudukan/${s.id}`
    };
  }) : [
    {
      id: 1,
      title: "KTP Elektronik (KTP-el)",
      description: "Perekaman baru, pencetakan ulang karena hilang/rusak, dan pembaruan data identitas.",
      link: "/layanan/kependudukan/keterangan",
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-100",
    },
    {
      id: 2,
      title: "Kartu Keluarga (KK)",
      description: "Pembuatan KK baru (pecah KK), penambahan anggota keluarga, atau perubahan data.",
      link: "/layanan/kependudukan/keterangan",
      icon: <Users className="h-6 w-6 text-green-600" />,
      color: "bg-green-50 border-green-100",
    },
    {
      id: 3,
      title: "Perpindahan Penduduk",
      description: "Surat Keterangan Pindah (SKP) Masuk, Keluar, atau pindah antar alamat dalam kelurahan.",
      link: "/layanan/kependudukan/domisili",
      icon: <Truck className="h-6 w-6 text-orange-600" />,
      color: "bg-orange-50 border-orange-100",
    },
    {
      id: 4,
      title: "Kartu Identitas Anak (KIA)",
      description: "Penerbitan kartu identitas resmi bagi anak berusia kurang dari 17 tahun.",
      link: "/layanan/kependudukan/keterangan",
      icon: <Baby className="h-6 w-6 text-pink-600" />,
      color: "bg-pink-50 border-pink-100",
    },
    {
      id: 5,
      title: "Surat Keterangan Kependudukan",
      description: "Surat keterangan domisili warga, domisili lembaga/yayasan, and keterangan kelahiran/kematian.",
      link: "/layanan/kependudukan/keterangan",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
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
    // Container Utama
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern ID Card */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <CreditCard className="w-64 h-64 text-white" /> {/* Update Icon */}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge
            variant="outline"
            className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm"
          >
            Layanan Publik
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pelayanan Kependudukan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Layanan resmi penerbitan dokumen identitas warga negara, pemutakhiran data keluarga, dan administrasi kependudukan lainnya.
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </Link>
        </Button>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: SERVICE GRID */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <CreditCard className="h-6 w-6 text-[#0B3D2E]" />{" "}
                {/* Update Icon */}
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Jenis Layanan Dukcapil
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesList.map((item) => (
                <Link to={item.link} key={item.id} className="block group">
                  <Card
                    className={`border shadow-sm hover:shadow-md transition-all duration-300 h-full ${item.color}`}
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>

                      <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-[#0B3D2E] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                        {item.description}
                      </p>

                      <div className="flex items-center text-[#0B3D2E] text-sm font-bold mt-auto">
                        Akses Layanan{" "}
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Info Jam Operasional */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Jam Pelayanan
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>Senin - Kamis</span>
                    <span className="font-bold text-slate-800">
                      07.30 - 16.00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>Jumat</span>
                    <span className="font-bold text-slate-800">
                      07.30 - 16.30 WIB
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>Sabtu - Minggu</span>
                    <span className="font-bold text-red-500 bg-red-50 px-2 rounded">
                      Tutup
                    </span>
                  </div>
                </div>

                {/* Alur Pelayanan Box */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-bold text-blue-800 text-xs uppercase tracking-wide mb-2 flex items-center gap-1">
                    <Info className="h-4 w-4" /> Syarat Utama
                  </h5>
                  <ul className="list-disc ml-4 text-xs text-blue-700 space-y-1">
                    <li>Surat Pengantar RT & RW.</li>
                    <li>Buku Nikah (untuk perubahan status).</li>
                    <li>Akta Kelahiran (untuk anak).</li>
                    <li>SKP (untuk pindah datang).</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
