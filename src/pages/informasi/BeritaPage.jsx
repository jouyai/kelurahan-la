import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient"; // Sesuaikan path ini
import { 
  CalendarDaysIcon, 
  UserIcon, 
  TagIcon, 
  MagnifyingGlassIcon,
  ArrowRightIcon,
  NewspaperIcon,
  PhotoIcon
} from "@heroicons/react/24/solid";

export default function BeritaPage() {
  const [allNews, setAllNews] = useState([]); // Menyimpan semua data mentah
  const [filteredNews, setFilteredNews] = useState([]); // Data yang ditampilkan (setelah filter)
  const [loading, setLoading] = useState(true);
  
  // State untuk Filter & Search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // 1. FETCH DATA DARI SUPABASE
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
          setAllNews(data);
          setFilteredNews(data);
        }
      } catch (error) {
        console.error("Gagal memuat berita:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  // 2. LOGIKA FILTER & SEARCH (Client Side)
  useEffect(() => {
    let result = allNews;

    // Filter by Category
    if (selectedCategory !== "Semua") {
      result = result.filter(item => item.kategori === selectedCategory);
    }

    // Filter by Search Term
    if (searchTerm) {
      result = result.filter(item => 
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredNews(result);
  }, [searchTerm, selectedCategory, allNews]);

  // 3. HITUNG JUMLAH KATEGORI SECARA DINAMIS
  const categoriesCount = allNews.reduce((acc, item) => {
    const cat = item.kategori || "Umum";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  
  // Helper: Format Tanggal
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* === BREADCRUMB SECTION === */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-8">
        <nav className="flex text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-[#06452F] hover:underline flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Berita Kelurahan</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Kabar Lenteng Agung
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Informasi terkini seputar kegiatan pemerintahan, pembangunan, dan 
            layanan di lingkungan Kelurahan Lenteng Agung.
          </p>
        </div>
      </div>

      {/* === CONTENT SECTION === */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* --- LEFT: NEWS LIST --- */}
          <div className="w-full lg:w-2/3">
            
            {/* Search Bar (Mobile Only) */}
            <div className="lg:hidden mb-6 relative">
              <input
                type="text"
                placeholder="Cari berita..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06452F]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            {loading ? (
              // SKELETON LOADING
              <div className="space-y-6">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 animate-pulse">
                    <div className="w-full md:w-48 h-48 bg-gray-200 rounded-xl"></div>
                    <div className="flex-1 space-y-4 py-2">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // DATA LIST
              <div className="space-y-8">
                {filteredNews.length > 0 ? (
                  filteredNews.map((news) => (
                    <article 
                      key={news.id} 
                      className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow group"
                    >
                      {/* Thumbnail Image */}
                      <div className="shrink-0 w-full md:w-48 h-48 md:h-auto rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center group-hover:opacity-90 transition-opacity relative">
                        {news.image_url ? (
                          <img 
                            src={news.image_url} 
                            alt={news.judul} 
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300?text=No+Image"; }}
                          />
                        ) : (
                          <NewspaperIcon className="h-12 w-12 text-gray-400" />
                        )}
                      </div>
                      
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded font-bold uppercase tracking-wide">
                            {news.kategori}
                          </span>
                          <div className="flex items-center gap-1">
                            <CalendarDaysIcon className="h-4 w-4" />
                            {formatDate(news.created_at)}
                          </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-[#124076] transition-colors">
                          <Link to={`/berita/detail/${news.id}`}>
                            {news.judul}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {news.isi}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                            <UserIcon className="h-3 w-3 text-gray-400" />
                            Admin Kelurahan
                          </div>
                          
                          <Link 
                            to={`/berita/detail/${news.id}`} 
                            className="flex items-center gap-1 text-sm font-bold text-[#06452F] hover:underline"
                          >
                            Baca Selengkapnya
                            <ArrowRightIcon className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
                    <PhotoIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Tidak ada berita ditemukan.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* --- RIGHT: SIDEBAR --- */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Search Widget (Desktop) */}
            <div className="hidden lg:block bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Cari Berita</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Kata kunci..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#06452F] text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <MagnifyingGlassIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TagIcon className="h-5 w-5 text-[#06452F]" />
                Kategori Berita
              </h3>
              
              <ul className="space-y-2">
                {/* Tombol Semua Kategori */}
                <li>
                   <button 
                    onClick={() => setSelectedCategory("Semua")}
                    className={`w-full flex justify-between items-center group py-2 px-3 rounded-lg transition-colors text-left ${selectedCategory === "Semua" ? "bg-[#06452F] text-white" : "hover:bg-gray-50 text-gray-600"}`}
                  >
                    <span className="text-sm font-medium">Semua Berita</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${selectedCategory === "Semua" ? "bg-white text-[#06452F]" : "bg-gray-100 text-gray-500"}`}>
                      {allNews.length}
                    </span>
                  </button>
                </li>

                {/* List Kategori Dinamis */}
                {Object.entries(categoriesCount).map(([name, count], idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => setSelectedCategory(name)}
                      className={`w-full flex justify-between items-center group py-2 px-3 rounded-lg transition-colors text-left ${selectedCategory === name ? "bg-[#06452F] text-white" : "hover:bg-gray-50 text-gray-600"}`}
                    >
                      <span className="text-sm font-medium">{name}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${selectedCategory === name ? "bg-white text-[#06452F]" : "bg-gray-100 text-gray-500"}`}>
                        {count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent News Widget (3 Teratas) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Berita Terbaru</h3>
              <div className="space-y-4">
                {allNews.slice(0, 3).map((item, idx) => (
                  <div key={item.id} className="flex gap-3 items-start group cursor-pointer">
                    <span className="text-2xl font-bold text-gray-200 group-hover:text-[#06452F] transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#06452F] transition-colors line-clamp-2">
                        <Link to={`/berita/detail/${item.id}`}>
                          {item.judul}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {formatDate(item.created_at)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}