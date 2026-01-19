import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function BeritaPage() {
  const [newsKesehatan, setNewsKesehatan] = useState([]);
  const [newsKesra, setNewsKesra] = useState([]);
  const [newsEkbang, setNewsEkbang] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllNews = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (data) {
          setNewsKesehatan(
            data.filter((item) => item.kategori === "Berita Kesehatan")
          );
          setNewsKesra(
            data.filter((item) => item.kategori === "Berita Kegiatan Kesra")
          );
          setNewsEkbang(
            data.filter((item) => item.kategori === "Berita Kegiatan Ekbang")
          );
        }
      } catch (error) {
        console.error("Gagal memuat berita:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-10">
      {/* HEADER HALAMAN */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#06452F]">
          Berita Kelurahan
        </h1>
        <p className="text-gray-600 mt-2">
          Informasi terkini seputar kegiatan dan layanan di Kelurahan Lenteng
          Agung.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0 space-y-10">
        {/* Loading State */}
        {loading ? (
          <div className="space-y-10">
            <SkeletonSection />
            <SkeletonSection />
            <SkeletonSection />
          </div>
        ) : (
          <>
            {/* SECTION 1: BERITA KESEHATAN */}
            <NewsSection
              categoryTitle="Berita Kesehatan"
              // linkTo="/berita/kesehatan" // Opsional: jika nanti ada halaman detail per kategori
              data={newsKesehatan}
            />

            {/* SECTION 2: BERITA KEGIATAN KESRA */}
            <NewsSection
              categoryTitle="Berita Kegiatan Kesra"
              // linkTo="/berita/kesra"
              data={newsKesra}
            />

            {/* SECTION 3: BERITA KEGIATAN EKBANG */}
            <NewsSection
              categoryTitle="Berita Kegiatan Ekbang"
              // linkTo="/berita/ekbang"
              data={newsEkbang}
            />
          </>
        )}
      </div>
    </main>
  );
}

function NewsSection({ categoryTitle, linkTo, data }) {
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-100 pb-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#124076]">
          {categoryTitle}
        </h2>
        {/* Tampilkan link hanya jika props linkTo ada & data lebih dari 3 (misal) */}
        {linkTo && (
          <Link
            to={linkTo}
            className="text-sm text-gray-500 hover:text-[#06452F] hover:underline mt-2 md:mt-0"
          >
            Lihat berita lainnya
          </Link>
        )}
      </div>

      {/* Grid Berita */}
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full"
            >
              {/* Image Wrapper */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    Tidak ada gambar
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#06452F]/90 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">
                  Berita
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-[#124076] text-sm md:text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#06452F] transition-colors">
                  {item.judul}
                </h3>

                <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                  <span>📅 {formatDate(item.created_at)}</span>
                </div>

                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                  {item.isi}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-50">
                  <Link
                    to={`/berita/detail/${item.id}`}
                    className="text-xs font-semibold text-[#06452F] group-hover:underline flex items-center gap-1"
                  >
                    Baca Selengkapnya
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-10 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-sm">
            Belum ada berita untuk kategori ini.
          </p>
        </div>
      )}
    </section>
  );
}

function SkeletonSection() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <div className="h-8 w-1/3 bg-gray-200 rounded-md mb-6 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-80 bg-gray-100 rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
