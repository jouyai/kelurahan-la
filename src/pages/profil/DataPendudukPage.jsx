import React from 'react';
import { Link } from 'react-router-dom';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- ICONS ---
import {
  ArrowLeft,
  Users,
  Baby,
  Briefcase,
  GraduationCap,
  Accessibility,
  Map,
  TrendingUp,
  Loader2
} from 'lucide-react';
import { usePageContent, useData } from '../../hooks/useContent';

const DataPendudukPage = () => {
  const { content: pageContent, loading: contentLoading } = usePageContent('data-penduduk');
  const { data: dbStats, loading: statsLoading } = useData('items', { type: 'penduduk_stats' });
  const { data: dbAgeData, loading: ageLoading } = useData('items', { type: 'penduduk_usia' });
  const { data: dbWorkData, loading: workLoading } = useData('items', { type: 'penduduk_pekerjaan' });
  const { data: dbEduData, loading: eduLoading } = useData('items', { type: 'penduduk_pendidikan' });
  const { data: dbRegionData, loading: regionLoading } = useData('items', { type: 'penduduk_wilayah' });

  const isLoading = contentLoading || statsLoading || ageLoading || workLoading || eduLoading || regionLoading;

  // DATA DUMMY STATISTIK FALLBACK
  const stats = {
    totalPenduduk: parseInt(pageContent.total_penduduk) || 12540,
    kepalaKeluarga: parseInt(pageContent.kepala_keluarga) || 3450,
    lakiLaki: parseInt(pageContent.laki_laki) || 6200,
    perempuan: parseInt(pageContent.perempuan) || 6340,
  };

  const usiaData = dbAgeData.length > 0 ? dbAgeData.map(d => ({
    label: d.title,
    value: parseInt(d.description),
    percent: d.data?.percent || 0
  })) : [
    { label: "Balita (0-5 thn)", value: 850, percent: 7 },
    { label: "Anak-anak (6-12 thn)", value: 1200, percent: 10 },
    { label: "Remaja (13-17 thn)", value: 950, percent: 8 },
    { label: "Dewasa (18-59 thn)", value: 7540, percent: 60 },
    { label: "Lansia (>60 thn)", value: 2000, percent: 15 },
  ];

  const pekerjaanData = dbWorkData.length > 0 ? dbWorkData.map(d => ({
    label: d.title,
    value: d.data?.percent || 0,
    color: d.data?.color || "bg-blue-500"
  })) : [
    { label: "Pegawai Swasta", value: 40, color: "bg-blue-500" },
    { label: "Wiraswasta / Pedagang", value: 25, color: "bg-amber-500" },
    { label: "PNS / TNI / Polri", value: 10, color: "bg-[#0B3D2E]" },
    { label: "Pelajar / Mahasiswa", value: 15, color: "bg-slate-400" },
    { label: "Lainnya", value: 10, color: "bg-slate-300" },
  ];

  const pendidikanData = dbEduData.length > 0 ? dbEduData.map(d => ({
    label: d.title,
    count: d.description
  })) : [
    { label: "Belum Sekolah", count: "1,200" },
    { label: "SD / Sederajat", count: "2,340" },
    { label: "SMP / Sederajat", count: "2,100" },
    { label: "SMA / Sederajat", count: "3,500" },
    { label: "Diploma / Sarjana", count: "1,400" },
  ];

  const wilayahData = dbRegionData.length > 0 ? dbRegionData.map(d => ({
    rw: d.title,
    count: d.description
  })) : [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({ rw: `RW 0${n}`, count: 800 + (n * 50) }));

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
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at top right, #ffffff 5%, transparent 10%)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Transparansi Data
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pageContent.hero_title || "Statistik Kependudukan"}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light">
            {pageContent.hero_description || "Data demografi terbaru Kelurahan Lenteng Agung sebagai acuan perencanaan pembangunan dan pelayanan publik."}
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

        {/* RINGKASAN UTAMA (CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Penduduk"
            value={stats.totalPenduduk}
            icon={<Users className="h-6 w-6 text-white" />}
            color="bg-[#0B3D2E]"
            subtext="Jiwa"
          />
          <StatCard
            title="Kepala Keluarga"
            value={stats.kepalaKeluarga}
            icon={<Map className="h-6 w-6 text-[#0B3D2E]" />}
            color="bg-amber-400"
            textColor="text-[#0B3D2E]"
            subtext="KK"
          />
          <StatCard
            title="Laki-laki"
            value={stats.lakiLaki}
            icon={<div className="font-bold text-xl">♂</div>}
            color="bg-blue-600"
            subtext="Jiwa"
          />
          <StatCard
            title="Perempuan"
            value={stats.perempuan}
            icon={<div className="font-bold text-xl">♀</div>}
            color="bg-pink-500"
            subtext="Jiwa"
          />
        </div>

        {/* DETAIL STATISTIK (GRID LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* DEMOGRAFI USIA */}
          <Card className="border-t-4 border-t-[#0B3D2E] shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Baby className="h-5 w-5 text-[#0B3D2E]" /> Komposisi Usia
              </CardTitle>
              <CardDescription>Sebaran penduduk berdasarkan kelompok umur.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {usiaData.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-slate-500">{item.value.toLocaleString('id-ID')} Jiwa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={item.percent} className="h-2.5 flex-1" indicatorColor="bg-[#0B3D2E]" />
                    <span className="text-xs font-bold text-[#0B3D2E] w-8 text-right">{item.percent}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* PROFESI & PENDIDIKAN (TABS) */}
          <Card className="border-t-4 border-t-amber-500 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <TrendingUp className="h-5 w-5 text-amber-500" /> Indikator Sosial
              </CardTitle>
              <CardDescription>Statistik mata pencaharian dan pendidikan warga.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pekerjaan">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="pekerjaan">Pekerjaan</TabsTrigger>
                  <TabsTrigger value="pendidikan">Pendidikan</TabsTrigger>
                </TabsList>

                <TabsContent value="pekerjaan" className="space-y-6">
                  <div className="flex justify-center py-4">
                    <Briefcase className="h-16 w-16 text-slate-200" />
                  </div>
                  {pekerjaanData.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">{item.label}</span>
                        <span className="font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="pendidikan" className="space-y-4">
                  <div className="flex flex-col gap-4">
                    {pendidikanData.map((item, idx) => (
                      <EduItem key={idx} label={item.label} count={item.count} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

        </div>

        {/* DATA DISABILITAS & BANTUAN */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 bg-slate-50 border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">Sebaran Per Wilayah (RW)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {wilayahData.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:border-[#0B3D2E] transition-colors">
                    <div className="text-xs text-slate-500 uppercase font-bold">{item.rw}</div>
                    <div className="text-lg font-bold text-[#0B3D2E] mt-1">{item.count}</div>
                    <div className="text-[10px] text-slate-400">Jiwa</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0B3D2E] text-white border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-amber-400" />
                Penyandang Disabilitas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Fisik</span>
                <span className="font-bold text-amber-400">12 Jiwa</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Sensorik (Netra/Rungu)</span>
                <span className="font-bold text-amber-400">8 Jiwa</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Intelektual</span>
                <span className="font-bold text-amber-400">5 Jiwa</span>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const StatCard = ({ title, value, icon, color, textColor = "text-white", subtext }) => (
  <Card className={`${color} border-none shadow-md hover:scale-105 transition-transform duration-300`}>
    <CardContent className="p-6 flex items-center justify-between">
      <div>
        <p className={`text-sm font-medium ${textColor} opacity-90 mb-1`}>{title}</p>
        <h3 className={`text-3xl font-extrabold ${textColor}`}>{value.toLocaleString('id-ID')}</h3>
        <span className={`text-xs ${textColor} opacity-75`}>{subtext}</span>
      </div>
      <div className={`p-3 rounded-full bg-white/20 backdrop-blur-sm`}>
        {icon}
      </div>
    </CardContent>
  </Card>
);

const EduItem = ({ label, count }) => (
  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-white rounded-full border border-slate-200">
        <GraduationCap className="h-4 w-4 text-[#0B3D2E]" />
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
    <Badge variant="secondary" className="bg-slate-200 text-slate-700">{count}</Badge>
  </div>
);

export default DataPendudukPage;