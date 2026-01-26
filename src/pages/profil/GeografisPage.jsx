import React from 'react';
import { Link } from 'react-router-dom';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

// --- ICONS ---
import { 
  ArrowLeft, 
  Map, 
  MapPin, 
  Compass, 
  Building, 
  Trees, 
  CloudSun
} from 'lucide-react';

const GeografisPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Map className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Profil Wilayah
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kondisi Geografis
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Gambaran letak wilayah, batas administrasi, dan peta lingkungan Kelurahan Lenteng Agung.
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* PETA WILAYAH */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="h-8 w-1 bg-amber-500 rounded-full"></div>
             <h2 className="text-2xl font-bold text-slate-900">Peta Administrasi</h2>
          </div>
          
          <Card className="border-none shadow-md overflow-hidden bg-white">
            <div className="relative w-full h-[300px] md:h-[500px] bg-slate-200 group">
              {/* Menggunakan aset gambar yang ada di folder public */}
              <img 
                src="/peta1.png" 
                alt="Peta Wilayah Lenteng Agung" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback jika gambar belum diload sempurna
                  e.target.src = "https://via.placeholder.com/1200x600?text=Peta+Wilayah+Lenteng+Agung";
                }}
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-xs font-bold text-[#0B3D2E] flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-red-500" /> Koordinat Kantor Kelurahan
                </p>
                <p className="text-xs text-slate-600 font-mono mt-1">
                  6°20'05.4"S 106°49'51.2"E
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-slate-600 leading-relaxed">
                Kelurahan Lenteng Agung memiliki posisi yang strategis di wilayah Jakarta Selatan, dilintasi oleh jalur kereta api Commuter Line (Jakarta-Bogor) dan Sungai Ciliwung yang membelah wilayah menjadi dua bagian. Kontur tanah yang berbukit menjadikan wilayah ini memiliki area resapan air yang cukup baik.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* BATAS & LUAS (GRID 2 KOLOM) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Batas Wilayah */}
          <Card className="shadow-sm hover:shadow-md transition-shadow border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#0B3D2E]">
                <Compass className="h-5 w-5 text-amber-500" />
                Batas Wilayah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-semibold text-slate-700 w-24">Utara</TableCell>
                    <TableCell className="text-slate-600">Berbatasan dengan Kelurahan Tanjung Barat</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-semibold text-slate-700">Selatan</TableCell>
                    <TableCell className="text-slate-600">Berbatasan dengan Kelurahan Srengseng Sawah</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-semibold text-slate-700">Barat</TableCell>
                    <TableCell className="text-slate-600">Berbatasan dengan Kelurahan Jagakarsa</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50">
                    <TableCell className="font-semibold text-slate-700">Timur</TableCell>
                    <TableCell className="text-slate-600">Berbatasan dengan Sungai Ciliwung (Kecamatan Pasar Rebo)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Penggunaan Lahan */}
          <div className="space-y-6">
            <Card className="bg-[#0B3D2E] text-white border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-amber-400" />
                  Luas Wilayah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-extrabold mb-1">228,8 <span className="text-lg font-normal text-slate-300">Ha</span></div>
                <p className="text-sm text-slate-300">Total luas area administratif.</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="p-2 bg-blue-50 rounded-full mb-2">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-slate-800">65%</span>
                  <span className="text-xs text-slate-500">Pemukiman</span>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="p-2 bg-green-50 rounded-full mb-2">
                    <Trees className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-slate-800">35%</span>
                  <span className="text-xs text-slate-500">RTH & Fasum</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* IKLIM & TOPOGRAFI */}
        <section>
          <Card className="bg-amber-50 border-amber-200">
             <CardHeader className="pb-2">
               <CardTitle className="text-lg font-bold text-amber-800 flex items-center gap-2">
                 <CloudSun className="h-5 w-5" /> Topografi & Iklim
               </CardTitle>
             </CardHeader>
             <CardContent>
               <div className="grid md:grid-cols-2 gap-6 text-sm text-amber-900/80 leading-relaxed">
                 <p>
                   Secara topografis, Kelurahan Lenteng Agung berada pada ketinggian rata-rata 25-50 meter di atas permukaan laut. Kontur tanah cenderung bergelombang dengan beberapa area cekungan di sekitar bantaran sungai.
                 </p>
                 <p>
                   Iklim di wilayah ini adalah tropis dengan curah hujan rata-rata 2.000 mm per tahun. Suhu udara berkisar antara 24°C hingga 33°C. Kondisi ini mendukung penghijauan di taman-taman kota dan RPTRA yang tersebar di wilayah kelurahan.
                 </p>
               </div>
             </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default GeografisPage;