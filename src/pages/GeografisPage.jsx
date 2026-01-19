import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, MapIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";

export default function GeografisPage() {
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Geografis</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Judul & Deskripsi Singkat */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Kondisi Geografis & Wilayah
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Gambaran letak, batas wilayah, dan peta administrasi Kelurahan Lenteng Agung 
            sebagai bagian dari Kecamatan Jagakarsa, Jakarta Selatan.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* LEFT: TEXT CONTENT & DATA */}
          <div className="w-full md:w-2/3 space-y-8">
            
            {/* Batas Wilayah */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#124076] mb-4 flex items-center gap-2">
                <MapPinIcon className="h-6 w-6 text-[#06452F]" />
                Batas Wilayah
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Utara</span>
                  <p className="font-semibold text-gray-800 mt-1">Kelurahan Tanjung Barat</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Selatan</span>
                  <p className="font-semibold text-gray-800 mt-1">Kelurahan Srengseng Sawah</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Timur</span>
                  <p className="font-semibold text-gray-800 mt-1">Sungai Ciliwung (Batas Jakarta Timur)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Barat</span>
                  <p className="font-semibold text-gray-800 mt-1">Kelurahan Jagakarsa</p>
                </div>
              </div>
            </div>

            {/* Deskripsi Wilayah */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-justify text-gray-700 leading-relaxed">
              <h3 className="text-xl font-bold text-[#124076] mb-3 flex items-center gap-2">
                <GlobeAsiaAustraliaIcon className="h-6 w-6 text-[#06452F]" />
                Karakteristik Wilayah
              </h3>
              <p className="mb-4">
                Kelurahan Lenteng Agung memiliki luas wilayah sekitar <strong>228,8 Hektar</strong>. 
                Secara topografi, wilayah ini memiliki kontur tanah yang cukup bervariasi, 
                dengan beberapa area yang landai dan beberapa area yang dekat dengan bantaran sungai Ciliwung.
              </p>
              <p>
                Wilayah ini juga strategis karena dilintasi oleh jalur kereta api (KRL Commuter Line) 
                dengan adanya Stasiun Lenteng Agung dan Stasiun Universitas Pancasila, yang memudahkan 
                mobilitas warga menuju pusat kota Jakarta maupun ke arah Depok/Bogor.
              </p>
            </div>

          </div>

          {/* RIGHT: MAPS / VISUALS */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 flex items-center gap-2">
                <MapIcon className="h-5 w-5" />
                Peta Administrasi
              </h4>
              
              {/* Peta 1 */}
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm mb-2 group cursor-pointer">
                  <img 
                    src="/peta1.png" 
                    alt="Peta Wilayah 1" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-center text-gray-500 italic">Peta Batas RW</p>
              </div>

              {/* Peta 2 */}
              <div>
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm mb-2 group cursor-pointer">
                  <img 
                    src="/peta2.png" 
                    alt="Peta Wilayah 2" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-center text-gray-500 italic">Peta Fasilitas Umum</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="w-full py-2 text-sm text-[#06452F] font-bold border border-[#06452F] rounded-lg hover:bg-[#06452F] hover:text-white transition-colors">
                  Unduh Peta Digital (PDF)
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}