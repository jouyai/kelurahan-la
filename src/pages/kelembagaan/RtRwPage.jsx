import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- ICONS ---
import { 
  ArrowLeft, 
  Map, 
  MapPin, 
  Info, 
  MessageSquare
} from 'lucide-react';

// Dummy Data RW & RT
const listRW = [
  { id: 1, name: "RW 01", rt_count: 12, ketua: "Bapak Ahmad", lokasi: "Jl. Agung Raya" },
  { id: 2, name: "RW 02", rt_count: 9, ketua: "Bapak Budi", lokasi: "Jl. Joe" },
  { id: 3, name: "RW 03", rt_count: 15, ketua: "Bapak Cecep", lokasi: "Jl. Lontar" },
  { id: 4, name: "RW 04", rt_count: 10, ketua: "Bapak Dedi", lokasi: "Jl. Camat Gabun" },
  { id: 5, name: "RW 05", rt_count: 14, ketua: "Bapak Eko", lokasi: "Jl. Raya Lenteng" },
  { id: 6, name: "RW 06", rt_count: 8, ketua: "Bapak Fajar", lokasi: "Jl. Gardu" },
  { id: 7, name: "RW 07", rt_count: 11, ketua: "Bapak Gilang", lokasi: "Jl. Srengseng" },
  { id: 8, name: "RW 08", rt_count: 13, ketua: "Bapak Haryono", lokasi: "Jl. Kebagusan" },
  { id: 9, name: "RW 09", rt_count: 10, ketua: "Bapak Indra", lokasi: "Jl. Margasatwa" },
  { id: 10, name: "RW 10", rt_count: 12, ketua: "Bapak Joko", lokasi: "Jl. Jagakarsa" },
];

export default function RtRwPage({ onConnectStaff }) {
  return (
    // Container Utama (Tanpa pt-24 agar menempel dengan Navbar)
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern Map */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Map className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Kelembagaan Wilayah
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Rukun Tetangga & Rukun Warga
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Daftar pengurus wilayah yang menjadi ujung tombak pelayanan dan kerukunan warga Kelurahan Lenteng Agung.
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
          
          {/* LEFT COLUMN: LIST RW */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                   <MapPin className="h-6 w-6 text-[#0B3D2E]" />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">Daftar Wilayah RW</h2>
               </div>
               <Badge className="bg-[#0B3D2E]">Total {listRW.length} RW</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {listRW.map((rw) => (
                <Card key={rw.id} className="border-slate-200 shadow-sm hover:shadow-md transition-all group">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#0B3D2E]/5 flex items-center justify-center font-bold text-[#0B3D2E] text-lg group-hover:bg-[#0B3D2E] group-hover:text-white transition-colors duration-300">
                      {rw.id}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-slate-800 text-lg">{rw.name}</h4>
                        <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-100">
                          {rw.rt_count} RT
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-slate-600">
                        Ketua: <span className="font-semibold text-slate-900">{rw.ketua}</span>
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="h-3 w-3" />
                        {rw.lokasi}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">
            
            {/* Widget Info RT/RW */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-800 text-lg font-bold flex items-center gap-2">
                  <Info className="h-5 w-5 text-[#0B3D2E]" /> Tentang Lembaga
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  <strong>RT & RW</strong> adalah lembaga kemasyarakatan yang dibentuk melalui musyawarah warga untuk membantu pelayanan pemerintahan, pembangunan, dan kemasyarakatan.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h5 className="font-bold text-slate-700 text-xs uppercase mb-2">Fungsi Utama</h5>
                  <ul className="list-disc ml-4 text-xs text-slate-600 space-y-1">
                    <li>Pendataan kependudukan</li>
                    <li>Keamanan & ketertiban</li>
                    <li>Penggerak gotong royong</li>
                  </ul>
                </div>

                <div className="bg-[#0B3D2E] text-white rounded-lg p-5 text-center border border-[#0B3D2E]/10 mt-4">
                  <MessageSquare className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                  <h5 className="font-bold text-white text-sm mb-1">Butuh Kontak Ketua RW?</h5>
                  <p className="text-xs text-slate-300 mb-4">
                    Hubungi petugas kelurahan untuk informasi kontak pengurus wilayah Anda.
                  </p>
                  
                  {/* TOMBOL PENGHUBUNG CHAT (Memicu LiveChatWidget) */}
                  <Button 
                    onClick={() => onConnectStaff && onConnectStaff("Info Kontak RT/RW")}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B3D2E] font-bold border-none"
                  >
                    Hubungi Petugas
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