import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";
import LiveChatWidget from "./components/LiveChatWidget";

import SejarahPage from "./pages/SejarahPage";
import VisiMisiPage from "./pages/VisiMisiPage";
import GeografisPage from "./pages/GeografisPage";
import DataPendudukPage from "./pages/DataPendudukPage";
import BeritaPage from "./pages/informasi/BeritaPage";
import BeritaDetailPage from "./pages/public/BeritaDetailPage";
import BeritaKesehatanPage from "./pages/berita/BeritaKesehatanPage";
import StrukturOrganisasiPage from "./pages/StrukturOrganisasiPage";
import PelayananAdministrasiPage from "./pages/PelayananAdministrasiPage";
import TanahPage from "./pages/administrasi/TanahPage";
import PelayananKependudukanPage from "./pages/PelayananKependudukanPage";
import KeteranganKependudukanPage from "./pages/kependudukan/KeteranganKependudukanPage";
import StatusPerkawinanPage from "./pages/administrasi/StatusPerkawinanPage";
import PajakAsetPage from "./pages/administrasi/PajakAsetPage";
import PernyataanHukumWarisanPage from "./pages/administrasi/PernyataanHukumWarisanPage";
import WargaNegaraAsingPage from "./pages/administrasi/WargaNegaraAsingPage";
import DomisiliWargaLembagaPage from "./pages/kependudukan/DomisiliWargaLembagaPage";
import PelayananUmumPage from "./pages/PelayananUmumPage";
import RtRwPage from "./pages/pemerintahan/RtRwPage";
import LmkPage from "./pages/pemerintahan/LmkPage";
import FkdmPage from "./pages/pemerintahan/FkdmPage";
import KegiatanKesraPage from "./pages/kesejahteraan/KegiatanKesraPage";
import PanganMurahPage from "./pages/kesejahteraan/PanganMurahPage";
import DasawismaPage from "./pages/kesejahteraan/DasawismaPage";
import KegiatanEkbangPage from "./pages/ekbang/KegiatanEkbangPage";
import PelatihanPage from "./pages/ekbang/PelatihanPage";
import PenataanKawasanPage from "./pages/ekbang/PenataanKawasanPage";
import PekerjaanUsahaPage from "./pages/layanan/umum/PekerjaanUsahaPage";
import FasilitasPage from "./pages/informasi/FasilitasPage";
import PendidikanPage from "./pages/informasi/PendidikanPage";
import OrganisasiPage from "./pages/informasi/OrganisasiPage";
import JumantikPage from "./pages/informasi/JumantikPage";
import DataBencanaPage from "./pages/informasi/DataBencanaPage";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [startHumanMode, setStartHumanMode] = useState(false);
  const [chatTopic, setChatTopic] = useState("");

  const handleOpenChatStaff = (topic = "Layanan Umum") => {
    setIsChatOpen(true);
    setStartHumanMode(true);
    setChatTopic(topic);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeSection />
            </>
          }
        />

        <Route path="/sejarah" element={<SejarahPage />} />
        <Route path="/visi-misi" element={<VisiMisiPage />} />
        <Route path="/geografis" element={<GeografisPage />} />
        <Route path="/data-penduduk" element={<DataPendudukPage />} />
        <Route
          path="/struktur-organisasi"
          element={<StrukturOrganisasiPage />}
        />

        <Route
          path="/layanan/administrasi"
          element={
            <PelayananAdministrasiPage onConnectStaff={handleOpenChatStaff} />
          }
        />

        <Route path="/layanan/administrasi/tanah" element={<TanahPage />} />

        <Route
          path="/layanan/kependudukan"
          element={
            <PelayananKependudukanPage onConnectStaff={handleOpenChatStaff} />
          }
        />

        <Route
          path="/layanan/kependudukan/keterangan"
          element={<KeteranganKependudukanPage />}
        />
        <Route
          path="/layanan/administrasi/status-perkawinan"
          element={<StatusPerkawinanPage />}
        />
        <Route
          path="/layanan/administrasi/pajak-aset"
          element={<PajakAsetPage />}
        />
        <Route
          path="/layanan/administrasi/pernyataan-hukum-warisan"
          element={<PernyataanHukumWarisanPage />}
        />
        <Route
          path="/layanan/administrasi/warga-negara-asing"
          element={<WargaNegaraAsingPage />}
        />
        <Route
          path="/layanan/kependudukan/domisili"
          element={<DomisiliWargaLembagaPage />}
        />

        <Route
          path="/layanan/pelayanan-umum"
          element={<PelayananUmumPage onConnectStaff={handleOpenChatStaff} />}
        />

        <Route
          path="/layanan/umum/pekerjaan-usaha"
          element={<PekerjaanUsahaPage />}
        />

        <Route
          path="/pemerintahan/rt-rw"
          element={<RtRwPage onConnectStaff={handleOpenChatStaff} />}
        />

        <Route
          path="/kesejahteraan/kegiatan-kesra"
          element={<KegiatanKesraPage onConnectStaff={handleOpenChatStaff} />}
        />

        <Route
          path="/ekonomi-pembangunan/kegiatan-ekbang"
          element={<KegiatanEkbangPage onConnectStaff={handleOpenChatStaff} />}
        />

        <Route
          path="/ekonomi-pembangunan/pelatihan"
          element={<PelatihanPage />}
        />
        <Route
          path="/ekonomi-pembangunan/penataan-kawasan"
          element={<PenataanKawasanPage />}
        />

        <Route
          path="/kesejahteraan/pangan-murah"
          element={<PanganMurahPage />}
        />
        <Route path="/kesejahteraan/dasawisma" element={<DasawismaPage />} />
        <Route path="/pemerintahan/lmk" element={<LmkPage />} />
        <Route path="/pemerintahan/fkdm" element={<FkdmPage />} />
        <Route path="/berita/kesehatan" element={<BeritaKesehatanPage />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/berita/detail/:id" element={<BeritaDetailPage />} />
        <Route path="/informasi/fasilitas" element={<FasilitasPage />} />
        <Route path="/informasi/pendidikan" element={<PendidikanPage />} />
        <Route path="/informasi/organisasi" element={<OrganisasiPage />} />
        <Route path="/informasi/jumantik" element={<JumantikPage />} />
        <Route path="/informasi/data-bencana" element={<DataBencanaPage />} />
      </Routes>

      <Footer />

      <LiveChatWidget
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
        startHumanMode={startHumanMode}
        onResetHumanMode={() => setStartHumanMode(false)}
        chatTopic={chatTopic}
      />
    </div>
  );
}

export default App;
