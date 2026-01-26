import React from 'react';
import { Link } from 'react-router-dom';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import { 
  ArrowLeft, 
  FileText, 
  Building2, 
  MapPin, 
  Briefcase, 
  AlertCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';

const PelayananUmumPage = () => {
  // Data Layanan
  const services = [
    {
      title: "Surat Keterangan Usaha (SKU)",
      desc: "Dokumen resmi untuk menerangkan usaha warga yang berdomisili di kelurahan.",
      icon: <Briefcase className="h-6 w-6 text-amber-500" />,
      requirements: [
        "Fotokopi KTP & KK",
        "Foto lokasi usaha",
        "Surat Pengantar RT/RW",
        "Materai 10.000"
      ],
      link: "#"
    },
    {
      title: "Surat Keterangan Domisili",
      desc: "Untuk keperluan administrasi perbankan, sekolah, atau pekerjaan.",
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      requirements: [
        "Fotokopi KTP & KK",
        "Surat Pengantar RT/RW",
        "Pas foto 3x4 (2 lembar)"
      ],
      link: "#"
    },
    {
      title: "Surat Pengantar Nikah (N1-N4)",
      desc: "Berkas persyaratan untuk pendaftaran pernikahan di KUA.",
      icon: <FileText className="h-6 w-6 text-amber-500" />,
      requirements: [
        "Fotokopi KTP & KK Calon Pengantin",
        "Fotokopi KTP Orang Tua",
        "Surat Pernyataan Belum Menikah",
        "Imunisasi TT (Bagi Wanita)"
      ],
      link: "#"
    },
    {
      title: "Surat Keterangan Tidak Mampu (SKTM)",
      desc: "Untuk keringanan biaya kesehatan, pendidikan, atau bantuan sosial.",
      icon: <AlertCircle className="h-6 w-6 text-amber-500" />,
      requirements: [
        "Fotokopi KTP & KK",
        "Surat Pengantar RT/RW",
        "Foto rumah (tampak depan & dalam)"
      ],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Building2 className="w-64 h-64 text-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Layanan Publik
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Administrasi Umum
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            Layanan pengurusan surat-menyurat dan administrasi kependudukan yang cepat, mudah, dan transparan.
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
        
        {/* INFO JAM LAYANAN */}
        <Card className="border-l-4 border-l-amber-500 shadow-sm bg-amber-50/50">
          <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-full">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Jam Operasional Pelayanan</h3>
                <p className="text-sm text-slate-600">Senin - Jumat: 08.00 - 15.00 WIB</p>
              </div>
            </div>
            <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-100">
              Cek Persyaratan Lengkap
            </Button>
          </CardContent>
        </Card>

        {/* LIST LAYANAN GRID */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-slate-200 hover:border-[#0B3D2E] hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[#0B3D2E]/5 rounded-xl group-hover:bg-[#0B3D2E] group-hover:text-white transition-colors">
                      {/* Clone icon agar bisa ganti warna saat hover */}
                      {React.cloneElement(service.icon, { 
                        className: "h-6 w-6 text-amber-500 group-hover:text-amber-400" 
                      })}
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">Online</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mt-4 group-hover:text-[#0B3D2E]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Separator className="mb-4" />
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Persyaratan:
                  </h4>
                  <ul className="space-y-2">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2">
                  <Button className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90" asChild>
                    <Link to={service.link}>Ajukan Sekarang</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION PENGADUAN */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Butuh Bantuan Lainnya?</h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Jika Anda memiliki pertanyaan atau kendala terkait layanan administrasi, silakan hubungi petugas kami melalui layanan pengaduan.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="secondary" className="bg-amber-500 text-[#0B3D2E] hover:bg-amber-400 font-bold" asChild>
                <Link to="/pengaduan">Buat Pengaduan</Link>
              </Button>
            </div>
          </div>
          {/* Decorative Blob */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#0B3D2E] rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-600 rounded-full blur-3xl opacity-20"></div>
        </section>

      </div>
    </div>
  );
};

export default PelayananUmumPage;