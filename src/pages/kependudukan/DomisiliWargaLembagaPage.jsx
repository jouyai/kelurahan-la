// src/pages/kependudukan/DomisiliWargaLembagaPage.jsx
import React from "react";

export default function DomisiliWargaLembagaPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      {/* HERO */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Pelayanan Kependudukan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Pelayanan Kependudukan
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-[#124076] mb-6 text-center">
            Domisili Warga & Lembaga
          </h2>

          {/* DOMISILI PENDUDUK */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">
              • Pencatatan Register Surat Keterangan Domisili Penduduk
            </h3>
            <p className="text-sm mb-2">
              Berikut merupakan persyaratan yang harus dilengkapi dalam pengajuan
              permohonan:
            </p>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Surat pengantar RT/RW</li>
              <li>
                Fotocopy KTP Pemohon (Pemohon adalah Warga Kelurahan yang
                mengeluarkan Surat Keterangan Domisili Penduduk)
              </li>
              <li>Fotocopy Kartu Keluarga Pemohon</li>
              <li>Surat kuasa dan FC KTP yang diberi kuasa</li>
              <li>
                SKDS (Surat Keterangan Domisili Sementara dari RT/RW) bagi
                Pemohon dengan KTP di luar Kelurahan Setempat
              </li>
            </ol>
          </div>

          {/* RUMAH IBADAH */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">
              • Pencatatan Register Surat Keterangan Domisili Rumah Ibadah
            </h3>
            <p className="text-sm mb-2">
              Berikut merupakan persyaratan yang harus dilengkapi dalam pengajuan
              permohonan:
            </p>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Surat pengantar RT/RW</li>
              <li>Fotocopy KTP dan KK Pemohon</li>
              <li>Surat Tanah / Akta Wakaf</li>
              <li>
                FC SK Pengurus Rumah Ibadah (SK dengan KOP Surat)
              </li>
              <li>Surat Kuasa dan FC KTP yang diberi Kuasa</li>
            </ol>
          </div>

          {/* YAYASAN / ORGANISASI */}
          <div>
            <h3 className="font-semibold mb-2">
              • Pencatatan Register Surat Keterangan Domisili Yayasan /
              Instansi / Organisasi
            </h3>
            <p className="text-sm mb-2">
              Berikut merupakan persyaratan yang harus dilengkapi dalam pengajuan
              permohonan:
            </p>
            <ol className="list-decimal ml-5 space-y-1 text-sm">
              <li>Surat pengantar RT/RW</li>
              <li>
                Fotocopy KTP Pemohon (Pemohon adalah Warga Kelurahan yang
                mengeluarkan Surat Keterangan Domisili Penduduk)
              </li>
              <li>Fotocopy Kartu Keluarga Pemohon</li>
              <li>Surat kuasa dan FC KTP yang diberi kuasa</li>
              <li>
                Daftar Susunan Pengurus beserta KTP dan KK Pengurus
              </li>
              <li>
                SKDS (Surat Keterangan Domisili Sementara dari RT/RW) bagi
                Pemohon dengan KTP di luar Kelurahan Setempat
              </li>
              <li>Akte Pendirian beserta AD / ART</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
