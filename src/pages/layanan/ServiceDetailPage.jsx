import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
    ArrowLeft,
    FileText,
    CheckCircle2,
    Loader2,
    MessageSquare,
    Clock,
    Info,
    Download
} from 'lucide-react';

import { getServiceTheme } from "../../lib/serviceUtils";

export default function ServiceDetailPage() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const { data, error } = await supabase
                    .from('items')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setService(data);
            } catch (err) {
                console.error("Error fetching service detail:", err);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchService();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="w-10 h-10 text-[#0B3D2E] animate-spin" />
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6">
                    <Info className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Layanan Tidak Ditemukan</h2>
                    <p className="text-slate-600 mt-2">Maaf, informasi layanan yang Anda cari tidak tersedia atau telah dihapus.</p>
                </div>
                <Button asChild className="bg-[#0B3D2E] hover:bg-[#0B3D2E]/90">
                    <Link to="/">Kembali ke Beranda</Link>
                </Button>
            </div>
        );
    }

    const theme = getServiceTheme(service.data?.kategori);
    const serviceIcon = theme.icon;
    const requirements = service.data?.syarat || [];
    const category = service.data?.kategori || "Umum";

    const getTemplatePath = (layananName) => {
        // First priority: Template from dynamic database record
        if (service.data?.template) {
            return service.data.template;
        }

        // Second priority: Hardcoded fallback mappings
        const templates = {
            "Surat Keterangan Riwayat Tanah / PM1": "Surat Keterangan Riwayat Tanah.pdf",
            "Laporan Bukti Kepemilikan Tanah yang Hilang": "Permohonan Pengantar Laporan Bukti Kepemilikan Tanah yang Hilang.pdf",
            "Balik Sertifikat": "Surat Permohonan PM 1-Balik Sertifikat.pdf",
            "Pengaktifan kembali HGB Yang Expired": "Surat Permohonan Pengaktifan kembali HGB Yang Expired.pdf",
            "Peningkatan Hak HGB Ke Hak Milik": "Surat Permohonan Peningkatan Hak HGB Ke Hak Milik.pdf",
            "Rekomendasi Permohonan Hak Atas Tanah": "Surat Rekomendasi Permohonan Hak Atas Tanah.pdf",
            "Surat Pengantar Perkawinan Pertama (N1-N4)": "Permohonan Pencatatan Register Surat Pengantar Perkawinan Pertama.pdf",
            "Surat Pengantar Perkawinan Kedua dan Seterusnya": "Surat Pengantar Perkawinan Kedua dan Seterusnya.pdf",
            "Surat Keterangan Belum Menikah (Pensiun/Lainnya)": "Surat Keterangan Belum Menikah Lagi Untuk Pensiun Janda.pdf",
            "Surat Keterangan Bersih Diri Untuk Izin Pernikahan": "Surat Keterangan Bersih Diri Untuk Izin Pernikahan.pdf",
            "Surat Pengantar PM-1 Cerai Ghoib": "Permohonan Surat Pengantar PM-1 Cerai Ghoib .pdf",
            "Balik Nama SPPT PBB-P2": "Surat Permohonan PM 1 - Balik Nama PBB.pdf",
            "Keringanan PBB": "Surat Permohonan PM1 - Keringanan  PBB.pdf",
            "Surat Keterangan Waris (WNI Pribumi)": "Surat Pernyataan Ahli Waris.pdf",
            "Surat Keterangan Bersih Diri Untuk Sekolah Kedinasan": "Surat Keterangan Bersih Diri Untuk Sekolah Kedinasan.pdf",
            "Surat Keterangan Tempat Tinggal (SKTT)": "Surat Permohonan Izin Tinggal Sementara atau Tetap Bagi Warga Asing.pdf",
            "Surat Keterangan Usaha (SKU)": "Surat Permohonan Rekomendasi IUMK.pdf",
            "Pencatatan Register Izin Bekerja di Luar Negeri": "Permohonan Pencatatan Register Izin Bekerja di Luar Negeri.pdf",
            "Surat Keterangan Domisili Penduduk": "Permohonan Pencatatan Register Surat Keterangan Domisili Penduduk.pdf",
            "Domisili Rumah Ibadah": "Surat Keterangan Domisili Rumah Ibadah.pdf",
            "Domisili Yayasan / Organisasi": "Surat Keterangan Domisili Untuk YayasanInstansiOrganisasi.pdf",
            "Surat Keterangan Belum Memiliki Rumah (PMI)": "Surat Pengantar PM1 Belum Memiliki Rumah.pdf",
            "Surat Keterangan Bersih Diri (Sekolah Kedinasan)": "Surat Keterangan Bersih Diri Untuk Sekolah Kedinasan.pdf"
        };
        return templates[layananName] || null;
    };

    const templateFile = getTemplatePath(service.title);

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-12">
            {/* === HERO SECTION === */}
            <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    {React.cloneElement(serviceIcon, { className: "w-64 h-64 text-white" })}
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
                        {category}
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        {service.title}
                    </h1>
                    <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* === BREADCRUMB & BACK === */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent transition-colors">
                    <button onClick={() => window.history.back()} className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Kembali
                    </button>
                </Button>
            </div>

            {/* === CONTENT SECTION === */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT: REQUIREMENTS CARD */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="border-l-4 border-l-amber-500 shadow-xl overflow-hidden">
                            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                                <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                                    <div className="p-2 bg-amber-100 rounded-lg">
                                        {serviceIcon}
                                    </div>
                                    Persyaratan Dokumen
                                </CardTitle>
                                <CardDescription>
                                    Daftar berkas yang wajib dilengkapi untuk pengurusan {service.title}.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                {requirements.length > 0 ? (
                                    <ul className="space-y-4">
                                        {requirements.map((req, idx) => (
                                            <li key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <span className="text-slate-700 leading-relaxed font-medium">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="text-center py-10 text-slate-400">
                                        <Info className="w-12 h-12 mx-auto mb-2 opacity-20" />
                                        <p>Informasi persyaratan belum ditambahkan.</p>
                                    </div>
                                )}

                                {templateFile && (
                                    <div className="mt-8 border-t border-slate-100 pt-6">
                                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B3D2E] font-bold flex items-center gap-2 h-12 rounded-xl shadow-lg transition-all" asChild>
                                            <a
                                                href={templateFile.startsWith('http') ? templateFile : `/template/${templateFile}`}
                                                download={!templateFile.startsWith('http') ? templateFile : undefined}
                                                target={templateFile.startsWith('http') ? "_blank" : undefined}
                                                rel={templateFile.startsWith('http') ? "noopener noreferrer" : undefined}
                                            >
                                                <Download className="h-5 w-5" /> Unduh Template Surat Resmi
                                            </a>
                                        </Button>
                                        <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                                            Format: PDF • Klik untuk mengunduh
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* STATUS INFO */}
                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex gap-4 items-start shadow-sm">
                            <div className="bg-blue-600 p-2 rounded-lg text-white">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900">Estimasi Waktu Pelayanan</h4>
                                <p className="text-blue-800/80 text-sm mt-1 leading-relaxed">
                                    Proses verifikasi berkas biasanya memakan waktu 1-3 hari kerja setelah dokumen dinyatakan lengkap oleh petugas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: SIDEBAR WIDGETS */}
                    <div className="space-y-6">
                        {/* JAM OPERASIONAL */}
                        <Card className="border-slate-200 shadow-md">
                            <CardHeader className="pb-3 border-b border-slate-50">
                                <CardTitle className="text-lg font-bold flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-[#0B3D2E]" /> Jam Operasional
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-3">
                                <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Senin - Kamis</span>
                                    <span className="font-bold text-slate-800">08:00 - 15:00</span>
                                </div>
                                <div className="flex justify-between text-sm py-2">
                                    <span className="text-slate-500">Jumat</span>
                                    <span className="font-bold text-slate-800">08:00 - 15:30</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* BANTUAN CALL TO ACTION */}
                        <Card className="bg-[#0B3D2E] text-white border-none shadow-2xl overflow-hidden relative">
                            <div className="absolute -right-8 -bottom-8 opacity-10">
                                <MessageSquare className="w-32 h-32" />
                            </div>
                            <CardContent className="p-8 text-center relative z-10">
                                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <MessageSquare className="w-8 h-8 text-[#0B3D2E]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Butuh Bantuan?</h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    Jika Anda memiliki pertanyaan mengenai persyaratan ini, silakan hubungi petugas kami melalui Live Chat.
                                </p>
                                <Button className="w-full bg-white text-[#0B3D2E] hover:bg-slate-100 font-bold h-12 rounded-xl group" asChild>
                                    <Link to="/pengaduan" className="flex items-center justify-center gap-2">
                                        Mulai Konsultasi
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
