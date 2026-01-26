import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// --- ICONS ---
import { ArrowRight, Building2, MapPin, Newspaper, Phone, ChevronRight, Activity, HardHat, Gavel, Loader2 } from 'lucide-react';
import { usePageContent } from '../hooks/useContent';

const HomePage = () => {
  const [beritaTerkini, setBeritaTerkini] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  const { content: pageContent, loading: contentLoading } = usePageContent('home');

  // Warna Brand Utama (Bisa dipakai sebagai variabel jika mau)
  const BRAND_COLOR = "bg-[#0B3D2E]";
  const TEXT_BRAND = "text-[#0B3D2E]";

  useEffect(() => {
    fetchBeritaHome();
  }, []);

  const fetchBeritaHome = async () => {
    try {
      setLoadingNews(true);
      const { data: kesehatan } = await supabase.from('berita').select('*').ilike('kategori', '%kesehatan%').limit(1).order('created_at', { ascending: false });
      const { data: pembangunan } = await supabase.from('berita').select('*').ilike('kategori', '%kesra%').limit(1).order('created_at', { ascending: false });
      const { data: pemerintahan } = await supabase.from('berita').select('*').ilike('kategori', '%ekbang%').limit(1).order('created_at', { ascending: false });

      const combined = [...(kesehatan || []), ...(pembangunan || []), ...(pemerintahan || [])];
      setBeritaTerkini(combined);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoadingNews(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getCategoryIcon = (kategori) => {
    if (kategori?.toLowerCase().includes('kesehatan')) return <Activity className="w-3 h-3 mr-1" />;
    if (kategori?.toLowerCase().includes('pembangunan')) return <HardHat className="w-3 h-3 mr-1" />;
    return <Gavel className="w-3 h-3 mr-1" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* --- HERO SECTION --- */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg_hero.png"
            alt="Kantor Kelurahan"
            className="w-full h-full object-cover"
            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'}
          />
          {/* Overlay Gradient menggunakan warna #0B3D2E */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/95 via-[#0B3D2E]/70 to-[#0B3D2E]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6 animate-in fade-in zoom-in duration-700">
          {/* <Badge variant="outline" className="border-amber-400 text-amber-400 px-4 py-1.5 text-sm mb-4 bg-[#0B3D2E]/50 backdrop-blur-sm tracking-wide uppercase">
            Portal Resmi Pemerintahan
          </Badge> */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
            {pageContent.hero_title_part1 || "Kelurahan"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">{pageContent.hero_title_accent || "Lenteng Agung"}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">
            {pageContent.hero_description || "Mewujudkan tata kelola pemerintahan yang Hijau, Maju, dan Berintegritas untuk kesejahteraan masyarakat."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#0B3D2E] font-bold text-md h-12 px-8 shadow-xl border border-amber-400" asChild>
              <Link to="/layanan/pelayanan-umum">
                Layanan Digital
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white/30 h-12 px-8 backdrop-blur-sm" asChild>
              <Link to="/sejarah">
                Jelajahi Profil
              </Link>
            </Button>
          </div>
        </div>

        {/* Hiasan Bawah Hero */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* --- TENTANG KELURAHAN (ABOUT) --- */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Pattern Halus */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <img src="/logo_kel.png" className="w-96 h-96 grayscale" alt="pattern" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className={`inline-flex items-center gap-2 ${TEXT_BRAND} font-bold uppercase tracking-widest text-sm`}>
                <Building2 className="w-5 h-5" />
                Profil Wilayah
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                {pageContent.about_title || "Membangun Lingkungan yang Asri & Harmonis"}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                {pageContent.about_text || "Kelurahan Lenteng Agung terus berinovasi dalam menghadirkan pelayanan publik yang prima. Dengan semangat gotong royong, kami mengintegrasikan teknologi dan kearifan lokal untuk menciptakan lingkungan yang nyaman bagi seluruh warga."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[#0B3D2E] shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <MapPin className="w-8 h-8 text-[#0B3D2E] mb-2" />
                  <CardTitle className="text-lg text-slate-800">Strategis & Hijau</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Kawasan penyangga dengan ruang terbuka hijau yang luas dan akses mudah.
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Phone className="w-8 h-8 text-amber-500 mb-2" />
                  <CardTitle className="text-lg text-slate-800">Siaga 24 Jam</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Layanan pengaduan dan tanggap darurat yang siap melayani warga.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/about_kel.png"
                alt="Tentang Kelurahan"
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- BERITA TERKINI --- */}
      <section className="py-24 px-4 bg-[#0B3D2E]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className={`inline-flex items-center gap-2 ${TEXT_BRAND} font-bold uppercase tracking-widest text-sm mb-3`}>
                <Newspaper className="w-5 h-5" />
                Kabar Wilayah
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Berita & Informasi Terbaru</h2>
            </div>
            <Button variant="outline" className={`border-[#0B3D2E] ${TEXT_BRAND} hover:bg-[#0B3D2E] hover:text-white`} asChild>
              <Link to="/berita">
                Lihat Semua Berita <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {loadingNews || contentLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <Card key={n} className="border-none shadow-sm bg-white">
                  <Skeleton className="h-56 w-full rounded-t-xl" />
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beritaTerkini.length > 0 ? beritaTerkini.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white">
                  {/* Image */}
                  <div className="h-60 overflow-hidden relative bg-slate-200">
                    <img
                      src={item.gambar_url}
                      alt={item.judul}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=No+Image'}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#0B3D2E] text-white shadow-lg border-none px-3 py-1 hover:bg-[#0B3D2E]/90">
                        {getCategoryIcon(item.kategori)}
                        {item.kategori}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-3 pt-6">
                    <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      {formatDate(item.created_at)}
                    </div>
                    <CardTitle className="text-xl font-bold leading-snug text-slate-900 group-hover:text-[#0B3D2E] transition-colors line-clamp-2">
                      <Link to={`/berita/${item.id}`}>
                        {item.judul}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-4 flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {item.isi?.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
                    </p>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-slate-100 p-6 bg-slate-50 group-hover:bg-[#0B3D2E]/5 transition-colors">
                    <Link
                      to={`/berita/${item.id}`}
                      className={`text-sm font-bold ${TEXT_BRAND} flex items-center group/link`}
                    >
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform text-amber-500" />
                    </Link>
                  </CardFooter>
                </Card>
              )) : (
                <div className="col-span-3 text-center py-16 border-2 border-dashed border-slate-300 rounded-xl bg-white/50">
                  <p className="text-muted-foreground text-lg">Belum ada berita terbaru untuk ditampilkan.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default HomePage;