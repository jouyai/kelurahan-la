import React from "react";
import { Link } from "react-router-dom";
import { StarIcon, CheckCircleIcon, TrophyIcon } from "@heroicons/react/24/solid";

export default function VisiMisiPage() {
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Visi & Misi</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Judul & Deskripsi Singkat */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Visi dan Misi
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Arah dan tujuan pembangunan Kelurahan Lenteng Agung untuk mewujudkan 
            masyarakat yang sejahtera, berbudaya, dan lingkungan yang asri.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* VISI CARD (Full Width on Mobile, 2/3 on Desktop) */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <StarIcon className="h-32 w-32 text-[#124076]" />
              </div>
              <h2 className="text-2xl font-bold text-[#124076] mb-4 flex items-center gap-2 relative z-10">
                <StarIcon className="h-8 w-8 text-yellow-500" />
                Visi
              </h2>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic border-l-4 border-yellow-500 pl-4 relative z-10">
                "Terwujudnya Kelurahan Lenteng Agung yang Maju, Lestari, dan Berbudaya dalam Lingkungan yang Asri dan Religius."
              </blockquote>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#124076] mb-6 flex items-center gap-2">
                <TrophyIcon className="h-8 w-8 text-[#06452F]" />
                Misi
              </h2>
              <ul className="space-y-4">
                {[
                  "Meningkatkan kualitas pelayanan publik yang transparan, akuntabel, dan berbasis teknologi informasi.",
                  "Mewujudkan lingkungan pemukiman yang bersih, hijau, dan sehat melalui pemberdayaan masyarakat.",
                  "Meningkatkan kesejahteraan masyarakat melalui pengembangan ekonomi kreatif dan UMKM lokal.",
                  "Melestarikan nilai-nilai budaya Betawi dan kearifan lokal di tengah modernisasi perkotaan.",
                  "Menciptakan kerukunan antar warga yang harmonis, aman, dan religius."
                ].map((misi, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 shrink-0 group-hover:scale-110 transition-transform mt-0.5" />
                    <span className="text-gray-700 text-base leading-relaxed">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SIDEBAR (Moto & Nilai) */}
          <div className="md:col-span-1">
            <div className="bg-[#124076] rounded-xl p-6 text-white shadow-lg sticky top-24">
              <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">
                Motto Pelayanan
              </h3>
              <div className="text-center py-4">
                <p className="text-3xl font-extrabold tracking-wide mb-2">
                  "CEPAT & TEPAT"
                </p>
                <p className="text-sm text-blue-200">
                  Cermat, Empati, Profesional, Akuntabel, Transparan
                </p>
              </div>

              <h3 className="text-lg font-bold mt-8 mb-4 border-b border-white/20 pb-2">
                Nilai Organisasi
              </h3>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Integritas Tinggi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Orientasi Pelayanan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Kerjasama Tim
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}