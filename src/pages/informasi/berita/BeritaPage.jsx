import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import {
  Search,
  CalendarDays,
  ChevronRight,
  ArrowRight,
  Newspaper,
  LayoutGrid,
  Filter
} from 'lucide-react';

const BeritaPage = () => {
  const [loading, setLoading] = useState(true);
  const [beritaList, setBeritaList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Kategori yang tersedia
  const categories = ["Semua", "Pemerintahan", "Pembangunan", "Kesehatan", "Sosial", "Keamanan"];

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('berita')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBeritaList(data || []);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    } finally {
      setLoading(false);
    }
  };

  // --- LOGIC FILTER ---
  const filteredBerita = beritaList.filter((item) => {
    // 1. Filter by Category
    const matchCategory = activeCategory === "Semua"
      ? true
      : item.kategori?.toLowerCase().includes(activeCategory.toLowerCase());

    // 2. Filter by Search
    const searchLower = searchTerm.toLowerCase();
    const matchSearch =
      item.judul?.toLowerCase().includes(searchLower) ||
      item.isi?.toLowerCase().includes(searchLower);

    return matchCategory && matchSearch;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12 px-4 sm:px-6 lg:px-8">

      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#0B3D2E] font-bold uppercase tracking-widest text-sm mb-3">
              <Newspaper className="w-5 h-5" />
              Arsip Informasi
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Berita & Kabar Wilayah
            </h1>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl">
              Dapatkan informasi terkini seputar kegiatan, pembangunan, dan pengumuman resmi Kelurahan Lenteng Agung.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-8 max-w-7xl mx-auto bg-slate-200" />

      {/* --- CONTROLS SECTION (SEARCH & FILTER) --- */}
      <div className="max-w-7xl mx-auto mb-10 space-y-6">

        {/* Search Bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            type="text"
            placeholder="Cari berita..."
            className="pl-10 h-12 text-base border-slate-300 focus-visible:ring-[#0B3D2E]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={`
                rounded-full px-6 
                ${activeCategory === cat
                  ? "bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white border-transparent"
                  : "bg-white text-slate-600 border-slate-300 hover:border-[#0B3D2E] hover:text-[#0B3D2E]"}
              `}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto min-h-[500px]">
        {loading ? (
          // SKELETON LOADING
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
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
        ) : filteredBerita.length === 0 ? (
          // EMPTY STATE
          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-300 rounded-xl bg-white/50">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Search className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Tidak ada berita ditemukan</h3>
            <p className="text-muted-foreground mt-2">
              Coba kata kunci lain atau ganti kategori filter.
            </p>
            <Button
              variant="link"
              className="text-[#0B3D2E] mt-4"
              onClick={() => { setSearchTerm(""); setActiveCategory("Semua"); }}
            >
              Reset Pencarian
            </Button>
          </div>
        ) : (
          // LIST BERITA
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBerita.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white">
                {/* Image Section */}
                <div className="h-60 overflow-hidden relative bg-slate-200">
                  <img
                    src={item.gambar_url || 'https://via.placeholder.com/600x400?text=Berita+Kelurahan'}
                    alt={item.judul}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=No+Image'}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#0B3D2E] text-white shadow-lg border-none px-3 py-1 hover:bg-[#0B3D2E]/90">
                      {item.kategori || "Umum"}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <CardHeader className="pb-3 pt-6">
                  <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <CalendarDays className="w-3.5 h-3.5 text-amber-500" />
                    <span>{formatDate(item.created_at)}</span>
                  </div>
                  <CardTitle className="text-xl font-bold leading-snug text-slate-900 group-hover:text-[#0B3D2E] transition-colors line-clamp-2">
                    <Link to={`/berita/${item.id}`}>
                      {item.judul}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-4 flex-1">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {item.isi?.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                  </p>
                </CardContent>

                <CardFooter className="pt-4 border-t border-slate-100 p-6 bg-slate-50 group-hover:bg-[#0B3D2E]/5 transition-colors">
                  <Link
                    to={`/berita/${item.id}`}
                    className="text-sm font-bold text-[#0B3D2E] flex items-center group/link"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform text-amber-500" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default BeritaPage;