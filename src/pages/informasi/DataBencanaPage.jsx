import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import {
  ArrowLeft,
  AlertTriangle,
  LifeBuoy,
  Flame,
  Map,
  Phone,
  ShieldCheck,
  Megaphone,
  BarChart3,
  Waves,
  Trees,
  Loader2
} from "lucide-react";
import { usePageContent, useData } from "../../hooks/useContent";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Waves': return Waves;
    case 'Flame': return Flame;
    case 'Trees': return Trees;
    case 'AlertTriangle': return AlertTriangle;
    default: return AlertTriangle;
  }
};

export default function DataBencanaPage() {
  const { content: pageContent, loading: contentLoading } = usePageContent('bencana');
  const { data: dbStats, loading: statsLoading } = useData('items', { type: 'bencana_stats' });
  const { data: dbRecent, loading: recentLoading } = useData('items', { type: 'bencana_riwayat' });

  const isLoading = contentLoading || statsLoading || recentLoading;

  // Dummy Data Statistik Bencana Fallback
  const statsList = dbStats.length > 0 ? dbStats.map(s => ({
    label: s.title,
    value: s.description,
    icon: getIconComponent(s.data?.icon),
    color: s.data?.color || "bg-blue-100 text-blue-600"
  })) : [
    {
      label: "Kejadian Banjir",
      value: "12",
      icon: Waves,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Kebakaran",
      value: "3",
      icon: Flame,
      color: "bg-red-100 text-red-600",
    },
    {
      label: "Pohon Tumbang",
      value: "8",
      icon: Trees,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Tanah Longsor",
      value: "1",
      icon: AlertTriangle,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  // Data Riwayat Bencana Terbaru Fallback
  const recentDisastersList = dbRecent.length > 0 ? dbRecent.map(r => ({
    id: r.id,
    title: r.title,
    date: r.description,
    location: r.data?.location || "",
    status: r.data?.status || "Selesai",
    statusBadge: r.data?.statusBadge || "bg-green-100 text-green-700 border-green-200",
    desc: r.data?.desc || "",
    type: r.data?.type || "Bencana",
    typeBadge: r.data?.typeBadge || "bg-blue-50 text-blue-700 border-blue-100"
  })) : [
    {
      id: 1,
      title: "Siaga Banjir Kiriman (Katulampa)",
      date: "14 Januari 2026",
      location: "RW 01 & RW 03 (Bantaran Ciliwung)",
      status: "Waspada",
      statusBadge: "bg-amber-100 text-amber-700 border-amber-200",
      desc: "Kenaikan debit air Ciliwung menyebabkan genangan setinggi 30-50 cm di beberapa titik bantaran kali.",
      type: "Banjir",
      typeBadge: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      id: 2,
      title: "Pohon Tumbang Hujan Angin",
      date: "02 Januari 2026",
      location: "Jl. Raya Lenteng Agung (Arah Depok)",
      status: "Selesai",
      statusBadge: "bg-green-100 text-green-700 border-green-200",
      desc: "Pohon angsana tua tumbang menutup sebagian jalan. Penanganan selesai dilakukan oleh PPSU and Damkar.",
      type: "Cuaca Ekstrem",
      typeBadge: "bg-slate-100 text-slate-700 border-slate-200",
    },
    {
      id: 3,
      title: "Kebakaran Lahan Kosong",
      date: "12 Desember 2025",
      location: "Jl. Joe (Lahan Warga)",
      status: "Selesai",
      statusBadge: "bg-green-100 text-green-700 border-green-200",
      desc: "Diduga akibat puntung rokok. Api berhasil dipadamkan warga sebelum armada Damkar tiba.",
      type: "Kebakaran",
      typeBadge: "bg-red-50 text-red-700 border-red-100",
    },
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
      {/* === HERO SECTION === */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <LifeBuoy className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge
            variant="outline"
            className="border-red-400 text-red-300 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm"
          >
            Siaga Bencana
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Data & Potensi Bencana"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Informasi terkini mengenai titik rawan, riwayat kejadian, and kesiapsiagaan bencana di lingkungan Kelurahan Lenteng Agung."}
          </p>
        </div>
      </div>

      {/* === BREADCRUMB === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button
          variant="ghost"
          asChild
          className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </Link>
        </Button>
      </div>

      {/* === STATS CARDS === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsList.map((stat, idx) => (
            <Card key={idx} className="border-slate-100 shadow-sm">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {stat.value}
                  </h3>
                </div>
                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-20`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* === CONTENT SECTION === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: MAIN CONTENT */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Peta Rawan Bencana (Placeholder Visual) */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-slate-800 text-xl font-bold">
                  <Map className="h-6 w-6 text-[#0B3D2E]" /> Peta Titik Rawan
                  Banjir
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Visualisasi Sederhana */}
                <div className="w-full h-72 bg-blue-50/50 rounded-xl relative overflow-hidden border border-blue-100 flex items-center justify-center">
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(#0B3D2E 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>

                  {/* Sungai Ciliwung Representation */}
                  <div className="absolute top-0 right-10 w-32 h-full bg-blue-200/50 transform -skew-x-12 flex items-center justify-center">
                    <span className="transform rotate-90 text-blue-800/30 font-extrabold text-2xl tracking-widest uppercase">
                      Ciliwung
                    </span>
                  </div>

                  {/* Hotspots */}
                  <div className="absolute top-12 right-32 group cursor-pointer">
                    <span className="relative flex h-8 w-8">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-8 w-8 bg-red-500 items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                        RW01
                      </span>
                    </span>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                      Rawan Banjir (Siaga 3)
                    </div>
                  </div>

                  <div className="absolute bottom-20 right-24 group cursor-pointer">
                    <span className="relative flex h-8 w-8">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-8 w-8 bg-amber-500 items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                        RW03
                      </span>
                    </span>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                      Rawan Longsor Tebing
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className="z-10 bg-white/90 text-slate-600 backdrop-blur-sm shadow-sm absolute bottom-4 left-4"
                  >
                    Visualisasi Area Bantaran Ciliwung
                  </Badge>
                </div>

                <div className="mt-4 flex gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></span>{" "}
                    Zona Merah (Rawan Tinggi)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></span>{" "}
                    Zona Kuning (Waspada)
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Riwayat Bencana */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-[#0B3D2E]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Riwayat Kejadian Terbaru
                </h2>
              </div>

              <div className="space-y-4">
                {recentDisastersList.map((item) => (
                  <Card
                    key={item.id}
                    className="border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={item.typeBadge}>
                            {item.type}
                          </Badge>
                          <span className="text-xs text-slate-500">
                            {item.date}
                          </span>
                        </div>
                        <Badge variant="outline" className={item.statusBadge}>
                          {item.status}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <Map className="h-3 w-3" />
                        Lokasi: {item.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Widget: Kontak Darurat */}
            <Card className="bg-red-50 border-red-100 shadow-sm sticky top-24">
              <CardHeader className="pb-3 border-b border-red-100">
                <CardTitle className="text-red-800 text-lg font-bold flex items-center gap-2">
                  <Phone className="h-5 w-5 animate-pulse" /> Kontak Darurat 24
                  Jam
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                {[
                  { name: "Siaga Bencana (Pusat)", num: "112" },
                  { name: "Damkar Jagakarsa", num: "021-7890113" },
                  { name: "Polsek Jagakarsa", num: "021-7864446" },
                  { name: "Posko Kelurahan", num: "021-7865555" },
                ].map((contact, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center border border-red-100"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {contact.name}
                    </span>
                    <a
                      href={`tel:${contact.num.replace(/-/g, "")}`}
                      className="text-red-600 font-extrabold hover:underline"
                    >
                      {contact.num}
                    </a>
                  </div>
                ))}

                <div className="mt-6 pt-4 text-center">
                  <p className="text-xs text-red-700/80 mb-3">
                    Butuh bantuan evakuasi segera?
                  </p>
                  <Button
                    variant="destructive"
                    className="w-full bg-red-600 hover:bg-red-700 font-bold shadow-md"
                    asChild
                  >
                    <Link to="/pengaduan">
                      <Megaphone className="h-4 w-4 mr-2" />
                      Lapor Petugas Piket
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
