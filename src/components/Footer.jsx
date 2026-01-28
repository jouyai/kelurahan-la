import React from 'react';
import { Link } from 'react-router-dom';

// --- SHADCN COMPONENTS ---
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// --- ICONS ---
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B3D2E] text-white font-sans border-t border-[#0d4635]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* KOLOM 1: BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo_kel.png"
                alt="Logo"
                className="h-14 w-auto"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div>
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest leading-none mb-1">Kelurahan</h3>
                <h3 className="text-xl font-extrabold text-white leading-none">Lenteng Agung</h3>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Website resmi pemerintah Kelurahan Lenteng Agung. Mewujudkan pelayanan publik yang transparan, akuntabel, dan prima menuju masyarakat yang sejahtera.
            </p>
          </div>

          {/* KOLOM 2: JELAJAH */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg border-b-2 border-amber-500 inline-block pb-1">Jelajah</h4>
            <ul className="space-y-3 text-sm">
              <li><FooterLink to="/">Beranda</FooterLink></li>
              <li><FooterLink to="/profil/sejarah">Sejarah Wilayah</FooterLink></li>
              <li><FooterLink to="/profil/struktur">Perangkat Kelurahan</FooterLink></li>
              <li><FooterLink to="/layanan/umum">Layanan Online</FooterLink></li>
              <li><FooterLink to="/berita">Kabar Berita</FooterLink></li>
              <li><FooterLink to="/pengaduan">Pengaduan Warga</FooterLink></li>
            </ul>
          </div>

          {/* KOLOM 3: KONTAK */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg border-b-2 border-amber-500 inline-block pb-1">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:text-amber-300 transition-colors" />
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  Jl. Agung Raya No. 1, Lenteng Agung, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12610
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 group-hover:text-amber-300 transition-colors" />
                <span className="text-slate-300 group-hover:text-white transition-colors">(021) 781-2345</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 group-hover:text-amber-300 transition-colors" />
                <span className="text-slate-300 group-hover:text-white transition-colors">admin@lentengagung.go.id</span>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: JAM OPERASIONAL */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-lg border-b-2 border-amber-500 inline-block pb-1">Jam Pelayanan</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex justify-between items-center border-b border-[#1a5542] pb-2">
                <span>Senin - Kamis</span>
                <span className="font-bold text-white">07:30 - 16:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#1a5542] pb-2">
                <span>Jumat</span>
                <span className="font-bold text-white">07:30 - 16:30</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Sabtu - Minggu</span>
                <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">Tutup</span>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="my-10 bg-[#1a5542]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Kelurahan Lenteng Agung. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Links placeholder clean up */}
            <span className="cursor-default">Kebijakan Privasi</span>
            <span className="cursor-default">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-slate-300 hover:text-amber-400 hover:translate-x-1 transition-all block py-1">
    {children}
  </Link>
);

const SocialButton = ({ icon, href }) => (
  <Button variant="outline" size="icon" className="h-9 w-9 bg-[#082f23] border-[#1a5542] hover:bg-amber-500 hover:border-amber-500 hover:text-[#0B3D2E] transition-all text-slate-300 rounded-full" asChild>
    <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  </Button>
);

export default Footer;