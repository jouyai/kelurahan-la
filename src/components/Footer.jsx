import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    return (
        <footer className="bg-[#06452F] text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-start md:justify-between md:py-12">
                {/* KIRI: Logo + Info alamat */}
                <div className="flex items-start gap-4 md:w-1/2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-sm overflow-hidden">
                        <img
                            src="/logo_kel.png"
                            alt="Logo DKI Jakarta"
                            className="h-14 w-14 object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-wide uppercase">
                            Kelurahan
                        </p>
                        <p className="text-xl font-semibold -mt-1">
                            Lenteng Agung
                        </p>

                        <div className="mt-4 space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0" />
                                <p className="leading-relaxed">
                                    Jl. Agung Raya No.1, RT.9/RW.2, Lenteng Agung, Jagakarsa,
                                    Kota Jakarta Selatan 12610, Indonesia
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                                <a
                                    href="tel:0217873637"
                                    className="text-sm hover:underline"
                                >
                                    (021) 7873637
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TENGAH: Menu */}
                <div className="md:w-1/4">
                    <h3 className="mb-3 text-lg font-semibold text-center md:text-left">
                        Menu
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="underline underline-offset-2">
                                Profil Kelurahan
                            </a>
                        </li>
                        <li>
                            <a href="#" className="underline underline-offset-2">
                                Layanan Publik
                            </a>
                        </li>
                        <li>
                            <a href="#" className="underline underline-offset-2">
                                Pengumuman
                            </a>
                        </li>
                    </ul>
                </div>

                {/* KANAN: Map */}
                <div className="md:w-auto">
                    <div className="w-[334px] h-[154px] overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            title="Peta Kantor Kelurahan Lenteng Agung"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.70438143702!2d106.83489457430028!3d-6.323815861878294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edc13106a5f7%3A0x37ec1ef890d0cd3e!2sKantor%20Kelurahan%20Lenteng%20Agung!5e1!3m2!1sid!2sid!4v1763725731047!5m2!1sid!2sid"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            className="h-full w-full border-0"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}


