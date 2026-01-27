import React from 'react';
import { Link } from 'react-router-dom';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- ICONS ---
import {
  Briefcase,
  ChevronRight,
  Loader2,
  ArrowLeft,
  Network,
  Users
} from 'lucide-react';
import { useData } from '../../hooks/useContent';

const StrukturOrganisasiPage = () => {
  const { data: staffList, loading } = useData('staff');

  const isLoading = loading;

  // Data Dummy Pejabat Fallback
  const officials = staffList.length > 0 ? staffList.map(s => ({
    role: s.position,
    name: s.name,
    nip: s.nip || "NIP Belum Tersedia",
    desc: s.description || "",
    color: s.color || "bg-slate-600",
    image: s.image_url
  })) : [
    {
      role: "Lurah",
      name: "H. Ahmad Syafi'i, S.Sos",
      nip: "19750812 200003 1 004",
      desc: "Penanggung jawab utama pemerintahan kelurahan.",
      color: "bg-[#0B3D2E]"
    },
    {
      role: "Sekretaris Kelurahan",
      name: "Budi Santoso, S.IP",
      nip: "19800520 200501 1 009",
      desc: "Koordinator administrasi dan pelayanan umum.",
      color: "bg-amber-600"
    },
    {
      role: "Kasi Pemerintahan",
      name: "Siti Aminah, SH",
      nip: "19821105 200801 2 015",
      desc: "Urusan pertanahan, ketertiban, dan kependudukan.",
      color: "bg-slate-600"
    },
    {
      role: "Kasi Ekonomi & Pembangunan",
      name: "Ir. Dedi Kurniawan",
      nip: "19780315 200604 1 002",
      desc: "Urusan pembangunan fisik dan lingkungan hidup.",
      color: "bg-slate-600"
    },
    {
      role: "Kasi Kesejahteraan Rakyat",
      name: "Rina Marlina, S.KM",
      nip: "19850910 201001 2 008",
      desc: "Urusan kesehatan, pendidikan, dan sosial.",
      color: "bg-slate-600"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-[#0B3D2E] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">

      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Profil Kelurahan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Struktur Kelurahan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Mengenal jajaran pimpinan dan staf yang berdedikasi melayani masyarakat Kelurahan Lenteng Agung.
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </Link>
        </Button>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* BAGAN VISUAL */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-[#0B3D2E]/10 rounded-full mb-4">
            <Network className="w-8 h-8 text-[#0B3D2E]" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Bagan Struktur Kelurahan</h2>

          <div className="relative overflow-hidden rounded-xl border-2 border-slate-100 bg-slate-50">
            {/* Ganti src dengan gambar struktur_kel.png yang ada di folder public */}
            <img
              src="/struktur_kel.png"
              alt="Bagan Struktur Kelurahan"
              className="w-full h-auto object-contain mx-auto hover:scale-105 transition-transform duration-500 cursor-zoom-in"
              onError={(e) => {
                e.target.style.display = 'none'; // Sembunyikan jika error
                e.target.nextSibling.style.display = 'flex'; // Tampilkan fallback
              }}
            />
            {/* Fallback jika gambar tidak ada */}
            <div className="hidden h-96 w-full flex-col items-center justify-center text-slate-400 gap-4">
              <Users className="w-16 h-16 opacity-20" />
              <p>Gambar bagan struktur belum tersedia.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 italic">
            *Klik gambar untuk memperbesar tampilan bagan.
          </p>
        </section>

        {/* DAFTAR PEJABAT */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-amber-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900">Pejabat Struktural</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officials.map((official, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full ${official.color}`}></div>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-14 w-14 border-2 border-white shadow-sm bg-slate-100">
                    <AvatarImage src={official.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${official.name}`} />
                    <AvatarFallback className="bg-[#0B3D2E] text-white">
                      {official.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-bold text-slate-900 group-hover:text-[#0B3D2E] transition-colors">
                      {official.role}
                    </CardTitle>
                    <CardDescription className="text-xs font-mono mt-1 text-slate-500 bg-slate-100 px-2 py-0.5 rounded inline-block">
                      NIP. {official.nip}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="my-3" />
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">{official.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {official.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* TUPOKSI SINGKAT (Accordion Style Concept using Cards) */}
        <section className="bg-[#0B3D2E] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Tugas & Fungsi</h2>
              <p className="text-slate-200 text-lg leading-relaxed">
                Kelurahan bertugas menyelenggarakan urusan pemerintahan, pemberdayaan masyarakat, dan pemeliharaan ketentraman serta ketertiban umum.
              </p>
              <Button variant="secondary" className="bg-amber-500 text-[#0B3D2E] hover:bg-amber-400 font-bold" asChild>
                <Link to="/layanan/umum">
                  Lihat Layanan Kami <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Briefcase className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Pelaksanaan Pemerintahan</h4>
                  <p className="text-sm text-slate-300">Melaksanakan putusan tingkat kecamatan and kota serta pelayanan administrasi.</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex gap-4 items-start">
                <Users className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Pemberdayaan Masyarakat</h4>
                  <p className="text-sm text-slate-300">Mendorong partisipasi warga dalam pembangunan fisik and sosial.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
        </section>

      </div>
    </div>
  );
};

export default StrukturOrganisasiPage;