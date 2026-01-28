import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- SHADCN UI IMPORTS ---
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "../lib/supabaseClient";

// --- ICONS ---
import { Menu, Search, X, Newspaper, FileText, Loader2, Command } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA MENU ---
const menuItems = [
  {
    title: "Profil & Lembaga",
    items: [
      { label: "Sejarah", href: "/sejarah" },
      { label: "Visi & Misi", href: "/visi-misi" },
      { label: "Geografis", href: "/geografis" },
      { label: "Struktur Kelurahan", href: "/struktur-organisasi" },
      { label: "Data Penduduk", href: "/data-penduduk" },
      { label: "RT & RW", href: "/pemerintahan/rt-rw", group: "Kelembagaan" },
      { label: "LMK", href: "/pemerintahan/lmk", group: "Kelembagaan" },
      { label: "FKDM", href: "/pemerintahan/fkdm", group: "Kelembagaan" },
    ],
  },
  {
    title: "Layanan",
    items: [
      { label: "Pelayanan Administrasi", href: "/layanan/administrasi" },
      { label: "Pelayanan Kependudukan", href: "/layanan/kependudukan" },
      { label: "Pelayanan Umum", href: "/layanan/umum" },
    ],
  },
  {
    title: "Program Kerja",
    items: [
      { label: "Kegiatan Kesra", href: "/kesejahteraan/kegiatan-kesra", group: "Kesra" },
      { label: "Pangan Murah", href: "/kesejahteraan/pangan-murah", group: "Kesra" },
      { label: "Dasawisma", href: "/kesejahteraan/dasawisma", group: "Kesra" },
      { label: "Kegiatan Ekbang", href: "/ekonomi-pembangunan/kegiatan-ekbang", group: "Ekbang" },
      { label: "Pelatihan", href: "/ekonomi-pembangunan/pelatihan", group: "Ekbang" },
      { label: "Penataan Kawasan", href: "/ekonomi-pembangunan/penataan-kawasan", group: "Ekbang" },
    ],
  },
  {
    title: "Informasi",
    items: [
      { label: "Berita Kelurahan", href: "/berita" },
      { label: "Kesehatan", href: "/berita/kesehatan" },
      { label: "Fasilitas", href: "/informasi/fasilitas" },
      { label: "Pendidikan", href: "/informasi/pendidikan" },
      { label: "Organisasi", href: "/informasi/organisasi" },
      { label: "Jumantik", href: "/informasi/jumantik" },
      { label: "Data Bencana", href: "/informasi/data-bencana" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({ news: [], services: [], static: [] });
  const [isSearching, setIsSearching] = useState(false);

  // Keyboard shortcut Ctrl+K / Cmd+K
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Search Logic
  React.useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ news: [], services: [], static: [] });
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsSearching(true);
      try {
        // 1. Search DB News
        const { data: newsData } = await supabase
          .from('berita')
          .select('id, judul, kategori')
          .ilike('judul', `%${searchQuery}%`)
          .limit(3);

        // 2. Search DB Services (Items)
        const { data: servicesData } = await supabase
          .from('items')
          .select('id, title, data')
          .eq('type', 'layanan')
          .ilike('title', `%${searchQuery}%`)
          .limit(3);

        // 3. Search Static Menu Items
        const staticMatches = [];
        menuItems.forEach(group => {
          group.items.forEach(item => {
            if (item.label.toLowerCase().includes(searchQuery.toLowerCase())) {
              staticMatches.push({ ...item, group: group.title });
            }
          });
        });

        setSearchResults({
          news: newsData || [],
          services: (servicesData || []).map(s => ({
            id: s.id,
            label: s.title,
            category: s.data?.kategori,
            // Determine path based on category if possible, fallback to detail
            path: `/layanan/${s.data?.kategori === 'Kependudukan' ? 'kependudukan' : s.data?.kategori === 'Administrasi' ? 'administrasi' : 'umum'}/${s.id}`
          })),
          static: staticMatches.slice(0, 4)
        });
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <nav className="w-full bg-[#0B3D2E] text-white border-b border-white/10 sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center p-1">
            <img
              src="/logo_kel.png"
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="hidden md:block leading-tight">
            <p className="text-sm font-bold tracking-wide">KELURAHAN LENTENG AGUNG</p>
            <p className="text-[10px] text-white/80">Jakarta Selatan</p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>

              {/* HOME LINK (Tanpa Dropdown) */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/20")}>
                    Beranda
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* DROPDOWN MENUS */}
              {menuItems.map((menu, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/20 data-[state=open]:bg-white/20">
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {menu.items.map((item, idx) => (
                        <ListItem key={idx} title={item.label} href={item.href}>
                          {item.group ? <span className="text-xs text-[#0B3D2E] font-semibold">[{item.group}]</span> : ""}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white rounded-full h-9 w-9"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* GLOBAL SEARCH DIALOG */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogContent className="sm:max-w-[550px] p-0 gap-0 border-none shadow-2xl bg-white overflow-hidden top-[20%] translate-y-0">
              <DialogHeader className="p-4 border-b">
                <DialogTitle className="sr-only">Cari Informasi Kelurahan</DialogTitle>
                <div className="flex items-center gap-3 relative">
                  <Search className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    placeholder="Apa yang ingin Anda cari?"
                    className="border-none focus-visible:ring-0 pl-10 h-11 text-base placeholder:text-slate-400 shadow-none bg-slate-50"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {isSearching && <Loader2 className="h-4 w-4 animate-spin text-slate-400 absolute right-3" />}
                </div>
              </DialogHeader>

              <ScrollArea className="max-h-[350px]">
                <div className="p-4 space-y-6">
                  {!searchQuery && (
                    <div className="text-center py-6 text-slate-400">
                      <Command className="h-10 w-10 mx-auto mb-2 opacity-20" />
                      <p className="text-sm">Ketik untuk mencari berita, layanan, atau profil...</p>
                      <div className="flex justify-center gap-2 mt-4">
                        <kbd className="px-2 py-1 bg-slate-100 rounded text-[10px] font-mono border">ESC</kbd>
                        <span className="text-[10px]">untuk batal</span>
                      </div>
                    </div>
                  )}

                  {searchQuery && (
                    <div className="space-y-4">
                      {/* STATIC PAGES */}
                      {searchResults.static.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Halaman & Menu</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {searchResults.static.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.href}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                                onClick={() => setSearchOpen(false)}
                              >
                                <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#0B3D2E]/10 group-hover:text-[#0B3D2E]">
                                  <FileText className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-slate-700">{item.label}</p>
                                  <p className="text-[10px] text-slate-400">{item.group}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SERVICES */}
                      {searchResults.services.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Layanan Publik</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {searchResults.services.map((item) => (
                              <Link
                                key={item.id}
                                to={item.path}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                                onClick={() => setSearchOpen(false)}
                              >
                                <div className="h-8 w-8 rounded bg-amber-50 flex items-center justify-center text-amber-600">
                                  <Search className="h-4 w-4" />
                                </div>
                                <p className="text-sm font-medium text-slate-700">{item.label}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* NEWS */}
                      {searchResults.news.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Berita & Informasi</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {searchResults.news.map((item) => (
                              <Link
                                key={item.id}
                                to={`/berita/${item.id}`}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                                onClick={() => setSearchOpen(false)}
                              >
                                <div className="h-8 w-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">
                                  <Newspaper className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-slate-700 line-clamp-1">{item.judul}</p>
                                  <p className="text-[10px] text-slate-400">{item.kategori}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {searchResults.news.length === 0 && searchResults.services.length === 0 && searchResults.static.length === 0 && !isSearching && (
                        <div className="text-center py-10">
                          <p className="text-sm text-slate-500">Hasil tidak ditemukan untuk "{searchQuery}"</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="p-3 bg-slate-50 border-t flex justify-between items-center px-4">
                <div className="flex gap-4">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white rounded border shadow-sm">Enter</kbd> pilih
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white rounded border shadow-sm">↑↓</kbd> navigasi
                  </span>
                </div>
                <Badge variant="outline" className="text-[10px] border-slate-200 text-slate-400">Search Engine v1.0</Badge>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* MOBILE MENU (SHEET) */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#0B3D2E] border-l-white/10 text-white p-0">
              <SheetHeader className="p-4 border-b border-white/10 text-left">
                <SheetTitle className="text-white flex items-center gap-3">
                  <img src="/logo_kel.png" alt="Logo" className="h-8 w-8 bg-white rounded-full p-0.5" />
                  Menu Navigasi
                </SheetTitle>
              </SheetHeader>

              <ScrollArea className="h-[calc(100vh-80px)] p-4">
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/"
                    className="px-4 py-3 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Beranda
                  </Link>

                  <Accordion type="single" collapsible className="w-full">
                    {menuItems.map((menu, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border-b-white/10">
                        <AccordionTrigger className="px-4 hover:bg-white/5 hover:no-underline rounded-md text-sm">
                          {menu.title}
                        </AccordionTrigger>
                        <AccordionContent className="bg-black/20 rounded-md mt-1">
                          <div className="flex flex-col py-2">
                            {menu.items.map((item, subIdx) => (
                              <Link
                                key={subIdx}
                                to={item.href}
                                className="px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.label}
                                {item.group && <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded">{item.group}</span>}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav >
  );
}

// --- HELPER COMPONENT (Untuk Item Dropdown) ---
const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-800">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";