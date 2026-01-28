import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

// --- SHADCN UI IMPORTS ---
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

// --- ICONS ---
import {
  ArrowLeft,
  Send,
  Search,
  AlertCircle,
  CheckCircle2,
  Clock,
  MessageSquare,
  FileText,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLiveChat } from "../context/LiveChatContext";


const PengaduanPage = () => {
  const { openChat } = useLiveChat();
  const contentLoading = false;
  // State Utama
  const [loading, setLoading] = useState(false);
  const [riwayat, setRiwayat] = useState([]);

  // State Modal Sukses
  const [showModal, setShowModal] = useState(false);
  const [currentTicketId, setCurrentTicketId] = useState('');

  // State Pencarian Tiket
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');

  // State Form
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    kategori: 'Pelayanan Publik',
    laporan: ''
  });

  const kategoriList = [
    'Pelayanan Publik',
    'Administrasi Kependudukan',
    'Infrastruktur & Lingkungan',
    'Keamanan & Ketertiban',
    'Lainnya'
  ];

  // --- FETCH RIWAYAT ---
  const fetchRiwayat = async () => {
    try {
      const { data, error } = await supabase
        .from('pengaduan')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      if (data) setRiwayat(data);
    } catch (error) {
      console.log('Mode Offline/Dummy Data');
    }
  };

  useEffect(() => {
    fetchRiwayat();
  }, []);

  // --- PENCARIAN TIKET ---
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    setSearchLoading(true);
    setSearchResult(null);
    setSearchMessage('');

    try {
      const { data, error } = await supabase
        .from('pengaduan')
        .select('*')
        .eq('ticket_id', searchId.trim())
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (data) {
        setSearchResult(data);
      } else {
        setSearchMessage('Nomor tiket tidak ditemukan. Mohon periksa kembali.');
      }
    } catch (err) {
      console.error(err);
      setSearchMessage('Terjadi kesalahan saat mencari data.');
    } finally {
      setSearchLoading(false);
    }
  };

  const handleResetSearch = () => {
    setSearchId('');
    setSearchResult(null);
    setSearchMessage('');
  }

  // --- SUBMIT FORM ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle khusus untuk Select Shadcn
  const handleCategoryChange = (value) => {
    setFormData({ ...formData, kategori: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Generate 6 digit Angka Acak
    const ticketId = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      const { error } = await supabase
        .from('pengaduan')
        .insert([{
          ticket_id: ticketId,
          nama_pelapor: formData.nama,
          email: formData.email,
          kategori: formData.kategori,
          laporan: formData.laporan,
          status: 'Menunggu'
        }]);

      if (error) throw error;

      setCurrentTicketId(ticketId);
      setShowModal(true);
      setFormData({ nama: '', email: '', kategori: 'Pelayanan Publik', laporan: '' });
      fetchRiwayat();

    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim pengaduan. Pastikan koneksi internet lancar.');
    } finally {
      setLoading(false);
    }
  };

  // Helper Warna Status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Selesai': return <Badge className="bg-green-600 hover:bg-green-700">Selesai</Badge>;
      case 'Diproses': return <Badge className="bg-amber-500 hover:bg-amber-600">Diproses</Badge>;
      default: return <Badge variant="secondary" className="bg-slate-200 text-slate-700">Menunggu</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">

      {/* --- HERO SECTION --- */}
      <div className="bg-[#0B3D2E] text-white py-12 mb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="outline" className="border-amber-400 text-amber-400 mb-4 px-3 py-1 bg-[#0B3D2E]/50 backdrop-blur-sm">
            Layanan Warga
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pusat Pengaduan & Aspirasi Warga
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-light text-justify md:text-center">
            Suara Anda adalah kontribusi berharga bagi kemajuan wilayah kami. Sampaikan laporan, saran, atau keluhan Anda secara transparan melalui kanal resmi Kelurahan Lenteng Agung demi pelayanan yang lebih baik.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* --- KOLOM KIRI: FORM PENGADUAN --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" asChild className="pl-0 text-slate-500 hover:text-[#0B3D2E]">
              <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Kembali</Link>
            </Button>
          </div>

          <Card className="border-t-4 border-t-[#0B3D2E] shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">Formulir Pengaduan Digital</CardTitle>
              <CardDescription className="text-justify">
                Silakan melengkapi formulir di bawah ini dengan data yang valid. Keamanan identitas and kerahasiaan data pelapor merupakan prioritas utama kami dalam memproses setiap laporan yang masuk.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <Input
                    name="nama"
                    placeholder="Sesuai KTP"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-[#0B3D2E]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email / Kontak</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="email@contoh.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-[#0B3D2E]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Kategori Laporan</label>
                  <Select onValueChange={handleCategoryChange} defaultValue={formData.kategori}>
                    <SelectTrigger className="focus:ring-[#0B3D2E]">
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {kategoriList.map((kat) => (
                        <SelectItem key={kat} value={kat}>{kat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Isi Laporan</label>
                  <Textarea
                    name="laporan"
                    placeholder="Jelaskan detail masalah, lokasi, dan waktu kejadian..."
                    rows={5}
                    value={formData.laporan}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-[#0B3D2E]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white font-bold h-12" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">Mengirim...</span>
                  ) : (
                    <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Kirim Laporan</span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* --- KOLOM KANAN: TRACKING & RIWAYAT --- */}
        <div className="space-y-8">

          {/* WIDGET WA FAST RESPONSE */}
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-amber-800 text-lg">
                <MessageSquare className="h-5 w-5" /> Butuh Respon Cepat?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-amber-900/80">
                Untuk keadaan darurat atau pertanyaan singkat, Anda dapat menghubungi petugas piket kami via WhatsApp.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold" onClick={() => openChat("Bantuan Cepat / Darurat", true)}>
                Chat Petugas Sekarang
              </Button>
            </CardContent>
          </Card>

          {/* WIDGET CARI TIKET */}
          <Card className="shadow-md bg-[#0B3D2E] text-white border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-400">
                <Search className="h-5 w-5" /> Cek Status Laporan
              </CardTitle>
              <CardDescription className="text-slate-300">
                Masukkan Nomor Tiket Anda untuk melihat progress.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  placeholder="Contoh: 829012"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-amber-400"
                />
                <Button type="submit" variant="secondary" className="bg-amber-500 hover:bg-amber-600 text-[#0B3D2E] font-bold" disabled={searchLoading}>
                  {searchLoading ? '...' : 'Cari'}
                </Button>
              </form>

              {/* HASIL PENCARIAN */}
              {searchMessage && (
                <Alert variant="destructive" className="mt-4 bg-red-500/10 border-red-500/50 text-red-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{searchMessage}</AlertDescription>
                </Alert>
              )}

              {searchResult && (
                <div className="mt-6 bg-white rounded-lg p-4 text-slate-800 shadow-lg animate-in fade-in zoom-in duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs text-slate-500 block uppercase tracking-wider">Nomor Tiket</span>
                      <span className="text-2xl font-mono font-bold text-[#0B3D2E]">#{searchResult.ticket_id}</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleResetSearch} className="h-6 w-6 p-0 rounded-full hover:bg-slate-100">
                      x
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-slate-500">Status</span>
                      {getStatusBadge(searchResult.status)}
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-slate-500">Kategori</span>
                      <span className="font-medium">{searchResult.kategori}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-100 italic text-slate-600">
                      "{searchResult.laporan}"
                    </div>

                    {searchResult.tanggapan ? (
                      <div className="bg-blue-50 p-3 rounded border border-blue-100">
                        <p className="text-xs font-bold text-blue-700 mb-1 flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" /> Tanggapan Admin:
                        </p>
                        <p className="text-slate-700">{searchResult.tanggapan}</p>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 text-center py-2">Belum ada tanggapan.</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* LIST PENGADUAN TERBARU */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0B3D2E]" /> Laporan Terkini
            </h3>

            <div className="space-y-3">
              {riwayat.length === 0 ? (
                <div className="text-center py-8 bg-white rounded-lg border border-dashed">
                  <p className="text-slate-400 text-sm">Belum ada data pengaduan.</p>
                </div>
              ) : (
                riwayat.map((item, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-all border-l-4 border-l-slate-300 hover:border-l-[#0B3D2E]">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="font-mono text-slate-500 border-slate-300">
                          #{item.ticket_id}
                        </Badge>
                        {getStatusBadge(item.status)}
                      </div>
                      <h4 className="font-semibold text-slate-800 text-sm mb-1">{item.kategori}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-2">"{item.laporan}"</p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        {new Date(item.created_at).toLocaleDateString('id-ID')}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

        </div>
      </div>

      {/* --- MODAL SUKSES (SHADCN DIALOG) --- */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md" aria-describedby={undefined}>
          <DialogHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-bold text-[#0B3D2E]">Laporan Terkirim!</DialogTitle>
            <DialogDescription className="text-center text-slate-600">
              Terima kasih atas laporan Anda. Simpan nomor tiket di bawah ini untuk memantau status penyelesaian.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-100 border-dashed">
            <span className="text-4xl font-mono font-bold text-[#0B3D2E] tracking-widest selection:bg-amber-200">
              {currentTicketId}
            </span>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button
              type="button"
              className="bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 w-full sm:w-auto px-8"
              onClick={() => setShowModal(false)}
            >
              Saya Mengerti
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default PengaduanPage;