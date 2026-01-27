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
import { useData } from "../../../hooks/useContent";

export default function PekerjaanUsahaPage() {
  const { data: dbLayanan, loading: servicesLoading } = useData('items', { type: 'layanan' });

  const isLoading = servicesLoading;

  // Filter dynamic services for "Pekerjaan & Usaha"
  const dynamicServices = dbLayanan.filter(s => s.data?.kategori === "Pekerjaan & Usaha").map(s => ({
    title: s.title,
    description: s.description,
    requirements: s.data?.syarat || [],
    template: s.data?.template || null,
    icon: s.data?.icon_name === 'Building2' ? <Building2 className="h-6 w-6 text-[#0B3D2E]" /> :
      s.data?.icon_name === 'Briefcase' ? <Briefcase className="h-6 w-6 text-amber-600" /> :
        <Wallet className="h-6 w-6 text-blue-600" />,
    color: s.data?.icon_name === 'Building2' ? "border-l-[#0B3D2E]" :
      s.data?.icon_name === 'Briefcase' ? "border-l-amber-500" :
        "border-l-blue-500",
    bgColor: s.data?.icon_name === 'Building2' ? "bg-[#0B3D2E]/10" :
      s.data?.icon_name === 'Briefcase' ? "bg-amber-100" :
        "bg-blue-100",
    listBg: s.data?.icon_name === 'Building2' ? "bg-slate-50" :
      s.data?.icon_name === 'Briefcase' ? "bg-amber-50" :
        "bg-blue-50",
    checkColor: s.data?.icon_name === 'Building2' ? "text-green-600" :
      s.data?.icon_name === 'Briefcase' ? "text-amber-600" :
        "text-blue-600"
  }));

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

        {servicesList.map((item, index) => (
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
                    href={item.template.startsWith('http') ? item.template : `/template/${item.template}`}
                    download={!item.template.startsWith('http') ? item.template : undefined}
                    target={item.template.startsWith('http') ? "_blank" : undefined}
                    rel={item.template.startsWith('http') ? "noopener noreferrer" : undefined}
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
