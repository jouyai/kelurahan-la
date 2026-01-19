import React from "react";
import { Link } from "react-router-dom";

export default function PelayananAdministrasiPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Pelayanan Administrasi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Pelayanan Administrasi
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          
          {/* INFO BOX (GRAY BACKGROUND) */}
          <div className="bg-[#E5E5E5] rounded-xl p-6 mb-10 text-center shadow-sm">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              Layanan ini memfasilitasi masyarakat untuk berkomunikasi langsung
              dengan petugas Kelurahan Lenteng Agung melalui kanal resmi yang
              tersedia pada jam kerja. Setiap permohonan atau pertanyaan akan
              diteruskan kepada petugas yang berwenang sesuai jenis layanan,
              sehingga masyarakat dapat memperoleh informasi yang akurat dan
              respons yang lebih cepat.
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
            
            {/* TANAH & PROPERTI */}
            <div>
              <Link
                to="/layanan/administrasi/tanah"
                className="block text-lg md:text-xl font-bold text-[#124076] hover:underline mb-3"
              >
                Tanah dan Kepemilikan Properti
              </Link>
              <ul className="list-disc ml-5 text-sm md:text-base text-gray-800 space-y-2">
                <li>Permohonan Pengantar Laporan Bukti Kepemilikan Tanah yang Hilang</li>
                <li>Permohonan Surat Rekomendasi Hak Atas Tanah Negara</li>
                <li>Permohonan Surat Pengantar Riwayat Tanah</li>
                <li>Permohonan Pencadukan Registrasi Pengalihan HGB Expired</li>
                <li>Permohonan Pencatatan Register PMI – Balik Nama Sertifikat</li>
              </ul>
              <Link
                to="/layanan/administrasi/tanah"
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Klik disini untuk lebih lanjut →
              </Link>
            </div>

            {/* DIVIDER */}
            <hr className="border-gray-200" />

            {/* STATUS PERKAWINAN & KELUARGA */}
            <div>
              <Link
                to="/layanan/administrasi/status-perkawinan"
                className="block text-lg md:text-xl font-bold text-[#124076] hover:underline mb-3"
              >
                Status Perkawinan & Keluarga
              </Link>
              <ul className="list-disc ml-5 text-sm md:text-base text-gray-800 space-y-2">
                <li>Pencatatan Register Surat Pengantar Perkawinan Pertama</li>
                <li>Pencatatan Register Surat Pengantar Perkawinan Kedua & Seterusnya</li>
                <li>Pencatatan Register Surat Keterangan Belum Menikah</li>
                <li>Pencatatan Register Keterangan Bersih Diri</li>
                <li>Surat Pengantar PMI-1 Cerai Ghoib</li>
              </ul>
              <Link
                to="/layanan/administrasi/status-perkawinan"
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Klik disini untuk lebih lanjut →
              </Link>
            </div>

            {/* DIVIDER */}
            <hr className="border-gray-200" />

            {/* PAJAK & ASET */}
            <div>
              <Link
                to="/layanan/administrasi/pajak-aset"
                className="block text-lg md:text-xl font-bold text-[#124076] hover:underline mb-3"
              >
                Pajak & Aset
              </Link>
              <ul className="list-disc ml-5 text-sm md:text-base text-gray-800 space-y-2">
                <li>Pencatatan PMI – Keringanan PBB</li>
                <li>Pencatatan PMI – Balik Nama PBB</li>
              </ul>
              <Link
                to="/layanan/administrasi/pajak-aset"
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Klik disini untuk lebih lanjut →
              </Link>
            </div>

            {/* DIVIDER */}
            <hr className="border-gray-200" />

            {/* PERNYATAAN HUKUM / WARISAN */}
            <div>
              <Link
                to="/layanan/administrasi/pernyataan-hukum-warisan"
                className="block text-lg md:text-xl font-bold text-[#124076] hover:underline mb-3"
              >
                Pernyataan Hukum / Warisan
              </Link>
              <ul className="list-disc ml-5 text-sm md:text-base text-gray-800 space-y-2">
                <li>Pencatatan Register Surat Pernyataan Ahli Waris</li>
              </ul>
              <Link
                to="/layanan/administrasi/pernyataan-hukum-warisan"
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Klik disini untuk lebih lanjut →
              </Link>
            </div>

            {/* DIVIDER */}
            <hr className="border-gray-200" />

            {/* WARGA NEGARA ASING */}
            <div>
              <Link
                to="/layanan/administrasi/warga-negara-asing"
                className="block text-lg md:text-xl font-bold text-[#124076] hover:underline mb-3"
              >
                Warga Negara Asing
              </Link>
              <ul className="list-disc ml-5 text-sm md:text-base text-gray-800 space-y-2">
                <li>Permohonan Izin Tinggal Sementara/Tetap WNA</li>
              </ul>
              <Link
                to="/layanan/administrasi/warga-negara-asing"
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