import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import { 
  ArrowLeft, 
  Home, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  FileText
} from 'lucide-react';

export default function DomisiliWargaLembagaPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-12">
      
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
            Panduan pengurusan surat keterangan domisili untuk perorangan, perusahaan, dan yayasan.
          </p>
        </div>
      </div>

      {/* === BREADCRUMB === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/layanan/kependudukan" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Menu Layanan
          </Link>
        </Button>
      </div>

      {/* === CONTENT SECTION === */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* DOMISILI PENDUDUK */}
        <Card className="border-l-4 border-l-[#0B3D2E] shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <MapPin className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              Surat Keterangan Domisili Penduduk
            </CardTitle>
            <CardDescription>
              Untuk keperluan administrasi perbankan, sekolah, atau melamar kerja.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Pengantar RT/RW setempat.",
                  "Fotokopi KTP Pemohon (Asli diperlihatkan).",
                  "Fotokopi Kartu Keluarga (KK).",
                  "Surat Kuasa bermaterai (jika dikuasakan) beserta KTP penerima kuasa.",
                  "SKDS (Surat Keterangan Domisili Sementara) dari RT/RW bagi warga luar DKI."
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* RUMAH IBADAH */}
        <Card className="border-l-4 border-l-amber-500 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Home className="h-6 w-6 text-amber-600" />
              </div>
              Domisili Rumah Ibadah
            </CardTitle>
            <CardDescription>
              Untuk legalitas operasional masjid, gereja, pura, vihara, dll.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Pengantar RT/RW setempat.",
                  "Fotokopi KTP dan KK Ketua Pengurus/Pemohon.",
                  "Fotokopi Surat Tanah / Akta Wakaf.",
                  "Fotokopi SK Pengurus Rumah Ibadah (dengan KOP Surat resmi).",
                  "Surat Kuasa bermaterai (jika dikuasakan)."
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* YAYASAN / ORGANISASI */}
        <Card className="border-l-4 border-l-blue-500 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              Domisili Yayasan / Organisasi
            </CardTitle>
            <CardDescription>
              Untuk legalitas badan usaha, yayasan sosial, atau ormas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Pengantar RT/RW setempat.",
                  "Fotokopi KTP dan KK Ketua/Penanggung Jawab.",
                  "Fotokopi Akta Pendirian dan SK Kemenkumham (jika ada).",
                  "Daftar Susunan Pengurus (KTP & KK Pengurus).",
                  "Surat Pernyataan Tempat Usaha/Sekretariat.",
                  "SKDS (jika pengurus berdomisili luar wilayah)."
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}