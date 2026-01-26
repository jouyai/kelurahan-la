import React from "react";
import { Link } from "react-router-dom";
import { DATA_LAYANAN } from "../../../data/knowledgeBase";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// --- ICONS ---
import {
  CreditCard,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from "../../../hooks/useContent";

export default function WargaNegaraAsingPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('layanan-wna');
  const { data: dbLayanan, loading: layananLoading } = useData('items', { type: 'layanan' });

  const isLoading = contentLoading || layananLoading;

  // Filter Data: Ambil hanya kategori "Warga Negara Asing"
  const layananWNA = dbLayanan.length > 0
    ? dbLayanan.filter(item => item.data?.kategori === "Warga Negara Asing" || item.data?.kategori === "WNA").map(item => ({
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
        {/* Pattern Globe */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Globe2 className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-purple-400 text-purple-300 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Layanan Internasional
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Layanan Warga Negara Asing"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Informasi persyaratan administrasi kependudukan bagi WNA (SKTT, SKSKPS, dll) di wilayah Kelurahan Lenteng Agung."}
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
            <Alert className="bg-purple-50 border-purple-200 text-purple-900">
              <AlertCircle className="h-4 w-4 text-purple-600" />
              <AlertTitle className="font-bold">Status Keimigrasian</AlertTitle>
              <AlertDescription className="text-sm mt-1">
                Pastikan dokumen <strong>Paspor, KITAS, atau KITAP</strong> dalam keadaan aktif saat melakukan pengurusan. Laporkan segera ke Kantor Imigrasi jika masa berlaku hampir habis.
              </AlertDescription>
            </Alert>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <FileBadge className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Daftar Layanan</h2>
            </div>

            {layananWNA.length > 0 ? (
              <div className="grid gap-6">
                {layananWNA.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {item.layanan}
                      </CardTitle>
                      <CardDescription>
                        Persyaratan dokumen yang harus dilampirkan:
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
                    Silakan hubungi petugas untuk informasi persyaratan SKTT atau Kependudukan WNA.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">

            {/* Widget Kantor Imigrasi */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-slate-800 text-lg font-bold flex items-center gap-2">
                  <Plane className="h-5 w-5 text-[#0B3D2E]" /> Kantor Imigrasi
                </CardTitle>
                <CardDescription>
                  Unit layanan terdekat:
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm">Kanim Kelas I Khusus Non TPI Jakarta Selatan</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Jl. Warung Buncit Raya No.207, Jakarta Selatan
                  </p>
                </div>
                <Button variant="outline" className="w-full text-xs" asChild>
                  <a href="https://jakartaselatan.imigrasi.go.id/" target="_blank" rel="noreferrer">
                    Kunjungi Website Imigrasi
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Widget Kontak Help Desk */}
            <Card className="bg-[#0B3D2E] text-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/10 rounded-full">
                    {/* Diganti dengan CreditCard sebagai simbol ID/KITAS */}
                    <CreditCard className="h-6 w-6 text-purple-300" />
                  </div>
                  <h3 className="font-bold text-lg">Foreigner Help Desk</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  For assistance regarding residency documents (SKTT/KTP-OA) in Lenteng Agung, please contact our staff.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold border-none" asChild>
                  <Link to="/pengaduan">
                    Contact Us
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