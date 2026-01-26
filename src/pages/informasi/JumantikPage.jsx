import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// --- ICONS ---
import {
  ArrowLeft,
  ShieldCheck,
  Trash2,
  Home,
  ClipboardCheck,
  AlertTriangle,
  MessageSquare,
  CheckCircle2,
  CalendarDays,
  Activity,
  FileText,
} from "lucide-react";

// Data Edukasi 3M Plus
const steps3M = [
  {
    title: "Menguras",
    desc: "Membersihkan tempat penampungan air seperti bak mandi, ember, dan toren air minimal seminggu sekali.",
    icon: <Home className="h-8 w-8 text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
  },
  {
    title: "Menutup",
    desc: "Menutup rapat-rapat tempat penampungan air agar nyamuk tidak bisa masuk dan bertelur.",
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
    color: "bg-green-50 border-green-100",
  },
  {
    title: "Mendaur Ulang",
    desc: "Memanfaatkan kembali atau mendaur ulang barang bekas yang berpotensi menampung air hujan.",
    icon: <Trash2 className="h-8 w-8 text-orange-600" />,
    color: "bg-orange-50 border-orange-100",
  },
];

// Data Jadwal Jumling (Jumat Keliling)
const scheduleJumling = [
  { rw: "RW 01", location: "RT 01 - RT 05", team: "Kader Dawis Anggrek" },
  { rw: "RW 02", location: "RT 03 - RT 08", team: "Kader Dawis Melati" },
  { rw: "RW 03", location: "Seluruh RT", team: "Kader Dawis Mawar" },
  { rw: "RW 04", location: "RT 01 - RT 04", team: "Kader Dawis Kenanga" },
];

export default function JumantikPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* === HERO SECTION === */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge
            variant="outline"
            className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm"
          >
            Kesehatan Lingkungan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Gerakan Satu Rumah Satu Jumantik
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Upaya pemberdayaan masyarakat untuk memantau jentik nyamuk secara
            mandiri guna mencegah Demam Berdarah Dengue (DBD).
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

      {/* === CONTENT SECTION === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: MAIN CONTENT */}
          <div className="w-full lg:w-2/3 space-y-10">
            {/* Intro Card */}
            <Card className="border-l-4 border-l-[#0B3D2E] shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <ClipboardCheck className="h-6 w-6 text-[#0B3D2E]" /> Apa itu
                  Jumantik Mandiri?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Jumantik (Juru Pemantau Jentik) adalah warga yang secara
                  sukarela memantau keberadaan jentik nyamuk di lingkungannya.
                  Melalui gerakan{" "}
                  <strong>Satu Rumah Satu Jumantik (G1R1J)</strong>, setiap
                  rumah tangga diharapkan menunjuk satu anggota keluarga untuk
                  menjadi Jumantik di rumahnya sendiri.
                </p>
              </CardContent>
            </Card>

            {/* 3M Plus Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-[#0B3D2E]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Langkah Pencegahan 3M Plus
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {steps3M.map((step, idx) => (
                  <Card
                    key={idx}
                    className={`shadow-sm hover:shadow-md transition-all text-center ${step.color}`}
                  >
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 bg-white shadow-sm">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Plus List */}
              <div className="mt-4 bg-[#0B3D2E]/5 p-5 rounded-xl border border-[#0B3D2E]/10">
                <h5 className="font-bold text-[#0B3D2E] text-sm mb-3">
                  Kegiatan "Plus" Lainnya:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Memelihara ikan pemakan jentik",
                    "Menggunakan obat anti nyamuk",
                    "Memasang kawat kasa pada jendela",
                    "Gotong royong membersihkan lingkungan",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#0B3D2E]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Jadwal Jumling */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                  <CalendarDays className="h-6 w-6 text-[#0B3D2E]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Jadwal Jumat Keliling
                </h2>
              </div>

              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="font-bold text-slate-700">
                        Wilayah
                      </TableHead>
                      <TableHead className="font-bold text-slate-700">
                        Lokasi Fokus
                      </TableHead>
                      <TableHead className="font-bold text-slate-700">
                        Tim Petugas
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleJumling.map((item, idx) => (
                      <TableRow
                        key={idx}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <TableCell className="font-medium text-slate-800">
                          {item.rw}
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {item.location}
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {item.team}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-xs text-slate-400 mt-2 italic">
                *Jadwal dilaksanakan setiap hari Jumat pagi pukul 08.00 WIB s/d
                Selesai.
              </p>
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Widget: Status DBD */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <Activity className="h-5 w-5 text-orange-500" /> Status
                  Kewaspadaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
                  <span className="block text-xs text-green-800 font-bold uppercase tracking-wider mb-2">
                    Status Kelurahan
                  </span>
                  <span className="text-4xl font-extrabold text-green-600">
                    AMAN
                  </span>
                  <p className="text-xs text-green-700 mt-2">
                    Tidak ada kasus DBD aktif minggu ini.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-slate-600 border-b border-slate-50 pb-2">
                    <span>Angka Bebas Jentik (ABJ)</span>
                    <span className="font-bold text-[#0B3D2E]">92%</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 border-b border-slate-50 pb-2">
                    <span>Target ABJ Nasional</span>
                    <span className="font-bold text-slate-800">≥ 95%</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
                  <h5 className="font-bold text-red-800 text-sm mb-1">
                    Ada Kasus DBD?
                  </h5>
                  <p className="text-xs text-red-700 mb-3">
                    Segera laporkan jika ada warga yang terjangkit DBD untuk
                    tindakan <em>fogging</em>.
                  </p>
                  <Button
                    variant="destructive"
                    className="w-full bg-red-600 hover:bg-red-700 font-bold shadow-sm"
                    asChild
                  >
                    <Link to="/pengaduan">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Lapor Sekarang
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
