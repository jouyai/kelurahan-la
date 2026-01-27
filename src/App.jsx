import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChatWidget from './components/LiveChatWidget';

// PAGES - PROFIL
import SejarahPage from './pages/profil/SejarahPage';
import VisiMisiPage from './pages/profil/VisiMisiPage';
import GeografisPage from './pages/profil/GeografisPage';
import StrukturOrganisasiPage from './pages/profil/StrukturOrganisasiPage';
import DataPendudukPage from './pages/profil/DataPendudukPage';

// PAGES - KELEMBAGAAN
import RtRwPage from './pages/kelembagaan/RtRwPage';
import LmkPage from './pages/kelembagaan/LmkPage';
import FkdmPage from './pages/kelembagaan/FkdmPage';

// PAGES - LAYANAN ADMINISTRASI
import PelayananAdministrasiPage from './pages/layanan/administrasi/PelayananAdministrasiPage';
import TanahPage from './pages/layanan/administrasi/TanahPage';
import StatusPerkawinanPage from './pages/layanan/administrasi/StatusPerkawinanPage';
import PernyataanHukumWarisanPage from './pages/layanan/administrasi/PernyataanHukumWarisanPage';
import PajakAsetPage from './pages/layanan/administrasi/PajakAsetPage';
import WargaNegaraAsingPage from './pages/layanan/administrasi/WargaNegaraAsingPage';

// PAGES - LAYANAN KEPENDUDUKAN
import PelayananKependudukanPage from './pages/layanan/kependudukan/PelayananKependudukanPage';
import DomisiliWargaLembagaPage from './pages/layanan/kependudukan/DomisiliWargaLembagaPage';
import KeteranganKependudukanPage from './pages/layanan/kependudukan/KeteranganKependudukanPage';

// PAGES - LAYANAN UMUM
import PelayananUmumPage from './pages/layanan/umum/PelayananUmumPage';
import PekerjaanUsahaPage from './pages/layanan/umum/PekerjaanUsahaPage';
import ServiceDetailPage from './pages/layanan/ServiceDetailPage';

// PAGES - PROGRAM KERJA (KESRA & EKBANG)
import KegiatanKesraPage from './pages/program/kesra/KegiatanKesraPage';
import PanganMurahPage from './pages/program/kesra/PanganMurahPage';
import DasawismaPage from './pages/program/kesra/DasawismaPage';
import KegiatanEkbangPage from './pages/program/ekbang/KegiatanEkbangPage';
import PelatihanPage from './pages/program/ekbang/PelatihanPage';
import PenataanKawasanPage from './pages/program/ekbang/PenataanKawasanPage';

// PAGES - INFORMASI & BERITA
import BeritaPage from './pages/informasi/berita/BeritaPage';
import BeritaKesehatanPage from './pages/informasi/berita/BeritaKesehatanPage';
import BeritaDetailPage from './pages/informasi/berita/BeritaDetailPage';
import FasilitasPage from './pages/informasi/FasilitasPage';
import PendidikanPage from './pages/informasi/PendidikanPage';
import OrganisasiPage from './pages/informasi/OrganisasiPage';
import JumantikPage from './pages/informasi/JumantikPage';
import DataBencanaPage from './pages/informasi/DataBencanaPage';

// PAGES - LAINNYA
import PengaduanPage from './pages/PengaduanPage';
import HomeSection from './pages/HomePage';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomeSection />} />

        {/* PROFIL */}
        <Route path="/sejarah" element={<SejarahPage />} />
        <Route path="/visi-misi" element={<VisiMisiPage />} />
        <Route path="/geografis" element={<GeografisPage />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasiPage />} />
        <Route path="/data-penduduk" element={<DataPendudukPage />} />

        {/* KELEMBAGAAN */}
        <Route path="/pemerintahan/rt-rw" element={<RtRwPage />} />
        <Route path="/pemerintahan/lmk" element={<LmkPage />} />
        <Route path="/pemerintahan/fkdm" element={<FkdmPage />} />

        {/* LAYANAN - ADMINISTRASI */}
        <Route path="/layanan/administrasi" element={<PelayananAdministrasiPage />} />
        <Route path="/layanan/administrasi/tanah" element={<TanahPage />} />
        <Route path="/layanan/administrasi/status-perkawinan" element={<StatusPerkawinanPage />} />
        <Route path="/layanan/administrasi/pernyataan-hukum-warisan" element={<PernyataanHukumWarisanPage />} />
        <Route path="/layanan/administrasi/pajak-aset" element={<PajakAsetPage />} />
        <Route path="/layanan/administrasi/warga-negara-asing" element={<WargaNegaraAsingPage />} />
        <Route path="/layanan/administrasi/:id" element={<ServiceDetailPage />} />

        {/* LAYANAN - KEPENDUDUKAN */}
        <Route path="/layanan/kependudukan" element={<PelayananKependudukanPage />} />
        <Route path="/layanan/kependudukan/domisili" element={<DomisiliWargaLembagaPage />} />
        <Route path="/layanan/kependudukan/keterangan" element={<KeteranganKependudukanPage />} />
        <Route path="/layanan/kependudukan/:id" element={<ServiceDetailPage />} />

        {/* LAYANAN - UMUM */}
        <Route path="/layanan/umum" element={<PelayananUmumPage />} />
        <Route path="/layanan/umum/pekerjaan" element={<PekerjaanUsahaPage />} />
        <Route path="/layanan/umum/:id" element={<ServiceDetailPage />} />

        {/* COMPATIBILITY REDIRECTS */}
        <Route path="/layanan/pelayanan-umum" element={<Navigate to="/layanan/umum" replace />} />
        <Route path="/layanan/umum/pekerjaan-usaha" element={<Navigate to="/layanan/umum/pekerjaan" replace />} />

        {/* PROGRAM - KESRA */}
        <Route path="/kesejahteraan/kegiatan-kesra" element={<KegiatanKesraPage />} />
        <Route path="/kesejahteraan/pangan-murah" element={<PanganMurahPage />} />
        <Route path="/kesejahteraan/dasawisma" element={<DasawismaPage />} />

        {/* PROGRAM - EKBANG */}
        <Route path="/ekonomi-pembangunan/kegiatan-ekbang" element={<KegiatanEkbangPage />} />
        <Route path="/ekonomi-pembangunan/pelatihan" element={<PelatihanPage />} />
        <Route path="/ekonomi-pembangunan/penataan-kawasan" element={<PenataanKawasanPage />} />

        {/* INFORMASI */}
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/berita/kesehatan" element={<BeritaKesehatanPage />} />
        <Route path="/berita/detail/:id" element={<BeritaDetailPage />} />
        <Route path="/informasi/fasilitas" element={<FasilitasPage />} />
        <Route path="/informasi/pendidikan" element={<PendidikanPage />} />
        <Route path="/informasi/organisasi" element={<OrganisasiPage />} />
        <Route path="/informasi/jumantik" element={<JumantikPage />} />
        <Route path="/informasi/data-bencana" element={<DataBencanaPage />} />

        {/* FITUR LAIN */}
        <Route path="/pengaduan" element={<PengaduanPage />} />
      </Routes>
      <LiveChatWidget />
      <Footer />
    </>
  );
}

export default App;