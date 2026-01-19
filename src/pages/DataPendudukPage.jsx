import React from "react";
import { Link } from "react-router-dom";
import { 
  UsersIcon, 
  UserIcon, 
  HomeIcon, 
  ChartBarIcon, 
  ArrowTrendingUpIcon
} from "@heroicons/react/24/solid";

const stats = [
  { label: "Total Penduduk", value: "45.231", icon: UsersIcon, color: "bg-blue-500" },
  { label: "Laki-laki", value: "22.850", icon: UserIcon, color: "bg-cyan-500" },
  { label: "Perempuan", value: "22.381", icon: UserIcon, color: "bg-pink-500" },
  { label: "Kepala Keluarga", value: "12.405", icon: HomeIcon, color: "bg-orange-500" },
];

const rwData = [
  { rw: "RW 01", count: 4230, percent: "9.3%" },
  { rw: "RW 02", count: 3850, percent: "8.5%" },
  { rw: "RW 03", count: 5120, percent: "11.3%" },
  { rw: "RW 04", count: 4600, percent: "10.1%" },
  { rw: "RW 05", count: 3900, percent: "8.6%" },
  { rw: "RW 06", count: 4100, percent: "9.0%" },
  { rw: "RW 07", count: 4800, percent: "10.6%" },
  { rw: "RW 08", count: 5300, percent: "11.7%" },
  { rw: "RW 09", count: 4500, percent: "9.9%" },
  { rw: "RW 10", count: 4831, percent: "10.7%" },
];

export default function DataPendudukPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* BREADCRUMB SECTION (PENGGANTI HERO) */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-8">
        {/* Navigasi Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-[#06452F] hover:underline flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-gray-500 md:ml-2">Profil Kelurahan</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Data Penduduk</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Judul & Deskripsi */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Data Kependudukan
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Informasi statistik demografi warga Kelurahan Lenteng Agung yang mencakup 
            jumlah penduduk, persebaran per-RW, dan komposisi berdasarkan jenis kelamin.
          </p>
          <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            Update Terakhir: Desember 2023 (Sumber: Dukcapil)
          </p>
        </div>
      </div>

      {/* STATS CARDS SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-all">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                <stat.icon className={`h-6 w-6 text-${stat.color.split('-')[1]}-600`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: CHART / TABLE */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-[#124076] text-lg flex items-center gap-2">
                  <ChartBarIcon className="h-5 w-5" />
                  Persebaran Penduduk per RW
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {rwData.map((data, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{data.rw}</span>
                        <span className="text-gray-500">{data.count} Jiwa ({data.percent})</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div 
                          className="bg-[#06452F] h-2.5 rounded-full" 
                          style={{ width: data.percent }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INFO SIDEBAR */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Info Box 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#124076] mb-3">Kepadatan Penduduk</h4>
              <p className="text-sm text-gray-600 mb-4 text-justify leading-relaxed">
                Kelurahan Lenteng Agung memiliki tingkat kepadatan penduduk yang cukup tinggi, 
                terutama di wilayah sekitar stasiun dan jalan protokol. Program penataan kawasan 
                terus dilakukan untuk menjaga kenyamanan hunian.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs text-blue-800 font-semibold">
                  Luas Wilayah: 228,8 Hektar
                </p>
              </div>
            </div>

            {/* Info Box 2 */}
            <div className="bg-[#124076] rounded-xl p-6 text-white shadow-lg">
              <h4 className="font-bold mb-2">Layanan Kependudukan</h4>
              <p className="text-sm text-blue-100 mb-4">
                Butuh mengurus dokumen kependudukan? Gunakan layanan online atau datang ke kantor kelurahan.
              </p>
              <Link 
                to="/layanan/kependudukan" 
                className="block w-full text-center bg-white text-[#124076] font-bold py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                Lihat Layanan
              </Link>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}