import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

// --- ICONS ---
import { 
  ArrowLeft, 
  Heart, 
  Search, 
  CalendarDays, 
  User, 
  MapPin, 
  Clock, 
  Activity,
  ArrowRight
} from 'lucide-react';

export default function BeritaKesehatanPage() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // FETCH DATA
  useEffect(() => {
    const fetchHealthNews = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .ilike("kategori", "%kesehatan%") // Mengambil berita yang mengandung kata kesehatan
          .order("created_at", { ascending: false });

        if (error) throw error;
        setNewsData(data || []);
      } catch (error) {
        console.error("Gagal memuat berita kesehatan:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthNews();
  }, []);

  // SEARCH FILTER
  const filteredNews = newsData.filter(item => 
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Heart className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-red-400 text-red-300 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Info Warga
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kabar Kesehatan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Informasi terkini seputar layanan kesehatan, jadwal Posyandu, dan tips hidup sehat untuk warga Lenteng Agung.
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </Link>
        </Button>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT: NEWS LIST */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari info kesehatan..."
                className="pl-10 h-12 text-base border-slate-300 focus-visible:ring-[#0B3D2E]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((n) => (
                  <Card key={n} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Skeleton className="w-32 h-32 rounded-lg" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-1/4" />
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredNews.length > 0 ? (
                  filteredNews.map((news) => (
                    <Card key={news.id} className="group overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-48 bg-slate-100 relative overflow-hidden">
                          <img 
                            src={news.gambar_url || "https://placehold.co/400x400?text=Sehat"} 
                            alt={news.judul}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => e.target.src = "https://placehold.co/400x400?text=No+Image"}
                          />
                        </div>
                        <div className="flex-1 p-6 flex flex-col">
                          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                            <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-100">
                              Kesehatan
                            </Badge>
                            <span className="flex items-center gap-1">
                              <CalendarDays className="h-3 w-3" />
                              {formatDate(news.created_at)}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-[#0B3D2E] transition-colors">
                            <Link to={`/berita/${news.id}`}>
                              {news.judul}
                            </Link>
                          </h3>
                          
                          <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">
                            {news.isi?.replace(/<[^>]*>?/gm, '')}
                          </p>
                          
                          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              <User className="h-3 w-3" /> Admin
                            </span>
                            <Link 
                              to={`/berita/${news.id}`} 
                              className="text-sm font-bold text-[#0B3D2E] flex items-center hover:underline"
                            >
                              Baca Selengkapnya <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50">
                    <Activity className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-500">Belum ada berita kesehatan ditemukan.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Widget Puskesmas */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-slate-100">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  Puskesmas Kelurahan
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm">Puskesmas Lenteng Agung 1</h4>
                    <p className="text-xs text-slate-500 mt-1">Jl. Agung Raya No. 1</p>
                    <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-green-600">
                      <Clock className="h-3 w-3" /> 07.30 - 16.00 WIB
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm">Puskesmas Lenteng Agung 2</h4>
                    <p className="text-xs text-slate-500 mt-1">Jl. Camat Gabun</p>
                    <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-green-600">
                      <Clock className="h-3 w-3" /> 07.30 - 16.00 WIB
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-[#0B3D2E] mb-2 text-sm">Jadwal Posyandu (Est.)</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                      <span>RW 01 - Mawar</span>
                      <span className="font-bold">Tgl 05</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                      <span>RW 03 - Anggrek</span>
                      <span className="font-bold">Tgl 08</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                      <span>RW 05 - Melati</span>
                      <span className="font-bold">Tgl 10</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}