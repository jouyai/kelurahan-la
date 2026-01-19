import React from "react";
import { Link } from "react-router-dom";

export default function PelayananUmumPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Pelayanan Umum"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Pelayanan Umum
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          {/* INFO BOX (ABU-ABU) */}
          <div className="bg-[#E5E5E5] rounded-lg p-6 mb-10 text-center">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
              Layanan ini memfasilitasi masyarakat untuk berkomunikasi langsung
              dengan petugas Kelurahan Lenteng Agung melalui kanal resmi yang
              tersedia pada jam kerja. Setiap permohonan atau pertanyaan akan
              diteruskan kepada staf yang berwenang sesuai jenis layanan,
              sehingga masyarakat dapat memperoleh informasi yang akurat dan
              respons yang lebih cepat.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-[#06452F] px-6 py-2 text-sm font-medium text-white hover:bg-[#053724] transition-colors"
              >
                Terhubung dengan staff terkait
              </button>
            </div>
          </div>

          {/* SECTION: PEKERJAAN & USAHA */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#124076] mb-6">
              Pekerjaan & Usaha
            </h2>

            <ul className="list-disc ml-5 space-y-3 text-sm md:text-base text-gray-800">
              <li>
                Permohonan Pencatatan Register Izin Bekerja di Luar Negeri
              </li>
              <li>Permohonan Rekomendasi IUMK (Izin Usaha Mikro Kecil)</li>
            </ul>
            <Link
              to="/layanan/umum/pekerjaan-usaha"
              className="inline-block mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              Klik disini untuk lebih lanjut →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
