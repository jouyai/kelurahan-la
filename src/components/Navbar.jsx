import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="w-full bg-[#06452F] text-white">
      {({ open }) => (
        <>
          {/* TOP BAR */}
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 lg:px-6">
            {/* LEFT: LOGO + TITLE */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-sm overflow-hidden">
                <img
                  src="/logo_kel.png"
                  alt="Logo DKI Jakarta"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-tight hidden sm:block">
                <p className="text-base md:text-lg font-semibold">
                  Kelurahan Lenteng Agung
                </p>
                <p className="text-[10px] md:text-xs text-gray-200">
                  Kota Administrasi Jakarta Selatan
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU (REORGANIZED) */}
            <div className="hidden items-center gap-4 text-xs lg:text-sm font-medium xl:flex">
              <Link
                to="/"
                className="hover:text-gray-200 transition-colors"
              >
                Home
              </Link>

              {/* 1. Profil & Lembaga (Gabungan) */}
              <DesktopDropdown label="Profil & Lembaga">
                <DropdownHeader>Profil Kelurahan</DropdownHeader>
                <DropdownLink to="/sejarah">Sejarah</DropdownLink>
                <DropdownLink to="/visi-misi">Visi &amp; Misi</DropdownLink>
                <DropdownLink to="/geografis">Geografis</DropdownLink>
                <DropdownLink to="/struktur-organisasi">
                  Struktur Organisasi
                </DropdownLink>
                <DropdownLink to="/data-penduduk">
                  Data Penduduk
                </DropdownLink>
                
                <div className="my-1 border-t border-gray-100" />
                
                <DropdownHeader>Kelembagaan</DropdownHeader>
                <DropdownLink to="/pemerintahan/rt-rw">
                  RT &amp; RW
                </DropdownLink>
                <DropdownLink to="/pemerintahan/lmk">
                  LMK
                </DropdownLink>
                <DropdownLink to="/pemerintahan/fkdm">
                  FKDM
                </DropdownLink>
              </DesktopDropdown>

              {/* 2. Layanan Publik */}
              <DesktopDropdown label="Layanan">
                <DropdownLink to="/layanan/administrasi">
                  Pelayanan Administrasi
                </DropdownLink>
                <DropdownLink to="/layanan/kependudukan">
                  Pelayanan Kependudukan
                </DropdownLink>
                <DropdownLink to="/layanan/pelayanan-umum">
                  Pelayanan Umum
                </DropdownLink>
              </DesktopDropdown>

              {/* 3. Program Kerja (Gabungan Kesra & Ekbang) */}
              <DesktopDropdown label="Program Kerja">
                <DropdownHeader>Kesejahteraan (Kesra)</DropdownHeader>
                <DropdownLink to="/kesejahteraan/kegiatan-kesra">
                  Kegiatan Kesra
                </DropdownLink>
                <DropdownLink to="/kesejahteraan/pangan-murah">
                  Program Pangan Murah
                </DropdownLink>
                <DropdownLink to="/kesejahteraan/dasawisma">
                  Kegiatan Dasawisma
                </DropdownLink>

                <div className="my-1 border-t border-gray-100" />

                <DropdownHeader>Ekonomi &amp; Pembangunan</DropdownHeader>
                <DropdownLink to="/ekonomi-pembangunan/kegiatan-ekbang">
                  Kegiatan Ekbang
                </DropdownLink>
                <DropdownLink to="/ekonomi-pembangunan/pelatihan">
                  Pelatihan Masyarakat
                </DropdownLink>
                <DropdownLink to="/ekonomi-pembangunan/penataan-kawasan">
                  Penataan Kawasan
                </DropdownLink>
              </DesktopDropdown>

              {/* 4. Informasi */}
              <DesktopDropdown label="Informasi">
                <DropdownLink to="/berita">Berita Kelurahan</DropdownLink>
                <DropdownLink to="/berita/kesehatan">
                  Kesehatan
                </DropdownLink>
                <DropdownLink to="/informasi/fasilitas">
                  Fasilitas
                </DropdownLink>
                <DropdownLink to="/informasi/pendidikan">
                  Pendidikan
                </DropdownLink>
                <DropdownLink to="/informasi/organisasi">
                  Organisasi Kemasyarakatan
                </DropdownLink>
                <DropdownLink to="/informasi/jumantik">
                  Jumantik
                </DropdownLink>
                <DropdownLink to="/informasi/data-bencana">
                  Data Bencana
                </DropdownLink>
              </DesktopDropdown>

              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>

            {/* MOBILE: SEARCH + HAMBURGER */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>

              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1.5 hover:bg-white/10 focus:outline-none">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* MOBILE PANEL (REORGANIZED) */}
          <Disclosure.Panel className="border-t border-white/10 xl:hidden">
            <div className="space-y-1 px-4 pb-4 pt-3 text-sm font-medium">
              <MobileLink to="/">Home</MobileLink>

              {/* 1. Profil & Lembaga */}
              <MobileGroup label="Profil & Lembaga">
                <MobileSubLink to="/sejarah">Sejarah</MobileSubLink>
                <MobileSubLink to="/visi-misi">Visi &amp; Misi</MobileSubLink>
                <MobileSubLink to="/geografis">Geografis</MobileSubLink>
                <MobileSubLink to="/struktur-organisasi">
                  Struktur Organisasi
                </MobileSubLink>
                <MobileSubLink to="/data-penduduk">
                  Data Penduduk
                </MobileSubLink>
                <MobileSubLink to="/pemerintahan/rt-rw">
                  Kelembagaan: RT &amp; RW
                </MobileSubLink>
                <MobileSubLink to="/pemerintahan/lmk">
                  Kelembagaan: LMK
                </MobileSubLink>
                <MobileSubLink to="/pemerintahan/fkdm">
                  Kelembagaan: FKDM
                </MobileSubLink>
              </MobileGroup>

              {/* 2. Layanan Publik */}
              <MobileGroup label="Layanan Publik">
                <MobileSubLink to="/layanan/administrasi">
                  Pelayanan Administrasi
                </MobileSubLink>
                <MobileSubLink to="/layanan/kependudukan">
                  Pelayanan Kependudukan
                </MobileSubLink>
                <MobileSubLink to="/layanan/pelayanan-umum">
                  Pelayanan Umum
                </MobileSubLink>
              </MobileGroup>

              {/* 3. Program Kerja */}
              <MobileGroup label="Program Kerja">
                {/* Kesra */}
                <MobileSubLink to="/kesejahteraan/kegiatan-kesra">
                  Kesra: Kegiatan Rutin
                </MobileSubLink>
                <MobileSubLink to="/kesejahteraan/pangan-murah">
                  Kesra: Pangan Murah
                </MobileSubLink>
                <MobileSubLink to="/kesejahteraan/dasawisma">
                  Kesra: Dasawisma
                </MobileSubLink>
                {/* Ekbang */}
                <MobileSubLink to="/ekonomi-pembangunan/kegiatan-ekbang">
                  Ekbang: Kegiatan Fisik
                </MobileSubLink>
                <MobileSubLink to="/ekonomi-pembangunan/pelatihan">
                  Ekbang: Pelatihan
                </MobileSubLink>
                <MobileSubLink to="/ekonomi-pembangunan/penataan-kawasan">
                  Ekbang: Penataan Kawasan
                </MobileSubLink>
              </MobileGroup>

              {/* 4. Informasi */}
              <MobileGroup label="Informasi">
                <MobileSubLink to="/berita">
                  Berita Kelurahan
                </MobileSubLink>
                <MobileSubLink to="/informasi/kesehatan">
                  Kesehatan
                </MobileSubLink>
                <MobileSubLink to="/informasi/fasilitas">
                  Fasilitas
                </MobileSubLink>
                <MobileSubLink to="/informasi/pendidikan">
                  Pendidikan
                </MobileSubLink>
                <MobileSubLink to="/informasi/organisasi">
                  Organisasi
                </MobileSubLink>
                <MobileSubLink to="/informasi/jumantik">
                  Jumantik
                </MobileSubLink>
                <MobileSubLink to="/informasi/data-bencana">
                  Data Bencana
                </MobileSubLink>
              </MobileGroup>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

/* =========================
   DESKTOP DROPDOWN COMPONENTS
   ========================= */

function DesktopDropdown({ label, children }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-1 text-sm font-medium hover:text-gray-200 focus:outline-none">
        {label}
        <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-64 origin-top-right rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/5 focus:outline-none max-h-[80vh] overflow-y-auto">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function DropdownHeader({ children }) {
  return (
    <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
      {children}
    </div>
  );
}

function DropdownLink({ to, children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to={to}
          className={classNames(
            active ? "bg-gray-50 text-[#06452F]" : "text-gray-700",
            "block w-full px-4 py-2 text-left text-sm transition-colors"
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
}

/* =========================
   MOBILE COMPONENTS
   ========================= */

function MobileLink({ to, children }) {
  if (!to) {
    return (
      <div className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10">
        {children}
      </div>
    );
  }
  return (
    <Disclosure.Button
      as={Link}
      to={to}
      className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10 transition-colors"
    >
      {children}
    </Disclosure.Button>
  );
}

function MobileGroup({ label, children }) {
  return (
    <div className="mt-4 first:mt-2">
      <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-[#8FC1B5] mb-1">
        {label}
      </p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function MobileSubLink({ to, children }) {
  if (!to) {
    return (
      <div className="rounded-md px-5 py-2 text-sm text-white/90 hover:bg-white/10">
        {children}
      </div>
    );
  }
  return (
    <Disclosure.Button
      as={Link}
      to={to}
      className="block rounded-md px-5 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-white/30"
    >
      {children}
    </Disclosure.Button>
  );
}