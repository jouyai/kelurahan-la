import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import {
  ArrowLeft,
  CalendarDays,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  ChevronRight
} from 'lucide-react';

const BeritaDetailPage = () => {
  const { id } = useParams();
  const [berita, setBerita] = useState(null);
  const [beritaTerbaru, setBeritaTerbaru] = useState([]); // Untuk Sidebar
  const [loading, setLoading] = useState(true);

  // Fetch Data Utama & Sidebar
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1. Ambil Detail Berita
        const { data: detailData, error: detailError } = await supabase
          .from('berita')
          .select('*')
          .eq('id', id)
          .single();

        if (detailError) throw detailError;
        setBerita(detailData);

        // 2. Ambil 5 Berita Terbaru untuk Sidebar (kecuali berita yang sedang dibuka)
        const { data: sidebarData } = await supabase
          .from('berita')
          .select('id, judul, created_at')
          .neq('id', id) // Jangan tampilkan berita yang sedang dibaca
          .order('created_at', { ascending: false })
          .limit(5);

        setBeritaTerbaru(sidebarData || []);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Scroll ke atas saat pindah berita
    window.scrollTo(0, 0);
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  if (loading) {
    return <DetailSkeleton />;
  }

  if (!berita) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800">Berita tidak ditemukan</h2>
        <Button variant="link" asChild className="mt-4 text-[#0B3D2E]">
          <Link to="/informasi/berita"><ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Berita</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12 px-4 sm:px-6 lg:px-8 pt-24">

      {/* --- BREADCRUMB & BACK --- */}
      <div className="max-w-6xl mx-auto mb-6">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/informasi/berita" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Berita
          </Link>
        </Button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* === MAIN CONTENT (KOLOM KIRI) === */}
        <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

          {/* Hero Image */}
          <div className="w-full h-[300px] sm:h-[400px] relative bg-slate-200">
            <img
              src={berita.gambar_url || berita.image_url || 'https://placehold.co/800x400?text=Berita+Kelurahan'}
              alt={berita.judul}
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = 'https://placehold.co/800x400?text=No+Image'}
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="p-6 sm:p-10">
            {/* Meta Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white px-3 py-1 text-sm">
                {berita.kategori}
              </Badge>
              <div className="flex items-center text-sm text-slate-500 gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(berita.created_at)}</span>
              </div>
              <div className="flex items-center text-sm text-slate-500 gap-2">
                <User className="h-4 w-4" />
                <span>Admin Kelurahan</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              {berita.judul}
            </h1>

            {/* Content Body */}
            <div
              className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed
                prose-headings:font-bold prose-headings:text-[#0B3D2E]
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: berita.isi }}
            />

            <Separator className="my-10" />

            {/* Share Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-xl">
              <span className="font-semibold text-slate-700 flex items-center gap-2">
                <Share2 className="h-5 w-5" /> Bagikan berita ini:
              </span>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

          </div>
        </article>


        {/* === SIDEBAR WIDGET (KOLOM KANAN) === */}
        <div className="space-y-8 lg:sticky lg:top-24 h-fit">

          {/* Widget 1: Berita Terbaru */}
          <Card className="border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
              <CardTitle className="text-lg font-bold text-[#0B3D2E] flex items-center gap-2">
                <Clock className="h-5 w-5" /> Berita Terbaru
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-0">
              <div className="max-h-[400px] overflow-y-auto px-6 pb-4 custom-scrollbar">
                {beritaTerbaru.length > 0 ? (
                  beritaTerbaru.map((item) => (
                    <Link key={item.id} to={`/berita/${item.id}`} className="group block py-4 border-b border-slate-100 last:border-0">
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                        {item.judul}
                      </h4>
                      <span className="text-xs text-slate-400 mt-1 block">
                        {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-500 py-4">Tidak ada berita lain.</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Widget 2: Kategori (Opsional / Dummy Links) */}
          <Card className="border-slate-200 shadow-sm bg-[#0B3D2E] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Layanan Warga</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-200 mb-4">
                Butuh surat pengantar atau layanan kependudukan? Akses layanan online kami.
              </p>
              <Button variant="secondary" className="w-full bg-amber-500 text-[#0B3D2E] hover:bg-amber-400 font-bold" asChild>
                <Link to="/layanan/umum">Buka Layanan Online</Link>
              </Button>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
};

// Skeleton Loader Component
const DetailSkeleton = () => (
  <div className="min-h-screen pb-12 px-4 max-w-6xl mx-auto">
    <Skeleton className="h-8 w-48 mb-6" />
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        <Skeleton className="w-full h-[400px] rounded-2xl" />
        <Skeleton className="h-10 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="hidden lg:block space-y-6">
        <Skeleton className="h-64 w-full rounded-xl" />
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>
    </div>
  </div>
);

export default BeritaDetailPage;