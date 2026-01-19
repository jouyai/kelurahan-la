import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheckIcon, 
  TrashIcon, 
  HomeModernIcon, 
  ClipboardDocumentCheckIcon, 
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/solid";

// Data Edukasi 3M Plus
const steps3M = [
  {
    title: "Menguras",
    desc: "Membersihkan tempat penampungan air seperti bak mandi, ember, dan toren air minimal seminggu sekali.",
    icon: HomeModernIcon,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Menutup",
    desc: "Menutup rapat-rapat tempat penampungan air agar nyamuk tidak bisa masuk dan bertelur.",
    icon: ShieldCheckIcon,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Mendaur Ulang",
    desc: "Memanfaatkan kembali atau mendaur ulang barang bekas yang berpotensi menampung air hujan.",
    icon: TrashIcon,
    color: "bg-orange-100 text-orange-600"
  }
];

// Data Jadwal Jumling (Jumat Keliling)
const scheduleJumling = [
  { rw: "RW 01", location: "RT 01 - RT 05", team: "Kader Dawis Anggrek" },
  { rw: "RW 02", location: "RT 03 - RT 08", team: "Kader Dawis Melati" },
  { rw: "RW 03", location: "Seluruh RT", team: "Kader Dawis Mawar" },
  { rw: "RW 04", location: "RT 01 - RT 04", team: "Kader Dawis Kenanga" },
];

export default function JumantikPage({ onConnectStaff }) {
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
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-gray-500 md:ml-2">Informasi</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Jumantik</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Gerakan Satu Rumah Satu Jumantik
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Upaya pemberdayaan masyarakat untuk memantau jentik nyamuk secara mandiri 
            di lingkungan rumah masing-masing guna mencegah Demam Berdarah Dengue (DBD).
          </p>
        </div>
      </div>

      {/* === CONTENT SECTION === */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: MAIN CONTENT */}
          <div className="w-full lg:w-2/3">
            
            {/* Intro Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8 flex items-start gap-4">
              <div className="bg-[#06452F]/10 p-3 rounded-lg hidden sm:block">
                <ClipboardDocumentCheckIcon className="h-8 w-8 text-[#06452F]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Apa itu Jumantik Mandiri?</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  Jumantik (Juru Pemantau Jentik) adalah warga yang secara sukarela memantau keberadaan jentik nyamuk 
                  di lingkungannya. Melalui gerakan <strong>Satu Rumah Satu Jumantik (G1R1J)</strong>, setiap rumah tangga 
                  diharapkan menunjuk satu anggota keluarga untuk menjadi Jumantik di rumahnya sendiri dan melakukan 
                  pemeriksaan minimal seminggu sekali.
                </p>
              </div>
            </div>

            {/* 3M Plus Section */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-[#06452F]" />
                Langkah Pencegahan 3M Plus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {steps3M.map((step, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${step.color} bg-opacity-20`}>
                      <step.icon className={`h-6 w-6 ${step.color.split(" ")[1]}`} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* Plus List */}
              <div className="mt-4 bg-[#E5F2EF] p-4 rounded-xl border border-[#06452F]/10">
                <h5 className="font-bold text-[#06452F] text-sm mb-2">Kegiatan "Plus" Lainnya:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-[#06452F]"/> Memelihara ikan pemakan jentik</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-[#06452F]"/> Menggunakan obat anti nyamuk</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-[#06452F]"/> Memasang kawat kasa pada jendela</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-[#06452F]"/> Gotong royong membersihkan lingkungan</li>
                </ul>
              </div>
            </div>

            {/* Jadwal Jumling */}
            <div>
              <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
                <CalendarDaysIcon className="h-5 w-5 text-[#06452F]" />
                Jadwal Jumat Keliling (Jumling)
              </h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-700 font-bold border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3">Wilayah</th>
                      <th className="px-6 py-3">Lokasi Fokus</th>
                      <th className="px-6 py-3">Tim Petugas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {scheduleJumling.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-800">{item.rw}</td>
                        <td className="px-6 py-4 text-gray-600">{item.location}</td>
                        <td className="px-6 py-4 text-gray-600">{item.team}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 italic">*Jadwal dilaksanakan setiap hari Jumat pagi pukul 08.00 WIB s/d Selesai.</p>
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Widget: Status DBD */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 flex items-center gap-2">
                <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />
                Status Kewaspadaan
              </h4>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center mb-4">
                <span className="block text-xs text-green-800 font-bold uppercase tracking-wider mb-1">Status Kelurahan</span>
                <span className="text-2xl font-extrabold text-green-600">AMAN</span>
                <p className="text-[10px] text-green-700 mt-1">Tidak ada kasus DBD aktif minggu ini.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-600 border-b border-gray-50 pb-2">
                  <span>Angka Bebas Jentik (ABJ)</span>
                  <span className="font-bold text-[#06452F]">92%</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600 border-b border-gray-50 pb-2">
                  <span>Target ABJ Nasional</span>
                  <span className="font-bold text-gray-800">≥ 95%</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
                  <h5 className="font-bold text-red-800 text-sm mb-1">Ada Kasus DBD?</h5>
                  <p className="text-xs text-red-700 mb-3">
                    Segera laporkan jika ada warga yang terjangkit DBD untuk tindakan *fogging*.
                  </p>
                  <button
                    onClick={() => onConnectStaff && onConnectStaff("Lapor Kasus DBD")}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2 text-sm font-bold text-white hover:bg-red-700 transition-colors shadow-sm"
                  >
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    Lapor Sekarang
                  </button>
                </div>
              </div>
            </div>
            
            {/* Widget: Download Kartu */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <h4 className="font-bold text-gray-800 mb-2 text-sm">Kartu Kontrol Jentik</h4>
               <p className="text-xs text-gray-500 mb-4">
                 Unduh kartu pemantauan jentik mandiri untuk ditempel di rumah.
               </p>
               <button className="w-full py-2 border border-gray-300 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                 Download PDF
               </button>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}