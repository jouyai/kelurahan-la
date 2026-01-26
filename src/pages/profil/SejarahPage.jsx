import React from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import {
  ArrowLeft,
  BookOpen,
  Clock,
  MapPin,
  Building,
  ChevronRight,
  Loader2
} from "lucide-react";
import { usePageContent, useData } from "../../hooks/useContent";

const SejarahPage = () => {
  const { content: pageContent, loading: contentLoading } = usePageContent('sejarah');
  const { data: timelineData, loading: timelineLoading } = useData('items', { type: 'sejarah_timeline' });

  const isLoading = contentLoading || timelineLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-[#0B3D2E] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* --- HERO SECTION (Compact) --- */}
      <div className="bg-[#0B3D2E] text-white py-12 mb-10 relative overflow-hidden">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge
            variant="outline"
            className="border-amber-400 text-amber-400 mb-4 px-3 py-1"
          >
            Profil Wilayah
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Sejarah & Asal Usul"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            {pageContent.hero_description || "Menelusuri jejak langkah perjalanan Kelurahan Lenteng Agung dari masa ke masa hingga menjadi kawasan yang maju seperti sekarang."}
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* KOLOM KIRI: Cerita Utama */}
          <div className="lg:col-span-2 space-y-8">
            {/* Card Asal Usul Nama */}
            <Card className="border-none shadow-md bg-white overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#0B3D2E] to-amber-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-[#0B3D2E]">
                  <BookOpen className="h-6 w-6 text-amber-500" />
                  {pageContent.asal_usul_title || 'Asal Usul Nama "Lenteng Agung"'}
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p className="whitespace-pre-wrap">
                  {pageContent.asal_usul_text || "Nama Lenteng Agung diyakini berasal dari kata \"Klenteng\" dan \"Agung\". Konon pada masa lampau, wilayah ini merupakan tempat persinggahan pedagang Tionghoa yang mendirikan sebuah tempat ibadah (Klenteng) yang cukup besar (Agung) di bantaran Sungai Ciliwung.\n\nVersi lain menyebutkan bahwa nama ini diambil dari karakter tanah dan kontur wilayah yang menyerupai \"Lenteng\" (lengkungan) sungai yang agung. Terlepas dari berbagai versi sejarah, wilayah ini telah menjadi pemukiman penting sejak era kolonial Belanda karena posisinya yang strategis di jalur menuju Depok dan Bogor."}
                </p>
              </CardContent>
            </Card>

            {/* Timeline Sejarah */}
            <div className="relative border-l-4 border-slate-200 ml-4 md:ml-6 space-y-10 py-4">
              {timelineData.length > 0 ? timelineData.map((item) => (
                <div key={item.id} className="relative pl-8 md:pl-10">
                  <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-[#0B3D2E] border-4 border-slate-50 shadow-sm"></div>
                  <h3 className="text-xl font-bold text-[#0B3D2E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold mb-3">
                    {item.data?.subtitle || "Detail Peristiwa"}
                  </p>
                  <Card className="border-slate-200 bg-slate-50/50">
                    <CardContent className="p-4 text-slate-600 text-sm">
                      {item.description}
                    </CardContent>
                  </Card>
                </div>
              )) : (
                <>
                  {/* Timeline Item 1 */}
                  <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-[#0B3D2E] border-4 border-slate-50 shadow-sm"></div>
                    <h3 className="text-xl font-bold text-[#0B3D2E] mb-1">
                      Era Kolonial (1900-an)
                    </h3>
                    <p className="text-sm text-amber-600 font-semibold mb-3">
                      Perkebunan & Jalur Kereta
                    </p>
                    <Card className="border-slate-200 bg-slate-50/50">
                      <CardContent className="p-4 text-slate-600 text-sm">
                        Wilayah Lenteng Agung dikenal sebagai kawasan perkebunan
                        karet dan buah-buahan. Pembangunan jalur kereta api
                        Jakarta-Bogor menjadi tonggak awal ramainya kawasan ini
                        sebagai jalur transit.
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-[#0B3D2E] border-4 border-slate-50 shadow-sm"></div>
                    <h3 className="text-xl font-bold text-[#0B3D2E] mb-1">
                      Pasca Kemerdekaan (1970-an)
                    </h3>
                    <p className="text-sm text-amber-600 font-semibold mb-3">
                      Pembentukan Administratif
                    </p>
                    <Card className="border-slate-200 bg-slate-50/50">
                      <CardContent className="p-4 text-slate-600 text-sm">
                        Seiring dengan pemekaran wilayah Jakarta Selatan, Lenteng
                        Agung resmi ditetapkan sebagai Kelurahan di bawah Kecamatan
                        Jagakarsa. Pembangunan infrastruktur jalan raya Lenteng
                        Agung dimulai.
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative pl-8 md:pl-10">
                    <div className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-[#0B3D2E] border-4 border-slate-50 shadow-sm"></div>
                    <h3 className="text-xl font-bold text-[#0B3D2E] mb-1">
                      Era Modern (2000 - Sekarang)
                    </h3>
                    <p className="text-sm text-amber-600 font-semibold mb-3">
                      Pusat Pendidikan & Pemukiman
                    </p>
                    <Card className="border-slate-200 bg-slate-50/50">
                      <CardContent className="p-4 text-slate-600 text-sm">
                        Kini Lenteng Agung bertransformasi menjadi kawasan
                        pendidikan dengan hadirnya universitas ternama (UI, UP,
                        ISTN) di sekitarnya, serta menjadi kawasan penyangga hijau
                        yang asri dengan Ruang Publik Terpadu Ramah Anak (RPTRA).
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* KOLOM KANAN: Informasi Tambahan */}
          <div className="space-y-6">
            {/* Fakta Singkat */}
            <Card className="border-l-4 border-l-amber-500 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-[#0B3D2E] flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-500" />
                  Fakta Wilayah
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-600">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Luas Wilayah</span>
                  <span className="font-semibold text-[#0B3D2E]">{pageContent.luas_wilayah || "2.25 km²"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Kecamatan</span>
                  <span className="font-semibold text-[#0B3D2E]">
                    {pageContent.kecamatan || "Jagakarsa"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Kota Administrasi</span>
                  <span className="font-semibold text-[#0B3D2E]">
                    {pageContent.kota_administrasi || "Jakarta Selatan"}
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Kode Pos</span>
                  <span className="font-semibold text-[#0B3D2E]">{pageContent.kode_pos || "12610"}</span>
                </div>
              </CardContent>
            </Card>

            {/* Navigasi Profil Lain */}
            <Card className="shadow-sm border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-[#0B3D2E]">
                  Jelajahi Profil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:text-[#0B3D2E] hover:bg-slate-50"
                  asChild
                >
                  <Link to="/visi-misi">
                    Visi & Misi <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Separator />
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:text-[#0B3D2E] hover:bg-slate-50"
                  asChild
                >
                  <Link to="/struktur-organisasi">
                    Struktur Organisasi <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Separator />
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:text-[#0B3D2E] hover:bg-slate-50"
                  asChild
                >
                  <Link to="/geografis">
                    Kondisi Geografis <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SejarahPage;
