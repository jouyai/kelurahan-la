import React from "react";
import { Link } from "react-router-dom";
import { DATA_LAYANAN } from "../../../data/knowledgeBase";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

import {
  ShieldCheck,
  Loader2,
  Scale,
  ArrowLeft,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Building2,
  Users,
  Download
} from 'lucide-react';
import { useData } from "../../../hooks/useContent";
import { useLiveChat } from "../../../context/LiveChatContext";

export default function PernyataanHukumWarisanPage() {
  const { openChat } = useLiveChat();
  const { data: dbLayanan, loading: layananLoading } = useData('items', { type: 'layanan' });

  const isLoading = layananLoading;

  // Filter Data: Ambil hanya kategori "Pertanahan & Waris"
  const getTemplatePath = (layananName) => {
    const templates = {
      "Surat Keterangan Waris (WNI Pribumi)": "Surat Pernyataan Ahli Waris.pdf",
      "Surat Pengantar PM-1 Cerai Ghoib": "Permohonan Surat Pengantar PM-1 Cerai Ghoib .pdf",
      "Surat Keterangan Bersih Diri Untuk Sekolah Kedinasan": "Surat Keterangan Bersih Diri Untuk Sekolah Kedinasan.pdf"
    };
    return templates[layananName] || null;
  };

  const layananHukum = dbLayanan.length > 0
    ? dbLayanan.filter(item => item.data?.kategori === "Pertanahan & Waris").map(item => ({
      id: item.id.toString(),
      layanan: item.title,
      syarat: item.data?.syarat || [],
      template: item.data?.template || getTemplatePath(item.title)
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
    <div className="min-h-screen bg-slate-50 font-sans pb-12">

      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern Scale/Law */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Scale className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Legalisasi & Hukum
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pernyataan Hukum & Warisan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Panduan persyaratan administrasi untuk Surat Keterangan Waris, Pernyataan Gaib, and dokumen hukum lainnya.
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

            {/* Alert Info Penting Waris */}
            <Alert className="bg-amber-50 border-amber-200 text-amber-900">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="font-bold">Perhatian Khusus Waris</AlertTitle>
              <AlertDescription className="text-sm mt-1">
                Untuk pengurusan <strong>Surat Keterangan Waris</strong>, seluruh ahli waris <strong>WAJIB HADIR</strong> untuk tanda tangan di hadapan pejabat kelurahan, atau melampirkan Surat Kuasa Notariil jika berhalangan.
              </AlertDescription>
            </Alert>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <FileText className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Daftar Persyaratan</h2>
            </div>

            {layananHukum.length > 0 ? (
              <div className="grid gap-6">
                {layananHukum.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                          {item.id.includes('hukum') ? 'Legalitas' : 'Umum'}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">
                        {item.layanan}
                      </CardTitle>
                      <CardDescription>
                        Dokumen yang wajib dilampirkan:
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
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

                      {item.template && (
                        <Button variant="outline" className="w-full flex items-center gap-2 border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white transition-all shadow-sm" asChild>
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

            {/* Widget Info SKCK */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-blue-800 text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" /> Info SKCK
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-900/80 space-y-3">
                <p>
                  Kelurahan hanya menerbitkan <strong>Surat Pengantar</strong>.
                </p>
                <p>
                  Proses penerbitan SKCK selanjutnya dilakukan di <strong>Polsek</strong> (untuk keperluan swasta/umum) atau <strong>Polres</strong> (untuk CPNS/BUMN/TNI-Polri).
                </p>
              </CardContent>
            </Card>

            {/* Widget Ahli Waris */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-800 text-lg font-bold flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0B3D2E]" /> Fatwa Waris
                </CardTitle>
                <CardDescription>
                  Khusus WNI Keturunan / WNA
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-3">
                <p>
                  Bagi WNI Keturunan Timur Asing (Tionghoa, Arab, India, dll), Surat Keterangan Waris diterbitkan oleh <strong>Balai Harta Peninggalan (BHP)</strong> atau <strong>Notaris</strong>, bukan oleh Kelurahan.
                </p>
                <p>
                  Kelurahan hanya mencatat/mengetahui PM1 jika diperlukan.
                </p>
                <Separator className="my-3" />
                <Button className="w-full justify-start gap-3 bg-[#0B3D2E] hover:bg-[#0B3D2E]/90" onClick={() => openChat("Konsultasi Waris", true)}>
                  <Info className="h-4 w-4" />
                  Konsultasi Petugas
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}