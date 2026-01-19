import React from "react";
import { Link } from "react-router-dom";

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-8">
      {/* HEADER & BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-6">
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
          <Link to="/" className="hover:text-[#06452F] hover:underline">
            Beranda
          </Link>
          <span>&gt;</span>
          <span className="font-semibold text-gray-700">Fasilitas</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#06452F]">
          Fasilitas Kelurahan
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0 space-y-8">
        
        {/* SECTION 1: STATISTIK (Chart Dummy) */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-[#124076] mb-6">
            Sarana Peribadatan & Sarana Umum
          </h2>
          
          {/* Simple CSS Bar Chart */}
          <div className="space-y-4 mb-8">
            <BarItem label="Masjid" percentage="80%" count="18" color="bg-green-400" />
            <BarItem label="Musholla" percentage="60%" count="12" color="bg-green-300" />
            <BarItem label="Taman / RPTRA" percentage="40%" count="6" color="bg-green-200" />
          </div>

          {/* Summary Boxes */}
          <div className="flex gap-4">
            <div className="border border-gray-200 rounded-lg p-4 w-1/2 md:w-1/4">
              <p className="text-xs text-gray-500 mb-1">Jumlah Tempat Ibadah</p>
              <p className="text-xl font-bold text-[#06452F]">30</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 w-1/2 md:w-1/4">
              <p className="text-xs text-gray-500 mb-1">Jumlah RPTRA / Taman</p>
              <p className="text-xl font-bold text-[#06452F]">6</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TABEL DATA MASJID */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="text-lg font-bold text-[#124076] mb-4 border-b pb-2">
            Data Masjid
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-[#06452F] text-white text-xs uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">No</th>
                  <th className="px-4 py-3">Nama Masjid</th>
                  <th className="px-4 py-3">Alamat</th>
                  <th className="px-4 py-3">Ketua DKM</th>
                  <th className="px-4 py-3 rounded-tr-lg">Status Tanah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <TableRow no="1" name="Masjid Al-Ikhlas" address="Jl. Agung Raya 1" dkm="H. Ahmad" status="Wakaf" />
                <TableRow no="2" name="Masjid Nurul Iman" address="Jl. Joe Kelapa Tiga" dkm="Ust. Budi" status="SHM" />
                <TableRow no="3" name="Masjid At-Taqwa" address="Jl. Lenteng Agung Timur" dkm="H. Salim" status="Wakaf" />
                {/* Tambahkan data dummy lainnya disini */}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: TABEL DATA MUSHOLLA */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="text-lg font-bold text-[#124076] mb-4 border-b pb-2">
            Data Musholla
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-[#06452F] text-white text-xs uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">No</th>
                  <th className="px-4 py-3">Nama Musholla</th>
                  <th className="px-4 py-3">Alamat</th>
                  <th className="px-4 py-3">Pengurus</th>
                  <th className="px-4 py-3 rounded-tr-lg">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <TableRow no="1" name="Musholla Al-Hidayah" address="RT 03 RW 01" dkm="Bpk. Supri" status="Aktif" />
                <TableRow no="2" name="Musholla Baiturrahman" address="RT 05 RW 02" dkm="Bpk. Yanto" status="Aktif" />
                <TableRow no="3" name="Musholla As-Salam" address="RT 01 RW 04" dkm="Bpk. Dedi" status="Renovasi" />
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4: FASILITAS TAMAN (List Style) */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-[#124076] mb-4">
            Fasilitas Taman
          </h2>
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            
            {/* Item Taman 1 */}
            <div>
              <h3 className="font-bold text-[#06452F] mb-2">1. Taman Lenteng Agung (Taman LLA)</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Lokasi: Jl. Lenteng Agung Raya (Depan Stasiun)</li>
                <li>Fasilitas: Jogging Track, Bangku Taman, Area Bermain Anak</li>
                <li>Luas Area: ± 1.200 m²</li>
              </ul>
            </div>

            {/* Item Taman 2 */}
            <div>
              <h3 className="font-bold text-[#06452F] mb-2">2. Taman Komuni (Taman Maju Bersama)</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Lokasi: Jl. Camat Gabun II</li>
                <li>Fasilitas: Lapangan Futsal, Amphitheater Mini, Toilet Umum</li>
                <li>Jam Operasional: 06.00 - 18.00 WIB</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 5: FASILITAS RPTRA */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-[#124076] mb-4">
            Fasilitas RPTRA
          </h2>
          <div className="bg-[#F9FAFB] p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-[#06452F] text-base mb-3">
              RPTRA Lenteng Agung (Ruang Publik Terpadu Ramah Anak)
            </h3>
            <p className="mb-3 text-sm text-gray-600">
              Merupakan pusat kegiatan warga yang menyediakan berbagai fasilitas edukasi dan olahraga.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Ruang Perpustakaan</li>
                <li>Ruang Laktasi</li>
                <li>PKK Mart</li>
              </ul>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Lapangan Futsal / Basket</li>
                <li>Area Bercocok Tanam (Urban Farming)</li>
                <li>Aula Serbaguna</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

// Komponen Bar Chart Sederhana
function BarItem({ label, percentage, count, color }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
        <span>{label}</span>
        <span>{count} Unit</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${color}`}
          style={{ width: percentage }}
        ></div>
      </div>
    </div>
  );
}

// Komponen Baris Tabel
function TableRow({ no, name, address, dkm, status }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-50">{no}</td>
      <td className="px-4 py-3 border-b border-gray-50 font-medium">{name}</td>
      <td className="px-4 py-3 border-b border-gray-50">{address}</td>
      <td className="px-4 py-3 border-b border-gray-50">{dkm}</td>
      <td className="px-4 py-3 border-b border-gray-50">
        <span className="bg-blue-50 text-blue-700 py-1 px-2 rounded text-xs font-semibold">
          {status}
        </span>
      </td>
    </tr>
  );
}