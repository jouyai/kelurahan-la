import React from "react";
import { Link } from "react-router-dom";
import { ClockIcon, MapIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* BREADCRUMB SECTION (PENGGANTI HERO) */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 mb-8">
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Sejarah</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Judul & Deskripsi Singkat */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Sejarah Lenteng Agung
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Menelusuri jejak masa lalu dan asal-usul nama Kelurahan Lenteng Agung 
            sebagai bagian dari warisan budaya Betawi di Jakarta Selatan.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* LEFT: CONTENT TEXT */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed text-justify">
              
              <div>
                <h3 className="text-xl font-bold text-[#124076] mb-3 flex items-center gap-2">
                  <MapIcon className="h-6 w-6 text-[#06452F]" />
                  Asal Usul Nama
                </h3>
                <p>
                  Nama <strong>"Lenteng Agung"</strong> dipercaya berasal dari kata <em>"Klenteng"</em> dan <em>"Agung"</em>. 
                  Konon pada masa lampau, di wilayah ini terdapat sebuah bangunan klenteng yang cukup besar dan megah 
                  di tepi sungai Ciliwung, yang menjadi penanda kawasan tersebut. Seiring berjalannya waktu dan 
                  dialek masyarakat setempat, penyebutan kawasan ini menjadi Lenteng Agung.
                </p>
                <p className="mt-3">
                  Versi lain menyebutkan bahwa nama ini berkaitan dengan karakter masyarakat Betawi di kawasan ini 
                  yang religius namun tetap menjunjung tinggi toleransi (Agung), serta letak geografisnya yang 
                  seperti melenteng (berkelok) mengikuti aliran sungai.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-xl font-bold text-[#124076] mb-3 flex items-center gap-2">
                  <ClockIcon className="h-6 w-6 text-[#06452F]" />
                  Perkembangan Wilayah
                </h3>
                <p>
                  Dahulu, kawasan Lenteng Agung merupakan daerah perkebunan buah-buahan dan pertanian yang asri. 
                  Banyak terdapat pohon buah-buahan khas Betawi seperti kecapi, buni, dan salak condet yang tumbuh subur.
                </p>
                <p className="mt-3">
                  Seiring perkembangan kota Jakarta menjadi metropolitan, Lenteng Agung bertransformasi menjadi 
                  kawasan penyangga hunian yang strategis. Pembangunan Universitas Indonesia (UI) dan Universitas Pancasila 
                  di dekat wilayah ini turut mempercepat pertumbuhan ekonomi dan demografi di Kelurahan Lenteng Agung.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-xl font-bold text-[#124076] mb-3 flex items-center gap-2">
                  <BuildingLibraryIcon className="h-6 w-6 text-[#06452F]" />
                  Masa Kini
                </h3>
                <p>
                  Saat ini, Kelurahan Lenteng Agung merupakan salah satu kelurahan di Kecamatan Jagakarsa, 
                  Jakarta Selatan, yang memiliki perpaduan unik antara suasana perkotaan modern dan 
                  kearifan lokal budaya Betawi yang masih kental.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-5">
                <img 
                  src="/about_kel.png" 
                  alt="Kantor Kelurahan Lama" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-medium">Arsip: Suasana Lenteng Agung Tempo Dulu</span>
                </div>
              </div>

              <h4 className="font-bold text-[#124076] mb-3">Fakta Singkat</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span>Tahun Pembentukan</span>
                  <span className="font-semibold text-gray-800">-</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span>Kecamatan</span>
                  <span className="font-semibold text-gray-800">Jagakarsa</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span>Kota Administrasi</span>
                  <span className="font-semibold text-gray-800">Jakarta Selatan</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span>Julukan</span>
                  <span className="font-semibold text-gray-800">Kampung Betawi</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}