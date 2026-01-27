import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  ArrowLeft,
  FileText,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Loader2,
  Download,
  Info
} from 'lucide-react';
import { useData } from "../../../hooks/useContent";


export default function KeteranganKependudukanPage() {
  const { data: dbLayanan, loading: layananLoading } = useData('items', { type: 'layanan' });

  const getTemplatePath = (layananName) => {
    const templates = {
      "Surat Keterangan Belum Memiliki Rumah (PMI)": "Surat Pengantar PM1 Belum Memiliki Rumah.pdf",
      "Surat Keterangan Bersih Diri (Sekolah Kedinasan)": "Surat Keterangan Bersih Diri Untuk Sekolah Kedinasan.pdf"
    };
    return templates[layananName] || null;
  };

  const dynamicServices = dbLayanan
    .filter(item => item.data?.kategori === "Kependudukan" || item.data?.kategori === "Lainnya")
    // Filter specifically for these types of "Keterangan"
    .filter(item => item.title.includes("Keterangan") || item.title.includes("Bersih Diri"))
    .map(item => ({
      id: item.id.toString(),
      title: item.title,
      requirements: item.data?.syarat || [],
      template: item.data?.template || getTemplatePath(item.title),
      icon: item.title.includes("Rumah") ? <Briefcase className="h-6 w-6 text-green-700" /> : <GraduationCap className="h-6 w-6 text-blue-700" />,
      color: item.title.includes("Rumah") ? "border-l-green-600" : "border-l-blue-600",
      bgColor: item.title.includes("Rumah") ? "bg-green-100" : "bg-blue-100"
    }));

  const fallbackServices = [
    {
      title: "Keterangan Belum Memiliki Rumah (PMI)",
      requirements: [
        "Surat Permohonan kepada Lurah (Ttd Pemohon).",
        "Surat Pengantar RT/RW setempat.",
        "Fotokopi KTP and KK Pemohon.",
        "Surat Pernyataan Belum Memiliki Rumah (dari RT/RW atau bermaterai).",
        "Dokumen pendukung dari instansi terkait (jika ada)."
      ],
      template: "Surat Pengantar PM1 Belum Memiliki Rumah.pdf",
      icon: <Briefcase className="h-6 w-6 text-green-700" />,
      color: "border-l-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Keterangan Bersih Diri (Sekolah Kedinasan)",
      requirements: [
        "Surat Permohonan kepada Lurah.",
        "Surat Pengantar RT/RW.",
        "Fotokopi KTP and Kartu Keluarga (KK).",
        "Pas foto terbaru (sesuai ketentuan instansi tujuan).",
        "Formulir khusus dari instansi/sekolah kedinasan (jika ada)."
      ],
      template: "Surat Keterangan Bersih Diri Untuk Sekolah Kedinasan.pdf",
      icon: <GraduationCap className="h-6 w-6 text-blue-700" />,
      color: "border-l-blue-600",
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
          <FileText className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Layanan Kependudukan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Keterangan Kependudukan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Layanan surat keterangan khusus untuk keperluan dinas, pekerjaan, atau perumahan.
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

        <p className="text-sm text-slate-600 bg-amber-50 p-4 rounded-lg border border-amber-200">
          <strong>Catatan:</strong> Pastikan seluruh dokumen fotokopi yang dilampirkan dapat dibaca dengan jelas. Bawa dokumen asli untuk verifikasi petugas.
        </p>

        {servicesList.map((service, index) => (
          <Card key={index} className={`border-l-4 ${service.color} shadow-md hover:shadow-lg transition-shadow`}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <div className={`p-2 ${service.bgColor} rounded-lg`}>
                  {service.icon}
                </div>
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-4">
                <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
                <ul className="space-y-3">
                  {service.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className={`h-5 w-5 ${service.color.replace('border-l-', 'text-')} shrink-0 mt-0.5`.replace('blue-600', 'blue-600').replace('green-600', 'green-600')} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                {service.template && (
                  <Button variant="outline" className={`w-full flex items-center gap-2 border-slate-200 text-slate-700 hover:bg-[#0B3D2E] hover:text-white transition-all shadow-sm`} asChild>
                    <a
                      href={service.template.startsWith('http') ? service.template : `/template/${service.template}`}
                      download={!service.template.startsWith('http') ? service.template : undefined}
                      target={service.template.startsWith('http') ? "_blank" : undefined}
                      rel={service.template.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      <Download className="h-4 w-4" /> Unduh Template Surat
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}
