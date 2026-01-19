import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, UserGroupIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

const pejabat = [
  {
    nama: "H. Ahmad Fauzi, S.Sos",
    jabatan: "Lurah",
    nip: "19750505 200003 1 005",
    color: "bg-blue-100 text-blue-700",
  },
  {
    nama: "Dra. Siti Aminah",
    jabatan: "Sekretaris Kelurahan",
    nip: "19800212 200501 2 009",
    color: "bg-green-100 text-green-700",
  },
  {
    nama: "Budi Santoso, SE",
    jabatan: "Kasi Pemerintahan",
    nip: "19820718 200801 1 012",
    color: "bg-orange-100 text-orange-700",
  },
  {
    nama: "Ratna Sari, S.KM",
    jabatan: "Kasi Kesejahteraan Rakyat",
    nip: "19850920 201001 2 008",
    color: "bg-purple-100 text-purple-700",
  },
  {
    nama: "Ir. Joko Prasetyo",
    jabatan: "Kasi Ekonomi & Pembangunan",
    nip: "19781105 200312 1 004",
    color: "bg-red-100 text-red-700",
  },
];

export default function StrukturOrganisasiPage() {
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Struktur Organisasi</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Judul & Deskripsi Singkat */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Struktur Organisasi
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Bagan susunan organisasi dan daftar pejabat struktural di lingkungan 
            Kelurahan Lenteng Agung untuk memastikan pelayanan publik berjalan optimal.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col gap-8">
          
          {/* BAGAN STRUKTUR (IMAGE) */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#124076] mb-6 flex items-center gap-2">
              <UserGroupIcon className="h-6 w-6 text-[#06452F]" />
              Bagan Struktur
            </h3>
            <div className="w-full bg-gray-50 rounded-lg border border-gray-100 p-2 md:p-8 flex justify-center items-center overflow-hidden">
              <img 
                src="/struktur_kel.png" 
                alt="Bagan Struktur Organisasi" 
                className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-zoom-in"
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-4 italic">
              *Klik gambar untuk memperbesar tampilan
            </p>
          </div>

          {/* DAFTAR PEJABAT (CARDS) */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#124076] mb-6 flex items-center gap-2">
              <BuildingOfficeIcon className="h-6 w-6 text-[#06452F]" />
              Pejabat Struktural
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pejabat.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1">{item.nama}</h4>
                    <p className="text-sm font-semibold text-[#124076] mb-1">{item.jabatan}</p>
                    <p className="text-xs text-gray-500">NIP: {item.nip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}