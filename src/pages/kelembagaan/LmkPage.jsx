import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- ICONS ---
import { 
  ArrowLeft, 
  Users, 
  Megaphone, 
  MapPin, 
  MessageSquare 
} from 'lucide-react';

// Dummy Data Anggota LMK
const listLMK = [
  { id: 1, name: "Bapak Sutrisno", jabatan: "Ketua LMK", wilayah: "Kelurahan Lenteng Agung", color: "bg-blue-100 text-blue-700" },
  { id: 2, name: "Ibu Nurhayati", jabatan: "Wakil Ketua", wilayah: "Kelurahan Lenteng Agung", color: "bg-purple-100 text-purple-700" },
  { id: 3, name: "Bapak Hartono", jabatan: "Anggota", wilayah: "Perwakilan RW 01", color: "bg-gray-100 text-gray-700" },
  { id: 4, name: "Bapak Syamsudin", jabatan: "Anggota", wilayah: "Perwakilan RW 02", color: "bg-gray-100 text-gray-700" },
  { id: 5, name: "Ibu Dewi Kartika", jabatan: "Anggota", wilayah: "Perwakilan RW 03", color: "bg-gray-100 text-gray-700" },
  { id: 6, name: "Bapak Rahmad", jabatan: "Anggota", wilayah: "Perwakilan RW 04", color: "bg-gray-100 text-gray-700" },
  { id: 7, name: "Bapak Taufik", jabatan: "Anggota", wilayah: "Perwakilan RW 05", color: "bg-gray-100 text-gray-700" },
];

export default function LmkPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern Megaphone/Voice */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Megaphone className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Lembaga Kemasyarakatan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Lembaga Musyawarah Kelurahan
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Mitra strategis Lurah dalam menampung dan menyalurkan aspirasi masyarakat serta meningkatkan partisipasi pembangunan.
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
          
          {/* LEFT COLUMN: LIST ANGGOTA */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-2">
               <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                 <Users className="h-6 w-6 text-[#0B3D2E]" />
               </div>
               <h2 className="text-2xl font-bold text-slate-900">Daftar Anggota LMK</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listLMK.map((member) => (
                <Card key={member.id} className="border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4 border-4 border-slate-50 shadow-sm group-hover:scale-110 transition-transform">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} />
                      <AvatarFallback className="bg-[#0B3D2E] text-white text-xl">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-[#0B3D2E] transition-colors">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3 bg-slate-100 text-slate-600 font-normal">
                      {member.jabatan}
                    </Badge>
                    
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-auto">
                      <MapPin className="h-3 w-3" />
                      <span>{member.wilayah}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR INFO */}
          <div className="space-y-6">
            
            {/* Widget Fungsi LMK */}
            <Card className="bg-white border-slate-200 shadow-sm sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#0B3D2E] text-lg font-bold flex items-center gap-2">
                  <Megaphone className="h-5 w-5" /> Peran & Fungsi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  LMK bertugas menampung aspirasi masyarakat, memberikan masukan kepada Lurah, dan menggali potensi swadaya masyarakat dalam pembangunan wilayah.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-bold text-blue-800 text-xs uppercase mb-2">Tugas Utama</h5>
                  <ul className="list-disc ml-4 text-xs text-blue-700 space-y-1">
                    <li>Menampung aspirasi warga</li>
                    <li>Mitra kerja Lurah</li>
                    <li>Pemberdayaan masyarakat</li>
                  </ul>
                </div>

                <div className="bg-[#0B3D2E]/5 rounded-lg p-5 text-center border border-[#0B3D2E]/10 mt-4">
                  <MessageSquare className="h-8 w-8 text-[#0B3D2E] mx-auto mb-2" />
                  <h5 className="font-bold text-[#0B3D2E] text-sm mb-1">Punya Aspirasi?</h5>
                  <p className="text-xs text-slate-600 mb-4">
                    Sampaikan masukan Anda untuk pembangunan wilayah kepada anggota LMK.
                  </p>
                  <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold" asChild>
                    <Link to="/pengaduan">
                      Sampaikan Aspirasi
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