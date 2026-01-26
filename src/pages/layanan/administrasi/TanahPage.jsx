import React from "react";
import { Link } from "react-router-dom";
import { DATA_LAYANAN } from "../../../data/knowledgeBase";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

// --- ICONS ---
import {
  Phone,
  FileText,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from "../../../hooks/useContent";

export default function TanahPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('layanan-tanah');
  const { data: dbLayanan, loading: layananLoading } = useData('items', { type: 'layanan' });

  const isLoading = contentLoading || layananLoading;

  // Filter data khusus kategori Tanah
  const layananTanah = dbLayanan.length > 0
    ? dbLayanan.filter(item => item.data?.kategori === "Pertanahan & Waris").map(item => ({
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
        {/* Pattern */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Map className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Administrasi
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Layanan Pertanahan"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Informasi persyaratan pengurusan surat tanah, PM1, and administrasi agraria lainnya di Kelurahan Lenteng Agung."}
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

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <FileText className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Daftar Persyaratan</h2>
            </div>

            {layananTanah.length > 0 ? (
              <div className="grid gap-6">
                {layananTanah.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-[#0B3D2E] shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {item.layanan}
                      </CardTitle>
                      <CardDescription>
                        Persyaratan lengkap untuk pengajuan dokumen ini:
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
              // Empty State jika data belum ada
              <Card className="border-dashed border-2 border-slate-200 bg-slate-50">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-slate-100 p-4 rounded-full mb-3">
                    <Info className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">Data Layanan Belum Tersedia</h3>
                  <p className="text-slate-500 max-w-sm mt-1">
                    Mohon maaf, informasi persyaratan untuk kategori ini sedang dalam pembaruan.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* Widget Prosedur */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-amber-800 text-lg font-bold flex items-center gap-2">
                  <Info className="h-5 w-5" /> Prosedur Pengajuan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[280px] pr-4">
                  <ol className="relative border-l border-amber-300 ml-3 space-y-6">
                    <li className="mb-2 ml-4">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -left-3 ring-4 ring-amber-50">
                        <span className="text-xs font-bold text-amber-800">1</span>
                      </span>
                      <h3 className="font-semibold text-amber-900 text-sm">Lapor RT/RW</h3>
                      <p className="text-xs text-amber-800/80 mt-1">Minta surat pengantar dari RT dan RW setempat sesuai domisili objek tanah.</p>
                    </li>
                    <li className="mb-2 ml-4">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -left-3 ring-4 ring-amber-50">
                        <span className="text-xs font-bold text-amber-800">2</span>
                      </span>
                      <h3 className="font-semibold text-amber-900 text-sm">Verifikasi Berkas</h3>
                      <p className="text-xs text-amber-800/80 mt-1">Bawa seluruh berkas asli dan fotokopi ke PTSP Kelurahan untuk diperiksa kelengkapannya.</p>
                    </li>
                    <li className="mb-2 ml-4">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -left-3 ring-4 ring-amber-50">
                        <span className="text-xs font-bold text-amber-800">3</span>
                      </span>
                      <h3 className="font-semibold text-amber-900 text-sm">Peninjauan Lapangan</h3>
                      <p className="text-xs text-amber-800/80 mt-1">Petugas (Kasi Pemerintahan) akan melakukan survei lokasi jika diperlukan (PM1/Sengketa).</p>
                    </li>
                    <li className="ml-4">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full -left-3 ring-4 ring-amber-50">
                        <span className="text-xs font-bold text-amber-800">4</span>
                      </span>
                      <h3 className="font-semibold text-amber-900 text-sm">Penerbitan Dokumen</h3>
                      <p className="text-xs text-amber-800/80 mt-1">Dokumen ditandatangani Lurah dan dapat diambil sesuai jadwal yang ditentukan.</p>
                    </li>
                  </ol>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Widget Kontak */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-800 text-lg font-bold">Butuh Konsultasi?</CardTitle>
                <CardDescription>
                  Hubungi petugas pertanahan kami untuk kasus sengketa atau waris tanah.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3" asChild>
                  <Link to="/pengaduan">
                    <Phone className="h-4 w-4 text-[#0B3D2E]" />
                    Hubungi via Pengaduan
                  </Link>
                </Button>
                <Button className="w-full justify-start gap-3 bg-[#0B3D2E] hover:bg-[#0B3D2E]/90">
                  <FileCheck className="h-4 w-4" />
                  Cek Status Berkas
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}