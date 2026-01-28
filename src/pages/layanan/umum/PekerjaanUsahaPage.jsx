import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  Wallet,
  Info,
  Loader2,
  Briefcase,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Globe2,
  Download
} from 'lucide-react';
import { useLiveChat } from "../../../context/LiveChatContext";
import { useTemplates, isPublicUrl } from "../../../lib/templateUtils";
import { useData } from "../../../hooks/useContent";

export default function PekerjaanUsahaPage() {
  const { data: dbLayanan, loading: servicesLoading } = useData('items', { type: 'layanan' });
  const { resolveTemplateUrl } = useTemplates();

  const isLoading = servicesLoading;

  // 1. Data dari Database
  const dynamicServices = dbLayanan
    .filter(s => s.data?.kategori === "Pekerjaan & Usaha" || s.title.includes("SKU") || s.title.includes("Usaha"))
    .map(s => ({
      title: s.title,
      description: s.description,
      requirements: s.data?.syarat || [],
      template: s.data?.template || null,
      icon: s.data?.icon_name === 'Building2' ? <Building2 className="h-6 w-6 text-[#0B3D2E]" /> :
        s.data?.icon_name === 'Briefcase' ? <Briefcase className="h-6 w-6 text-amber-600" /> :
          <Wallet className="h-6 w-6 text-blue-600" />,
      color: "border-l-[#0B3D2E]",
      bgColor: "bg-[#0B3D2E]/10",
      listBg: "bg-slate-50",
      checkColor: "text-green-600"
    }));

  // 2. Data Fallback (Standar SKU) - Tampil jika DB kosong atau sebagai pelengkap
  const fallbackServices = [
    {
      title: "Surat Keterangan Usaha (SKU) Mikro & Kecil",
      description: "Untuk warga yang memiliki usaha perorangan dengan modal di bawah 1 Miliar (UMK).",
      requirements: [
        "Fotokopi KTP Pemilik Usaha (Harus warga Lenteng Agung).",
        "Fotokopi Kartu Keluarga (KK).",
        "Surat Pengantar RT/RW (Mencantumkan jenis usaha & alamat lokasi usaha).",
        "Foto tempat usaha (Tampak depan dengan pemilik).",
        "Surat Pernyataan Tidak Keberatan Tetangga (Untuk usaha yang menggunakan rumah tinggal).",
        "Bukti lunas PBB tahun berjalan."
      ],
      template: "Form_Permohonan_SKU_Mikro.pdf",
      icon: <Briefcase className="h-6 w-6 text-amber-600" />,
      color: "border-l-amber-500",
      bgColor: "bg-amber-100",
      listBg: "bg-amber-50/50",
      checkColor: "text-amber-600"
    },
    {
      title: "Surat Keterangan Domisili Usaha (Non-Perseorangan)",
      description: "Untuk badan usaha berbentuk CV, PT, atau Yayasan yang berkedudukan di Lenteng Agung.",
      requirements: [
        "Akte Pendirian Perusahaan/Yayasan and SK Kemenkumham.",
        "KTP Direktur/Penanggung Jawab.",
        "Surat Perjanjian Sewa Menyewa (Jika lokasi sewa) atau Sertifikat Tanah.",
        "Surat Pengantar RT/RW setempat.",
        "Surat Izin Tetangga (Bermaterai) bila berada di lingkungan pemukiman.",
        "Foto kantor/tempat usaha and koordinat lokasi."
      ],
      template: "Form_Domisili_Usaha.pdf",
      icon: <Building2 className="h-6 w-6 text-[#0B3D2E]" />,
      color: "border-l-[#0B3D2E]",
      bgColor: "bg-[#0B3D2E]/10",
      listBg: "bg-slate-50",
      checkColor: "text-[#0B3D2E]"
    }
  ];

  // Gabungkan data: Jika DB ada, pakai DB, jika tidak pakai Fallback
  const finalServices = dynamicServices.length > 0 ? dynamicServices : fallbackServices;

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
          <Briefcase className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Administrasi Umum
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Layanan Pekerjaan & Usaha
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Panduan persyaratan pengurusan Surat Keterangan Usaha (SKU) and dokumen ketenagakerjaan lainnya.
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/layanan/umum" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Menu Layanan
          </Link>
        </Button>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {finalServices.map((item, index) => (
          <Card key={index} className={`border-l-4 shadow-md ${item.color}`}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${item.bgColor}`}>
                  {item.icon}
                </div>
                {item.title}
              </CardTitle>
              <CardDescription>
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`p-5 rounded-xl border border-slate-100 ${item.listBg}`}>
                <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
                <ul className="space-y-3">
                  {item.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${item.checkColor}`} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.template && (
                <Button variant="outline" className="w-full flex items-center gap-2 border-slate-200 text-slate-700 hover:bg-[#0B3D2E] hover:text-white transition-all shadow-sm" asChild>
                  <a
                    href={resolveTemplateUrl(item.template)}
                    download={!isPublicUrl(resolveTemplateUrl(item.template)) ? item.template : undefined}
                    target={isPublicUrl(resolveTemplateUrl(item.template)) ? "_blank" : undefined}
                    rel={isPublicUrl(resolveTemplateUrl(item.template)) ? "noopener noreferrer" : undefined}
                  >
                    <Download className="h-4 w-4" /> Unduh Template Surat
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}


        {/* INFO TAMBAHAN */}
        <div className="bg-slate-100 p-4 rounded-lg flex gap-3 items-start border border-slate-200">
          <Info className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600">
            <strong>Catatan:</strong> Pelayanan Surat Keterangan Usaha (SKU) juga dapat diajukan secara online melalui aplikasi JAKEVO (untuk izin mikro) atau datang langsung ke PTSP Kelurahan.
          </p>
        </div>

      </div>
    </div >
  );
}
