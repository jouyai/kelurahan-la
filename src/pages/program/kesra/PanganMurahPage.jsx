import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import { 
  ArrowLeft, 
  ShoppingBag, 
  Ticket, 
  Truck, 
  Store, 
  CalendarDays, 
  MapPin, 
  Tags,
  MessageSquare,
  Info
} from 'lucide-react';

// Dummy Data Pangan Murah
const programPangan = [
  {
    id: 1,
    title: "Pangan Bersubsidi (KJP Plus)",
    desc: "Program khusus bagi pemegang Kartu Jakarta Pintar (KJP), Kartu Lansia (KLJ), dan Disabilitas (KPDJ).",
    jadwal: "Tanggal 5 - 15 (Bulanan)",
    lokasi: "RPTRA Lenteng Agung",
    items: "Daging, Telur, Ikan, Beras, Susu",
    status: "Antrean Online",
    statusColor: "bg-blue-100 text-blue-700",
    icon: <Ticket className="h-6 w-6 text-blue-600" />,
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "Pasar Murah Keliling",
    desc: "Mobil pangan murah keliling ke setiap RW menyediakan paket sembako harga terjangkau untuk umum.",
    jadwal: "Senin & Kamis (09:00 - 12:00)",
    lokasi: "Bergilir di Kantor RW 01 - RW 10",
    items: "Beras 5kg, Minyak, Gula",
    status: "Walk-in / Langsung",
    statusColor: "bg-green-100 text-green-700",
    icon: <Truck className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-50"
  },
  {
    id: 3,
    title: "Bazar Pangan Rakyat",
    desc: "Kerja sama dengan Bulog dan UMKM lokal. Menyediakan sembako, sayuran segar, dan produk olahan.",
    jadwal: "Akhir Bulan (Sabtu-Minggu)",
    lokasi: "Halaman Kantor Kelurahan",
    items: "Sembako, Sayur, Frozen Food",
    status: "Terbuka Umum",
    statusColor: "bg-orange-100 text-orange-700",
    icon: <Store className="h-6 w-6 text-orange-600" />,
    bgColor: "bg-orange-50"
  },
];

export default function PanganMurahPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern Shopping Bag */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShoppingBag className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Ketahanan Pangan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Program Pangan Murah
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Menjaga stabilitas harga dan ketersediaan kebutuhan pokok warga Kelurahan Lenteng Agung.
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: LIST PROGRAM */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-2">
               <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                 <ShoppingBag className="h-6 w-6 text-[#0B3D2E]" />
               </div>
               <h2 className="text-2xl font-bold text-slate-900">Jadwal & Lokasi</h2>
            </div>

            <div className="space-y-6">
              {programPangan.map((item) => (
                <Card key={item.id} className="border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Icon Column */}
                    <div className={`p-6 flex items-center justify-center ${item.bgColor} md:w-32`}>
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#0B3D2E] transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className={item.statusColor}>
                          {item.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {item.desc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-slate-400" />
                          <span>{item.jadwal}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          <span>{item.lokasi}</span>
                        </div>
                        <div className="col-span-1 sm:col-span-2 flex items-center gap-2 border-t border-slate-200 pt-2 mt-1">
                          <Tags className="h-4 w-4 text-slate-400" />
                          <span className="font-medium text-slate-700">Komoditas: {item.items}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">
            
            {/* Widget Syarat Pengambilan */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <Info className="h-5 w-5" /> Syarat Pengambilan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 mb-2">
                  Wajib membawa dokumen asli saat pengambilan:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">1</span>
                    <span className="text-sm font-medium text-slate-700">KTP Asli & Fotokopi</span>
                  </li>
                  <li className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">2</span>
                    <span className="text-sm font-medium text-slate-700">Kartu Keluarga (KK)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">3</span>
                    <span className="text-sm font-medium text-slate-700">Kartu ATM KJP/KLJ (Khusus Subsidi)</span>
                  </li>
                </ul>

                <div className="bg-[#0B3D2E] text-white rounded-lg p-5 text-center border border-[#0B3D2E]/10 mt-4">
                  <MessageSquare className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                  <h5 className="font-bold text-white text-sm mb-1">Cek Stok Hari Ini?</h5>
                  <p className="text-xs text-slate-300 mb-4">
                    Tanyakan ketersediaan stok sembako murah kepada petugas.
                  </p>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B3D2E] font-bold border-none" asChild>
                    <Link to="/pengaduan">
                      Chat Petugas
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