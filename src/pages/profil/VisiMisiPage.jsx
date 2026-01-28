import React from 'react';
import { Link } from 'react-router-dom';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import {
  ArrowLeft,
  Target,
  Compass,
  Quote,
  Award,
  Users,
  Leaf,
  Loader2
} from 'lucide-react';
import { useData } from '../../hooks/useContent';

const VisiMisiPage = () => {
  const { data: misiList, loading: misiLoading } = useData('items', { type: 'misi' });
  const { data: coreValues, loading: valuesLoading } = useData('items', { type: 'core_value' });

  const isLoading = misiLoading || valuesLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-[#0B3D2E] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">

      {/* --- HERO SECTION (Compact Style) --- */}
      <div className="bg-[#0B3D2E] text-white py-16 mb-10 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Target className="w-64 h-64 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Profil Kelurahan
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Visi & Misi Strategis
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light text-justify md:text-center">
            Landasan komitmen kami dalam membangun tata kelola pemerintahan yang transparan, akuntabel, serta melayani masyarakat dengan integritas tinggi demi kemajuan bersama.
          </p>
        </div>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E] hover:bg-transparent">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
          </Link>
        </Button>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* VISI SECTION */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-2">
            <Target className="w-8 h-8 text-[#0B3D2E]" />
          </div>
          <h2 className="text-3xl font-bold text-[#0B3D2E] uppercase tracking-wide">Visi</h2>

          <div className="relative max-w-4xl mx-auto">
            <Quote className="absolute top-0 left-0 w-8 h-8 text-amber-200 -translate-x-4 -translate-y-4 opacity-50" />
            <h3 className="text-2xl md:text-4xl font-serif font-medium text-slate-800 leading-snug px-6 py-4">
              "Terwujudnya Kelurahan Lenteng Agung yang Maju, Lestari, dan Berbudaya menuju Masyarakat Sejahtera."
            </h3>
            <Quote className="absolute bottom-0 right-0 w-8 h-8 text-amber-200 translate-x-4 translate-y-4 rotate-180 opacity-50" />
          </div>
        </section>

        <Separator className="bg-slate-200" />

        {/* MISI SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0B3D2E]/10 rounded-lg">
                <Compass className="w-6 h-6 text-[#0B3D2E]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Misi Pembangunan Berkelanjutan</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Untuk merealisasikan visi tersebut, Kelurahan Lenteng Agung merumuskan langkah-langkah strategis yang terukur, berkesinambungan, dan berorientasi pada peningkatan kualitas hidup masyarakat secara menyeluruh.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-slate-700 italic text-justify">
                "Misi adalah penunjuk arah yang memastikan setiap kebijakan dan program kerja kami selaras dengan cita-cita kesejahteraan warga."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {misiList.length > 0 ? misiList.map((misi, idx) => (
              <MisiCard key={misi.id} index={String(idx + 1).padStart(2, '0')}>
                {misi.description}
              </MisiCard>
            )) : (
              <>
                <MisiCard index="01">
                  Mewujudkan tata kelola pemerintahan yang profesional, transparan, dan akuntabel berbasis teknologi informasi.
                </MisiCard>
                <MisiCard index="02">
                  Meningkatkan kualitas infrastruktur lingkungan yang ramah anak, lansia, dan disabilitas.
                </MisiCard>
                <MisiCard index="03">
                  Memberdayakan ekonomi masyarakat melalui pengembangan UMKM dan ekonomi kreatif berbasis potensi lokal.
                </MisiCard>
                <MisiCard index="04">
                  Menciptakan lingkungan yang hijau, bersih, dan asri melalui partisipasi aktif masyarakat.
                </MisiCard>
                <MisiCard index="05">
                  Melestarikan nilai-nilai budaya dan kearifan lokal sebagai jati diri warga Lenteng Agung.
                </MisiCard>
              </>
            )}
          </div>
        </section>

        {/* NILAI / CORE VALUES */}
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nilai Utama Organisasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.length > 0 ? coreValues.map((val) => (
              <ValueItem
                key={val.id}
                icon={getIconComponent(val.image_url) || <Users className="w-6 h-6 text-white" />}
                title={val.title}
                desc={val.description}
              />
            )) : (
              <>
                <ValueItem
                  icon={<Users className="w-6 h-6 text-white" />}
                  title="Melayani"
                  desc="Mengutamakan kepuasan masyarakat dengan pelayanan ramah dan cepat."
                />
                <ValueItem
                  icon={<Award className="w-6 h-6 text-white" />}
                  title="Integritas"
                  desc="Jujur, disiplin, dan bertanggung jawab dalam setiap tindakan."
                />
                <ValueItem
                  icon={<Leaf className="w-6 h-6 text-white" />}
                  title="Berkelanjutan"
                  desc="Berorientasi pada kelestarian lingkungan untuk masa depan."
                />
              </>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Users': return <Users className="w-6 h-6 text-white" />;
    case 'Award': return <Award className="w-6 h-6 text-white" />;
    case 'Leaf': return <Leaf className="w-6 h-6 text-white" />;
    default: return null;
  }
};

const MisiCard = ({ index, children }) => (
  <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
    <CardContent className="p-4 flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B3D2E] text-white flex items-center justify-center font-bold text-sm">
        {index}
      </div>
      <p className="text-slate-700 font-medium leading-relaxed pt-1">
        {children}
      </p>
    </CardContent>
  </Card>
);

const ValueItem = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center group">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B3D2E] to-emerald-900 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 max-w-xs text-center">{desc}</p>
  </div>
);

export default VisiMisiPage;