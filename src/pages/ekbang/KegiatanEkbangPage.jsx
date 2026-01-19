import React from "react";
import { Link } from "react-router-dom";
import { 
  BuildingOfficeIcon, 
  WrenchScrewdriverIcon, 
  TruckIcon, 
  PresentationChartLineIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/solid";

// Dummy Data Kegiatan Ekbang
const kegiatanEkbang = [
  {
    id: 1,
    title: "Musrenbang (Perencanaan Pembangunan)",
    desc: "Forum tahunan musyawarah warga untuk menyepakati Rencana Kerja Pembangunan Daerah (RKPD) tahun anggaran berikutnya.",
    kategori: "Perencanaan",
    status: "Tahunan",
    icon: PresentationChartLineIcon,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Penataan Kawasan Unggulan (PKU)",
    desc: "Program penataan titik kumuh atau lahan tidur menjadi taman, spot hijau, atau area interaksi warga yang asri dan rapi.",
    kategori: "Lingkungan",
    status: "Triwulan",
    icon: MapIcon,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "Pasukan Oranye (PPSU) Bergerak",
    desc: "Penanganan prasarana dan sarana umum harian: pembersihan saluran air, perbaikan jalan berlubang, dan penopingan pohon.",
    kategori: "Infrastruktur",
    status: "Harian",
    icon: TruckIcon,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    title: "Pendampingan UMKM (JakPreneur)",
    desc: "Pelatihan, pendampingan izin usaha (NIB), dan fasilitasi pemasaran bagi pelaku usaha mikro di wilayah kelurahan.",
    kategori: "Ekonomi",
    status: "Berkelanjutan",
    icon: BuildingOfficeIcon,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    title: "Kerja Bakti Massal Lingkungan",
    desc: "Kegiatan gotong royong membersihkan lingkungan RW, gerebek sampah, dan pemberantasan sarang nyamuk (PSN).",
    kategori: "Kebersihan",
    status: "Minggu Pagi",
    icon: WrenchScrewdriverIcon,
    color: "bg-red-100 text-red-700",
  },
];

export default function KegiatanEkbangPage({ onConnectStaff }) {
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
                <span className="ml-1 text-gray-500 md:ml-2">Program Kerja</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Kegiatan Ekbang</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Ekonomi & Pembangunan
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Program strategis pembangunan fisik, pemeliharaan lingkungan, 
            serta pemberdayaan ekonomi masyarakat di wilayah Kelurahan Lenteng Agung.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: ACTIVITY LIST */}
          <div className="w-full lg:w-2/3">
            <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
              <PresentationChartLineIcon className="h-5 w-5 text-[#06452F]" />
              Program Unggulan
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {kegiatanEkbang.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row gap-5"
                >
                  {/* Icon Box */}
                  <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${item.color} bg-opacity-20 group-hover:scale-105 transition-transform`}>
                    <item.icon className={`h-8 w-8 ${item.color.split(" ")[1]}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800 text-lg group-hover:text-[#124076] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider bg-gray-50 text-gray-600 border border-gray-100">
                        {item.kategori}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs font-medium text-[#124076] bg-blue-50 w-fit px-3 py-1.5 rounded-lg border border-blue-100">
                      <span className="text-gray-500 font-normal">Frekuensi:</span>
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Info Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 flex items-center gap-2">
                <ExclamationCircleIcon className="h-5 w-5" />
                Layanan Aduan Fisik
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed text-justify">
                Warga dapat melaporkan kerusakan fasilitas umum (jalan berlubang, saluran mampet, pohon tumbang, lampu jalan mati) 
                agar segera ditindaklanjuti oleh petugas PPSU atau dinas terkait.
              </p>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-6">
                <h5 className="font-bold text-orange-800 text-xs uppercase tracking-wide mb-2">
                  Yang bisa dilaporkan:
                </h5>
                <ul className="list-disc ml-4 text-xs text-orange-700 space-y-1">
                  <li>Genangan / Banjir.</li>
                  <li>Sampah menumpuk liar.</li>
                  <li>Pohon rawan tumbang.</li>
                  <li>Jalan lingkungan rusak.</li>
                </ul>
              </div>

              {/* Call to Action Chat */}
              <div className="mt-6 bg-[#E5F2EF] rounded-lg p-5 text-center border border-[#06452F]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#06452F] mx-auto mb-2" />
                <h5 className="font-bold text-[#06452F] text-sm mb-1">Ada Kerusakan Lingkungan?</h5>
                <p className="text-xs text-gray-600 mb-4">
                  Foto dan laporkan lokasi kerusakan kepada kami sekarang juga.
                </p>
                <button
                  type="button"
                  onClick={() => onConnectStaff("Lapor Kerusakan Fisik (PPSU)")}
                  className="w-full rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm cursor-pointer"
                >
                  Lapor via Chat
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}