import React from "react";
import { Link } from "react-router-dom";
import { DATA_LAYANAN } from "../../../data/knowledgeBase";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// --- ICONS ---
import {
  FileText,
  Info,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from "../../../hooks/useContent";

export default function StatusPerkawinanPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('layanan-nikah');
  const { data: dbLayanan, loading: layananLoading } = useData('items', { type: 'layanan' });

  const isLoading = contentLoading || layananLoading;

  // Filter Data: Ambil hanya kategori "Pernikahan"
  const layananNikah = dbLayanan.length > 0
    ? dbLayanan.filter(item => item.data?.kategori === "Pernikahan").map(item => ({
      id: item.id.toString(),
      layanan: item.title,
      syarat: item.data?.syarat || []
    }))
    : [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-[#0B3D2E] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-12">

      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern Heart */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Heart className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-pink-400 text-pink-300 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Administrasi Sipil
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Layanan Status Perkawinan"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Informasi lengkap persyaratan pengurusan surat pengantar nikah (N1-N4) and dokumen status sipil lainnya."}
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/layanan/administrasi" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Menu Administrasi
          </Link>
        </Button>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN: DAFTAR LAYANAN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Alert Info Penting */}
            <Alert className="bg-pink-50 border-pink-200 text-pink-900">
              <AlertCircle className="h-4 w-4 text-pink-600" />
              <AlertTitle>Penting!</AlertTitle>
              <AlertDescription>
                Pastikan data status perkawinan di KTP dan Kartu Keluarga (KK) sudah <strong>sinkron</strong> sebelum mengajukan surat pengantar.
              </AlertDescription>
            </Alert>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <FileText className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Persyaratan Dokumen</h2>
            </div>

            {layananNikah.length > 0 ? (
              <div className="grid gap-6">
                {layananNikah.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-pink-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                          {item.id.includes('nikah') ? 'Pernikahan' : 'Status Sipil'}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {item.layanan}
                      </CardTitle>
                      <CardDescription>
                        Dokumen yang wajib dilampirkan:
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                        <ul className="space-y-3">
                          {item.syarat && item.syarat.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // Empty State
              <Card className="border-dashed border-2 border-slate-200 bg-slate-50">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-slate-100 p-4 rounded-full mb-3">
                    <Info className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">Data Belum Tersedia</h3>
                  <p className="text-slate-500 max-w-sm mt-1">
                    Informasi persyaratan untuk layanan ini sedang diperbarui.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* Widget Catin */}
            <Card className="bg-sky-50 border-sky-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sky-800 text-lg font-bold flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5" /> Info Calon Pengantin
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-sky-900/80 space-y-3">
                <p>
                  Bagi Calon Pengantin (Catin), diwajibkan melakukan pendaftaran nikah di KUA paling lambat <strong>10 hari kerja</strong> sebelum tanggal akad nikah.
                </p>
                <p>
                  Jangan lupa melakukan suntik TT (Tetanus Toksoid) bagi Catin Wanita di Puskesmas terdekat sebagai syarat administrasi KUA.
                </p>
              </CardContent>
            </Card>

            {/* Widget Kontak */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-800 text-lg font-bold">Butuh Bantuan?</CardTitle>
                <CardDescription>
                  Jika ada kendala dokumen pernikahan beda domisili atau WNA.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-3 bg-[#0B3D2E] hover:bg-[#0B3D2E]/90" asChild>
                  <Link to="/pengaduan">
                    <FileCheck className="h-4 w-4" />
                    Konsultasi Petugas
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