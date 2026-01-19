import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { ArrowLeftIcon, CalendarDaysIcon, UserCircleIcon, TagIcon } from "@heroicons/react/24/solid";

export default function BeritaDetailPage() {
  const { id } = useParams(); // Ambil ID dari URL (misal: /berita/123)
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeritaDetail = async () => {
      try {
        const { data, error } = await supabase
          .from('berita')
          .select('*')
          .eq('id', id)
          .single(); // Ambil 1 data saja

        if (error) throw error;
        setBerita(data);
      } catch (error) {
        console.error("Gagal memuat berita:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeritaDetail();
  }, [id]);

  // Helper Format Tanggal
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-4 bg-gray-300 rounded-full mb-2"></div>
          <p className="text-gray-500 text-sm">Memuat Berita...</p>
        </div>
      </div>
    );
  }

  if (!berita) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7FA] gap-4">
        <h2 className="text-2xl font-bold text-gray-700">Berita Tidak Ditemukan</h2>
        <Link to="/berita" className="text-blue-600 hover:underline">Kembali ke Daftar Berita</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-8">
      <article className="max-w-4xl mx-auto px-4 md:px-0">
        
        {/* TOMBOL KEMBALI */}
        <Link 
          to="/berita" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#06452F] mb-6 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Kembali ke Berita
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* GAMBAR HERO */}
          <div className="w-full h-[300px] md:h-[500px] bg-gray-200 relative">
            {berita.image_url ? (
              <img 
                src={berita.image_url} 
                alt={berita.judul} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Tidak ada gambar
              </div>
            )}
            
            {/* BADGE KATEGORI */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
               <span className="bg-[#06452F] text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider shadow-lg">
                 {berita.kategori}
               </span>
            </div>
          </div>

          {/* KONTEN BERITA */}
          <div className="p-6 md:p-12">
            
            {/* JUDUL */}
            <h1 className="text-2xl md:text-4xl font-bold text-[#124076] mb-6 leading-tight">
              {berita.judul}
            </h1>

            {/* META INFO (Tanggal, Penulis) */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <CalendarDaysIcon className="h-5 w-5 text-[#0A7A45]" />
                <span>{formatDate(berita.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <TagIcon className="h-5 w-5 text-[#0A7A45]" />
                <span>{berita.kategori}</span>
              </div>
            </div>

            {/* ISI BERITA (Body) */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
              {/* whitespace-pre-wrap BERGUNA AGAR ENTER/PARAGRAF DARI INPUT TEXTAREA TERBACA */}
              {berita.isi}
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}