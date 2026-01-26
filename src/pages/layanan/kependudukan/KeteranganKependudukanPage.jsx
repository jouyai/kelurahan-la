import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import { 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap
} from 'lucide-react';

export default function KeteranganKependudukanPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-12">
      
      {/* === HERO SECTION === */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <FileText className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Layanan Lainnya
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
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
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

        {/* BELUM MEMILIKI RUMAH */}
        <Card className="border-l-4 border-l-green-600 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-green-700" />
              </div>
              Keterangan Belum Memiliki Rumah (PMI)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Permohonan kepada Lurah (Ttd Pemohon).",
                  "Surat Pengantar RT/RW setempat.",
                  "Fotokopi KTP dan KK Pemohon.",
                  "Surat Pernyataan Belum Memiliki Rumah (dari RT/RW atau bermaterai).",
                  "Dokumen pendukung dari instansi terkait (jika ada)."
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

        {/* BERSIH DIRI */}
        <Card className="border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-blue-700" />
              </div>
              Keterangan Bersih Diri (Sekolah Kedinasan)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Permohonan kepada Lurah.",
                  "Surat Pengantar RT/RW.",
                  "Fotokopi KTP dan Kartu Keluarga (KK).",
                  "Pas foto terbaru (sesuai ketentuan instansi tujuan).",
                  "Formulir khusus dari instansi/sekolah kedinasan (jika ada)."
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