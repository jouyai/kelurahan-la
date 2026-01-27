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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// --- ICONS ---
import { Menu, Search, X } from "lucide-react";
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

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white rounded-full">
            <Search className="h-5 w-5" />
          </Button>
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
    </nav>
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