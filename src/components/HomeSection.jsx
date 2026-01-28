import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function HomeSection() {
  const [highlightBerita, setHighlightBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlightBerita = async () => {
      try {
        const categories = [
          "Berita Kesehatan",
          "Berita Kegiatan Kesra",
          "Berita Kegiatan Ekbang"
        ];

        // Ambil 1 berita terbaru dari masing-masing kategori secara bersamaan
        const promises = categories.map((kategori) =>
          supabase
            .from('berita')
            .select('*')
            .eq('kategori', kategori)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle()
        );

        const results = await Promise.all(promises);

        // Filter hasil yang tidak null (jika ada kategori yang belum punya berita)
        const dataBersih = results
          .map(res => res.data)
          .filter(item => item !== null);

        setHighlightBerita(dataBersih);
      } catch (error) {
        console.error("Gagal mengambil berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlightBerita();
  }, []);

  // Helper Format Tanggal
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 md:px-0">

        {/* === BAGIAN 1: TENTANG KELURAHAN === */}
        <div className="grid gap-8 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-[#0A7A45]">
              Tentang Kelurahan
            </h2>
            <p className="text-base leading-relaxed text-gray-800">
              Kelurahan Lenteng Agung merupakan bagian dari Kecamatan Jagakarsa,
              Jakarta Selatan, yang berperan sebagai pusat pelayanan administrasi
              dan kemasyarakatan bagi warga setempat. Dengan semangat gotong
              royong, kelurahan ini berkomitmen mewujudkan pelayanan publik yang
              cepat, transparan, dan ramah, serta menciptakan lingkungan yang
              bersih, aman, dan harmonis bagi seluruh masyarakatnya.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="h-56 w-full max-w-sm overflow-hidden rounded-2xl shadow-lg bg-gray-200">
              {/* Pastikan file about_kel.png ada di folder public */}
              <img
                src="/about_kel.png"
                alt="Kelurahan Lenteng Agung"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x300?text=Kantor+Kelurahan"; // Fallback image
                }}
              />
            </div>
          </div>
        </div>

        {/* === BAGIAN 2: BERITA KELURAHAN === */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-[#0A7A45]">
              Berita Kelurahan
            </h2>

            <Link
              to="/berita"
              className="text-sm font-medium text-[#0A7A45] underline underline-offset-4 hover:opacity-80"
            >
              Lihat berita lainnya
            </Link>
          </div>

          {/* GRID BERITA */}
          {loading ? (
            // --- LOADING SKELETON ---
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 rounded-3xl bg-gray-200 animate-pulse border border-gray-300"></div>
              ))}
            </div>
          ) : highlightBerita.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {highlightBerita.map((item) => (
                <Link
                  to={`/berita/${item.id}`} // LINK KE HALAMAN DETAIL
                  key={item.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Wrapper */}
                  <div className="relative h-44 w-full bg-gray-100">
                    {(item.gambar_url || item.image_url) ? (
                      <img
                        src={item.gambar_url || item.image_url}
                        alt={item.judul}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">
                        Tidak ada gambar
                      </div>
                    )}

                    {/* Badge Kategori */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A7A45] to-transparent px-4 py-3 pt-8">
                      <span className="inline-block rounded-md bg-white/20 backdrop-blur-md border border-white/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                        {item.kategori.replace('Berita ', '')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <p className="mb-2 text-[11px] text-gray-500 flex items-center gap-1">
                      📅 {formatDate(item.created_at)}
                    </p>

                    <h3 className="mb-2 text-sm font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-[#0A7A45] transition-colors">
                      {item.judul}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {item.isi?.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
                    </p>

                    <div className="mt-auto">
                      <span className="text-xs font-semibold text-[#0A7A45] group-hover:underline">
                        Baca Selengkapnya →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-3xl border border-dashed border-gray-300">
              <p className="text-gray-500">Belum ada berita yang diterbitkan.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}