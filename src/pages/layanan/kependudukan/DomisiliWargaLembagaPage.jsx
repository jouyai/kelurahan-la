import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  FileText,
  Loader2,
  Home,
  ArrowLeft,
  MapPin,
  CheckCircle2,
  Building2,
  GraduationCap,
  Download,
  Info
} from 'lucide-react';
import { useData } from "../../../hooks/useContent";
import { useLiveChat } from "../../../context/LiveChatContext";
import { useTemplates, isPublicUrl } from "../../../lib/templateUtils";


export default function DomisiliWargaLembagaPage() {
  const { openChat } = useLiveChat();
  const { data: dbLayanan, loading: layananLoading } = useData('items', { type: 'layanan' });
  const { resolveTemplateUrl } = useTemplates();

  const getTemplatePath = (layananName) => {
    const templates = {
      "Surat Keterangan Domisili Penduduk": "Permohonan Pencatatan Register Surat Keterangan Domisili Penduduk.pdf",
      "Domisili Rumah Ibadah": "Surat Keterangan Domisili Rumah Ibadah.pdf",
      "Domisili Yayasan / Organisasi": "Surat Keterangan Domisili Untuk YayasanInstansiOrganisasi.pdf"
    };
    return templates[layananName] || null;
  };

  const dynamicServices = dbLayanan
    .filter(item => item.data?.kategori === "Kependudukan" || item.data?.kategori === "Lainnya")
    .filter(item => item.title.includes("Domisili"))
    .map(item => ({
      id: item.id.toString(),
      title: item.title,
      description: item.description,
      requirements: item.data?.syarat || [],
      template: item.data?.template || getTemplatePath(item.title),
      icon: item.title.includes("Rumah Ibadah") ? <Home className="h-6 w-6 text-amber-600" /> :
        item.title.includes("Yayasan") ? <Building2 className="h-6 w-6 text-blue-600" /> :
          <MapPin className="h-6 w-6 text-[#0B3D2E]" />,
      color: item.title.includes("Rumah Ibadah") ? "border-l-amber-500" :
        item.title.includes("Yayasan") ? "border-l-blue-500" :
          "border-l-[#0B3D2E]",
      bgColor: item.title.includes("Rumah Ibadah") ? "bg-amber-100" :
        item.title.includes("Yayasan") ? "bg-blue-100" :
          "bg-[#0B3D2E]/10"
    }));

  const fallbackServices = [
    {
      title: "Surat Keterangan Domisili Penduduk",
      description: "Untuk keperluan administrasi perbankan, sekolah, atau melamar kerja.",
      requirements: [
        "Surat Pengantar RT/RW setempat.",
        "Fotokopi KTP Pemohon (Asli diperlihatkan).",
        "Fotokopi Kartu Keluarga (KK).",
        "Surat Kuasa bermaterai (jika dikuasakan) beserta KTP penerima kuasa.",
        "SKDS (Surat Keterangan Domisili Sementara) dari RT/RW bagi warga luar DKI."
      ],
      template: "Permohonan Pencatatan Register Surat Keterangan Domisili Penduduk.pdf",
      icon: <MapPin className="h-6 w-6 text-[#0B3D2E]" />,
      color: "border-l-[#0B3D2E]",
      bgColor: "bg-[#0B3D2E]/10"
    },
    {
      title: "Domisili Rumah Ibadah",
      description: "Untuk legalitas operasional masjid, gereja, pura, vihara, dll.",
      requirements: [
        "Surat Pengantar RT/RW setempat.",
        "Fotokopi KTP dan KK Ketua Pengurus/Pemohon.",
        "Fotokopi Surat Tanah / Akta Wakaf.",
        "Fotokopi SK Pengurus Rumah Ibadah (dengan KOP Surat resmi).",
        "Surat Kuasa bermaterai (jika dikuasakan)."
      ],
      template: "Surat Keterangan Domisili Rumah Ibadah.pdf",
      icon: <Home className="h-6 w-6 text-amber-600" />,
      color: "border-l-amber-500",
      bgColor: "bg-amber-100"
    },
    {
      title: "Domisili Yayasan / Organisasi",
      description: "Untuk legalitas badan usaha, yayasan sosial, atau ormas.",
      requirements: [
        "Surat Pengantar RT/RW setempat.",
        "Fotokopi KTP dan KK Ketua/Penanggung Jawab.",
        "Fotokopi Akta Pendirian dan SK Kemenkumham (jika ada).",
        "Daftar Susunan Pengurus (KTP & KK Pengurus).",
        "Surat Pernyataan Tempat Usaha/Sekretariat.",
        "SKDS (jika pengurus berdomisili luar wilayah)."
      ],
      template: "Surat Keterangan Domisili Untuk YayasanInstansiOrganisasi.pdf",
      icon: <Building2 className="h-6 w-6 text-blue-600" />,
      color: "border-l-blue-500",
      bgColor: "bg-blue-100"
    }
  ];

  const servicesList = dynamicServices.length > 0 ? dynamicServices : fallbackServices;

  if (layananLoading) {
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
          <Home className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Layanan Kependudukan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Domisili Warga & Lembaga
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Panduan pengurusan surat keterangan domisili untuk perorangan, perusahaan, and yayasan.
          </p>
        </div>
      </div>

      {/* === BREADCRUMB === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent transition-colors">
          <Link to="/layanan/kependudukan" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Menu Layanan
          </Link>
        </Button>
      </div>

      {/* === CONTENT SECTION === */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {servicesList.map((service, index) => (
          <Card key={index} className={`border-l-4 ${service.color} shadow-md`}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <div className={`p-2 ${service.bgColor} rounded-lg`}>
                  {service.icon}
                </div>
                {service.title}
              </CardTitle>
              {service.description && (
                <CardDescription>
                  {service.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-4">
                <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
                <ul className="space-y-3">
                  {service.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className={`h-5 w-5 ${service.color.replace('border-l-', 'text-')} shrink-0 mt-0.5`.replace('amber-500', 'amber-600')} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                {service.template && (
                  <Button variant="outline" className="w-full flex items-center gap-2 border-slate-200 text-slate-700 hover:bg-[#0B3D2E] hover:text-white transition-all shadow-sm" asChild>
                    <a
                      href={resolveTemplateUrl(service.template)}
                      download={!isPublicUrl(resolveTemplateUrl(service.template)) ? service.template : undefined}
                      target={isPublicUrl(resolveTemplateUrl(service.template)) ? "_blank" : undefined}
                      rel={isPublicUrl(resolveTemplateUrl(service.template)) ? "noopener noreferrer" : undefined}
                    >
                      <Download className="h-4 w-4" /> Unduh Template Surat
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* CALL TO ACTION */}
        <Card className="bg-slate-900 text-white border-none mt-10">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-xl font-bold text-amber-400">Punya Pertanyaan Spesifik?</h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Jika kondisi domisili Anda bersifat khusus (misal: pindah antar provinsi, WNA, atau badan hukum kompleks), konsultasikan dengan petugas kami.
            </p>
            <Button variant="secondary" className="bg-amber-500 text-[#0B3D2E] hover:bg-amber-400 font-bold" onClick={() => openChat("Konsultasi Domisili", true)}>
              Konsultasi Petugas
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
