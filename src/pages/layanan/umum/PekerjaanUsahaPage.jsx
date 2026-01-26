import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import { 
  ArrowLeft, 
  Briefcase, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Wallet,
  Info
} from 'lucide-react';

export default function PekerjaanUsahaPage() {
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
            Panduan persyaratan pengurusan Surat Keterangan Usaha (SKU) dan dokumen ketenagakerjaan lainnya.
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
        
        {/* SURAT KETERANGAN USAHA (SKU) */}
        <Card className="border-l-4 border-l-[#0B3D2E] shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <Building2 className="h-6 w-6 text-[#0B3D2E]" />
              </div>
              Surat Keterangan Usaha (SKU)
            </CardTitle>
            <CardDescription>
              Dokumen legalitas untuk UMKM atau usaha rumahan, biasanya untuk syarat pinjaman bank atau bantuan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Pengantar RT/RW yang mencantumkan jenis usaha.",
                  "Fotokopi KTP dan KK Pemohon (Asli diperlihatkan).",
                  "Foto lokasi usaha atau produk usaha (dicetak).",
                  "Surat Pernyataan Tidak Keberatan dari tetangga (jika diperlukan untuk usaha tertentu)."
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

        {/* PENCATATAN PENCARI KERJA */}
        <Card className="border-l-4 border-l-amber-500 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-amber-600" />
              </div>
              Keterangan Tidak Bekerja / Pencari Kerja
            </CardTitle>
            <CardDescription>
              Untuk keperluan beasiswa, keringanan biaya, atau administrasi lamaran kerja.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Pengantar RT/RW setempat.",
                  "Fotokopi KTP dan Kartu Keluarga (KK).",
                  "Surat Pernyataan Belum/Tidak Bekerja bermaterai 10.000.",
                  "Fotokopi Ijazah Terakhir (jika diperlukan)."
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

        {/* KETERANGAN PENGHASILAN */}
        <Card className="border-l-4 border-l-blue-500 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wallet className="h-6 w-6 text-blue-600" />
              </div>
              Surat Keterangan Penghasilan
            </CardTitle>
            <CardDescription>
              Bagi pekerja sektor informal (tidak memiliki slip gaji) untuk keperluan administrasi sekolah anak atau bank.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-slate-700 mb-3 text-sm">Persyaratan Berkas:</h4>
              <ul className="space-y-3">
                {[
                  "Surat Pengantar RT/RW yang menyebutkan nominal rata-rata penghasilan per bulan.",
                  "Fotokopi KTP dan Kartu Keluarga (KK).",
                  "Surat Pernyataan Penghasilan bermaterai yang diketahui RT/RW."
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

        {/* INFO TAMBAHAN */}
        <div className="bg-slate-100 p-4 rounded-lg flex gap-3 items-start border border-slate-200">
          <Info className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600">
            <strong>Catatan:</strong> Pelayanan Surat Keterangan Usaha (SKU) juga dapat diajukan secara online melalui aplikasi <strong>JAKEVO</strong> (untuk izin mikro) atau datang langsung ke PTSP Kelurahan.
          </p>
        </div>

      </div>
    </div>
  );
}