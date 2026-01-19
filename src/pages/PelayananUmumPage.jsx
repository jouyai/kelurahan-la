import React from "react";
import { Link } from "react-router-dom";
import { 
  BriefcaseIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  MegaphoneIcon, 
  CheckBadgeIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/solid";

// Daftar Layanan Umum
const services = [
  {
    id: 1,
    title: "Surat Keterangan Usaha (SKU)",
    desc: "Dokumen pengantar untuk legalitas usaha mikro/kecil (UMKM) atau keperluan perbankan.",
    link: "/layanan/umum/pekerjaan-usaha", // Route yang sudah ada sebelumnya
    icon: BriefcaseIcon,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Surat Keterangan Tidak Mampu (SKTM)",
    desc: "Pengurusan surat keterangan kondisi ekonomi untuk keperluan sekolah, BPJS, atau bantuan sosial.",
    link: "#", // Bisa diarahkan ke page detail atau chat
    icon: HeartIcon,
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 3,
    title: "Pengantar SKCK",
    desc: "Surat pengantar kelurahan untuk pembuatan Surat Keterangan Catatan Kepolisian (Polsek/Polres).",
    link: "#",
    icon: ShieldCheckIcon,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    title: "Izin Keramaian",
    desc: "Surat pengantar izin keramaian untuk acara pernikahan, khitanan, atau kegiatan warga lainnya.",
    link: "#",
    icon: MegaphoneIcon,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    title: "Domisili Usaha / Lembaga",
    desc: "Keterangan domisili untuk operasional yayasan, lembaga, atau badan usaha di wilayah kelurahan.",
    link: "#",
    icon: BuildingStorefrontIcon,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 6,
    title: "Legalisir Dokumen",
    desc: "Layanan legalisir surat-surat yang dikeluarkan oleh pihak Kelurahan/Kecamatan.",
    link: "#",
    icon: CheckBadgeIcon,
    color: "bg-gray-100 text-gray-700",
  },
];

export default function PelayananUmumPage({ onConnectStaff }) {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* BREADCRUMB SECTION */}
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
                <span className="ml-1 text-gray-500 md:ml-2">Layanan Publik</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Pelayanan Umum</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Pelayanan Umum & Kemasyarakatan
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Berbagai layanan administrasi penunjang kebutuhan masyarakat, 
            mulai dari urusan usaha, sosial, hingga perizinan kegiatan warga.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: SERVICE GRID */}
          <div className="w-full lg:w-2/3">
            <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
              <ClipboardDocumentCheckIcon className="h-5 w-5 text-[#06452F]" />
              Daftar Layanan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all group flex flex-col hover:-translate-y-1 duration-300 relative"
                >
                  <Link to={item.link} className="absolute inset-0 z-10" />
                  
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} bg-opacity-20`}>
                    <item.icon className={`h-6 w-6 ${item.color.split(" ")[1]}`} />
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-[#124076] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center text-[#06452F] text-sm font-semibold mt-auto">
                    Lihat Detail
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Persyaratan Umum Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5" />
                Prosedur Pengajuan
              </h4>
              
              <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <h5 className="text-sm font-semibold text-gray-900">Pengantar RT/RW</h5>
                  <p className="text-xs text-gray-500 mt-1">Dapatkan surat pengantar dari pengurus lingkungan setempat.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <h5 className="text-sm font-semibold text-gray-900">Verifikasi Berkas</h5>
                  <p className="text-xs text-gray-500 mt-1">Petugas PTSP Kelurahan akan memeriksa kelengkapan dokumen.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-[#06452F] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <h5 className="text-sm font-semibold text-gray-900">Penerbitan Surat</h5>
                  <p className="text-xs text-gray-500 mt-1">Surat ditandatangani Lurah dan siap diambil (1-3 Hari Kerja).</p>
                </li>
              </ol>

              {/* Call to Action Chat */}
              <div className="mt-8 bg-[#E5F2EF] rounded-lg p-5 text-center border border-[#06452F]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#06452F] mx-auto mb-2" />
                <h5 className="font-bold text-[#06452F] text-sm mb-1">Butuh Bantuan Cepat?</h5>
                <p className="text-xs text-gray-600 mb-4">
                  Hubungi petugas untuk konsultasi syarat pembuatan SKU, SKTM, dll.
                </p>
                <button
                  type="button"
                  onClick={() => onConnectStaff("Pelayanan Umum")}
                  className="w-full rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm cursor-pointer"
                >
                  Hubungi Staff Pelayanan
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}