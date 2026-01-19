import React from "react";
import { Link } from "react-router-dom";

export default function OrganisasiPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-8">
      
      {/* HEADER & BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-6">
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
          <Link to="/" className="hover:text-[#06452F] hover:underline">
            Beranda
          </Link>
          <span>&gt;</span>
          <span className="font-semibold text-gray-700">Organisasi</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#06452F]">
          Lembaga Organisasi Kelurahan
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0 space-y-8">

        {/* --- SECTION 1: ORGANISASI PKK --- */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#124076] mb-4">
            Organisasi PKK
          </h2>

          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4 text-justify">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Tujuan PKK</h3>
              <p>
                Gerakan PKK bertujuan memberdayakan keluarga untuk meningkatkan kesejahteraan menuju
                terwujudnya keluarga yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, berakhlak mulia
                dan berbudi luhur, sehat sejahtera, maju dan mandiri, kesetaraan dan keadilan gender
                serta kesadaran hukum dan lingkungan.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1">Sasaran PKK</h3>
              <p>
                Sasaran Gerakan PKK adalah keluarga, baik di pedesaan maupun perkotaan yang perlu
                ditingkatkan dan dikembangkan kemampuan dan kepribadiannya, dalam bidang:
              </p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Mental spiritual dan fisik material.</li>
                <li>Pendidikan, keterampilan dan keahlian untuk meningkatkan kesejahteraan keluarga.</li>
                <li>Pengelolaan kehidupan keluarga yang sakinah, mawaddah, warahmah.</li>
              </ul>
            </div>
          </div>

          {/* GALERI FOTO KEGIATAN PKK */}
          <div className="mt-8">
            <h3 className="font-bold text-gray-900 mb-4">Dokumentasi Kegiatan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Foto Besar Utama */}
              <div className="h-64 md:h-full w-full rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800" 
                  alt="Kegiatan PKK 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Grid Foto Kecil */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=400" 
                    alt="Kegiatan PKK 2" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-48 rounded-xl overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400" 
                    alt="Kegiatan PKK 3" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Placeholder jika ingin 4 foto, atau hapus div ini jika cuma 3 */}
                <div className="col-span-2 h-48 rounded-xl overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800" 
                    alt="Kegiatan PKK 4" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: ORGANISASI KARANG TARUNA --- */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#124076] mb-6">
            Organisasi Karang Taruna
          </h2>

          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-6 text-justify">
            
            {/* Tujuan */}
            <div>
              <h3 className="font-bold text-[#06452F] text-lg mb-2">Tujuan Karang Taruna</h3>
              <ul className="list-decimal ml-5 space-y-2">
                <li>Terwujudnya pertumbuhan dan perkembangan kesadaran tanggung jawab sosial setiap generasi muda warga Karang Taruna dalam mencegah, menangkal, menanggulangi dan mengantisipasi berbagai masalah sosial.</li>
                <li>Terbentuknya jiwa dan semangat kejuangan generasi muda warga Karang Taruna yang trampil dan berkepribadian serta berpengetahuan.</li>
                <li>Tumbuhnya potensi dan kemampuan generasi muda dalam rangka mengembangkan keberdayaan warga Karang Taruna.</li>
              </ul>
            </div>

            {/* Tugas Pokok */}
            <div>
              <h3 className="font-bold text-[#06452F] text-lg mb-2">Tugas Pokok</h3>
              <p>
                Setiap Karang Taruna mempunyai tugas pokok secara bersama-sama dengan Pemerintah dan komponen masyarakat lainnya untuk menanggulangi berbagai masalah kesejahteraan sosial terutama yang dihadapi generasi muda, baik yang bersifat preventif, rehabilitatif maupun pengembangan potensi generasi muda di lingkungannya.
              </p>
            </div>

            {/* Susunan Pengurus (DUMMY DATA sesuai format list panjang) */}
            <div>
              <h3 className="font-bold text-[#06452F] text-lg mb-4">Susunan Pengurus</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Ketua</span>
                    <span className="font-medium">Ahmad Fauzi</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Wakil Ketua</span>
                    <span className="font-medium">Budi Santoso</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Sekretaris</span>
                    <span className="font-medium">Siti Aminah</span>
                  </div>
                   <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Bendahara</span>
                    <span className="font-medium">Dewi Sartika</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Seksi Pendidikan & Pelatihan</span>
                    <span className="font-medium">Rudi Hartono</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Seksi Usaha Kesejahteraan Sosial</span>
                    <span className="font-medium">Lina Marlina</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Seksi Kelompok Usaha Bersama</span>
                    <span className="font-medium">Eko Prasetyo</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold">Seksi Kerohanian</span>
                    <span className="font-medium">Ust. Hidayat</span>
                  </div>
                </div>

              </div>
              <p className="mt-4 text-xs text-gray-500 italic">
                * Data kepengurusan dapat berubah sewaktu-waktu sesuai dengan masa bakti.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}