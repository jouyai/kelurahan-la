import React from "react";
import { Link } from "react-router-dom";

export default function PendidikanPage() {
  // --- DATA DUMMY STATISTIK ---
  const statsData = [
    { label: "PAUD", count: 8, color: "#9CA3AF" }, // Abu-abu
    { label: "TK / RA", count: 11, color: "#4ADE80" }, // Hijau Muda
    { label: "SD", count: 17, color: "#60A5FA" }, // Biru
    { label: "SMP", count: 7, color: "#FACC15" }, // Kuning
    { label: "SMA", count: 5, color: "#F87171" }, // Merah
    { label: "Perguruan Tinggi", count: 3, color: "#FB923C" }, // Orange
  ];

  // Total Data untuk hitung persentase chart
  const totalSchools = statsData.reduce((acc, curr) => acc + curr.count, 0);

  // --- DATA DUMMY TABEL ---
  const schoolList = [
    { no: 1, name: "PAUD Bintang Kecil", address: "Jl. Lenteng Agung Raya No. 10", level: "PAUD", phone: "-", head: "Siti Aminah" },
    { no: 2, name: "TK Islam Al-Azhar", address: "Jl. Agung Raya 1", level: "TK/RA", phone: "021-787xxxx", head: "Budi Santoso" },
    { no: 3, name: "SDN Lenteng Agung 01", address: "Jl. Camat Gabun I", level: "SD", phone: "021-786xxxx", head: "Drs. H. Suwandi" },
    { no: 4, name: "SDN Lenteng Agung 03 Pagi", address: "Jl. Lenteng Agung Timur", level: "SD", phone: "021-788xxxx", head: "Hj. Nurhayati, S.Pd" },
    { no: 5, name: "SMP Negeri 98 Jakarta", address: "Jl. Raya Lenteng Agung", level: "SMP", phone: "021-727xxxx", head: "Dra. Yulia" },
    { no: 6, name: "SMA Negeri 38 Jakarta", address: "Jl. Raya Lenteng Agung", level: "SMA", phone: "021-789xxxx", head: "Drs. M. Taufik" },
    { no: 7, name: "Institut Ilmu Sosial dan Politik (IISIP)", address: "Jl. Raya Lenteng Agung No. 32", level: "Perguruan Tinggi", phone: "021-780xxxx", head: "Dr. Ir. Ilham" },
    { no: 8, name: "Universitas Pancasila", address: "Jl. Srengseng Sawah", level: "Perguruan Tinggi", phone: "021-786xxxx", head: "Prof. Dr. Edie" },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-64 w-full">
        <img
          src="/bg_hero.png" // Ganti dengan path gambar kantor kelurahan/sekolah
          alt="Data Sekolah Lenteng Agung"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Data Sekolah di Kelurahan Lenteng Agung
          </h1>
          <p className="text-white/80 text-sm md:text-base">
            Jakarta Selatan
          </p>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mt-10 space-y-10">

        {/* SECTION 1: STATISTIK & CHART */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-[#124076] mb-4">
            Sebaran Jumlah Sekolah Berdasarkan Tingkat Pendidikan
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
            Grafik ini menampilkan jumlah sarana pendidikan di wilayah Kelurahan Lenteng Agung
            berdasarkan jenjangnya, mulai dari PAUD hingga perguruan tinggi. Data ini memberikan
            gambaran mengenai ketersediaan lembaga pendidikan di setiap tingkat, serta menjadi acuan
            dalam perencanaan pengembangan fasilitas pendidikan di wilayah kelurahan.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            {/* SVG DONUT CHART */}
            <div className="relative w-64 h-64">
              <DonutChart data={statsData} total={totalSchools} />
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-[#124076]">{totalSchools}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Total Sekolah</span>
              </div>
            </div>

            {/* LEGEND / TABLE MINI */}
            <div className="w-full md:w-auto">
              <table className="w-full text-sm text-left">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="py-2 pr-10 font-semibold text-gray-700">Data Sekolah</th>
                    <th className="py-2 font-semibold text-gray-700 text-right">Jumlah</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {statsData.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 flex items-center gap-3 text-gray-600">
                        <span 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></span>
                        {item.label}
                      </td>
                      <td className="py-3 text-right font-medium text-gray-900">
                        {item.count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 2: TABEL DAFTAR SEKOLAH */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 overflow-hidden">
          <h2 className="text-xl md:text-2xl font-bold text-[#124076] mb-6">
            Daftar Sekolah di Wilayah Kelurahan Lenteng Agung
          </h2>
          
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left text-gray-600 min-w-[800px]">
              <thead className="bg-[#124076] text-white text-xs uppercase font-semibold">
                <tr>
                  <th className="px-4 py-4 w-12 text-center">No</th>
                  <th className="px-4 py-4">Nama Sekolah</th>
                  <th className="px-4 py-4">Alamat</th>
                  <th className="px-4 py-4">Jenjang</th>
                  <th className="px-4 py-4">No. Telepon</th>
                  <th className="px-4 py-4">Kepala Sekolah / Rektor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {schoolList.map((school, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-center font-medium">{school.no}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{school.name}</td>
                    <td className="px-4 py-3">{school.address}</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-semibold border border-blue-100">
                        {school.level}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{school.phone}</td>
                    <td className="px-4 py-3 text-gray-900">{school.head}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Dummy */}
          <div className="mt-6 flex justify-end gap-2 text-sm">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 border rounded bg-[#124076] text-white">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
          </div>
        </section>

      </div>
    </main>
  );
}

// --- KOMPONEN SVG DONUT CHART ---
function DonutChart({ data, total }) {
  let cumulativePercent = 0;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
      {data.map((item, index) => {
        const percent = item.count / total;
        const circumference = 2 * Math.PI * 40; // r=40
        const strokeDasharray = `${percent * circumference} ${circumference}`;
        const strokeDashoffset = -cumulativePercent * circumference;
        
        cumulativePercent += percent;

        return (
          <circle
            key={index}
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke={item.color}
            strokeWidth="12" // Ketebalan donut
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500 hover:opacity-80"
          />
        );
      })}
    </svg>
  );
}