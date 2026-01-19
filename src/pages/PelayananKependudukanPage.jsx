import React from "react";
import { Link } from "react-router-dom";

export default function PelayananKependudukanPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Pelayanan Kependudukan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Pelayanan Kependudukan
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          
          {/* INFO BOX (GRAY BACKGROUND) */}
          <div className="bg-[#E5E5E5] rounded-xl p-6 mb-10 text-center shadow-sm">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              Layanan ini memfasilitasi masyarakat untuk mengurus administrasi
              kependudukan secara resmi melalui Kelurahan Lenteng Agung. Setiap
              permohonan akan diproses sesuai ketentuan agar masyarakat memperoleh
              pelayanan yang cepat, tertib, dan akurat.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-[#06452F] px-6 py-2 text-sm font-medium text-white hover:bg-[#053724] transition-colors shadow-sm"
              >
                Terhubung dengan staff terkait
              </button>
            </div>
          </div>

          {/* LIST LAYANAN */}
          <div className="space-y-8">
            
            {/* DOMISILI */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#124076] mb-3">
                Domisili Warga & Lembaga
              </h2>
              <ul className="list-disc ml-5 text-sm md:text-base text-gray-800 space-y-2">
                <li>Surat Keterangan Domisili Penduduk</li>
                <li>Surat Keterangan Domisili Rumah Ibadah</li>
                <li>Surat Keterangan Domisili Yayasan / Instansi / Organisasi</li>
              </ul>
              <Link
                to="/layanan/kependudukan/domisili"
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Klik disini untuk lebih lanjut →
              </Link>
            </div>

            {/* DIVIDER (Optional, visual separation) */}
            <hr className="border-gray-200" />

            {/* KETERANGAN KEPENDUDUKAN */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#124076] mb-3">
                Keterangan Kependudukan Lainnya
              </h2>
              <ul className="list-disc ml-5 text-sm md:text-base text-gray-800 space-y-2">
                <li>Surat Pengantar PM1 Belum Memiliki Rumah</li>
                <li>Surat Keterangan Bersih Diri untuk Sekolah Kedinasan</li>
              </ul>
              <Link
                to="/layanan/kependudukan/keterangan"
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Klik disini untuk lebih lanjut →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}