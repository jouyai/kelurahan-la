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
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
            {/* LEFT: LOGO + TITLE */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm overflow-hidden">
                <img
                  src="/logo_kel.png"
                  alt="Logo DKI Jakarta"
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-semibold">
                  Kelurahan Lenteng Agung
                </p>
                <p className="text-xs text-gray-200">
                  Kota Administrasi Jakarta Selatan
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
              <Link
                to="/"
                className="hover:text-gray-200 transition-colors"
              >
                Home
              </Link>

              {/* Profil Kelurahan */}
              <DesktopDropdown label="Profil Kelurahan">
                <DropdownLink to="/sejarah">Sejarah</DropdownLink>
                <DropdownLink to="/visi-misi">Visi &amp; Misi</DropdownLink>
                <DropdownLink to="/geografis">Geografis</DropdownLink>
                <DropdownLink to="/struktur-organisasi">
                  Struktur Organisasi
                </DropdownLink>
                <DropdownLink to="/data-penduduk">
                  Data Penduduk
                </DropdownLink>
              </DesktopDropdown>

              {/* Layanan Publik */}
              <DesktopDropdown label="Layanan Publik">
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

              {/* Informasi */}
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
                  Organisasi
                </DropdownLink>
                <DropdownLink to="/informasi/jumantik">
                  Jumantik
                </DropdownLink>
                <DropdownLink to="/informasi/data-bencana">
                  Data Bencana
                </DropdownLink>
                <DropdownLink to="/informasi/pemerintahan">
                  Pemerintahan
                </DropdownLink>
                <DropdownLink to="/informasi/kesejahteraan-masyarakat">
                  Kesejahteraan Masyarakat
                </DropdownLink>
                <DropdownLink to="/informasi/ekonomi-pembangunan">
                  Ekonomi &amp; Pembangunan
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
            <div className="flex items-center gap-2 lg:hidden">
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

          {/* MOBILE PANEL */}
          <Disclosure.Panel className="border-t border-white/10 lg:hidden">
            <div className="space-y-1 px-4 pb-4 pt-3 text-sm font-medium">
              <MobileLink to="/">Home</MobileLink>

              {/* Profil Kelurahan */}
              <MobileGroup label="Profil Kelurahan">
                <MobileSubLink to="/sejarah">Sejarah</MobileSubLink>
                <MobileSubLink to="/visi-misi">Visi &amp; Misi</MobileSubLink>
                <MobileSubLink to="/geografis">Geografis</MobileSubLink>
                <MobileSubLink to="/struktur-organisasi">
                  Struktur Organisasi
                </MobileSubLink>
                <MobileSubLink to="/data-penduduk">
                  Data Penduduk
                </MobileSubLink>
              </MobileGroup>

              {/* Layanan Publik */}
              <MobileGroup label="Layanan Publik">
                <MobileSubLink to="/layanan/administrasi">
                  Pelayanan Administrasi
                </MobileSubLink>
                <MobileSubLink to="/layanan/kependudukan">
                  Pelayanan Kependudukan
                </MobileSubLink>
                <MobileSubLink to="/layanan/umum">
                  Pelayanan Umum
                </MobileSubLink>
              </MobileGroup>

              {/* Informasi */}
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
                <MobileSubLink to="/informasi/pemerintahan">
                  Pemerintahan
                </MobileSubLink>
                <MobileSubLink to="/informasi/kesejahteraan-masyarakat">
                  Kesejahteraan Masyarakat
                </MobileSubLink>
                <MobileSubLink to="/informasi/ekonomi-pembangunan">
                  Ekonomi &amp; Pembangunan
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
   DESKTOP DROPDOWN
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
        <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function DropdownLink({ to, children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to={to}
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block w-full px-4 py-2 text-left text-sm"
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
}

function DropdownButton({ children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          type="button"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block w-full px-4 py-2 text-left text-sm"
          )}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
}

/* =========================
   MOBILE HELPERS
   ========================= */

function MobileLink({ to, children }) {
  if (!to) {
    return (
      <div className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10">
        {children}
      </div>
    );
  }

  // Auto-close saat diklik
  return (
    <Disclosure.Button
      as={Link}
      to={to}
      className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
    >
      {children}
    </Disclosure.Button>
  );
}

function MobileGroup({ label, children }) {
  return (
    <div className="mt-2">
      <p className="px-3 text-[13px] font-semibold uppercase tracking-wide text-white/80">
        {label}
      </p>
      <div className="mt-1 space-y-1">{children}</div>
    </div>
  );
}

function MobileSubLink({ to, children }) {
  if (!to) {
    return (
      <div className="rounded-md px-5 py-1.5 text-sm text-white/90 hover:bg-white/10">
        {children}
      </div>
    );
  }

  // Auto-close juga
  return (
    <Disclosure.Button
      as={Link}
      to={to}
      className="block rounded-md px-5 py-1.5 text-sm text-white/90 hover:bg-white/10"
    >
      {children}
    </Disclosure.Button>
  );
}
