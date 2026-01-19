export default function Hero() {
    return (
        <section className="relative w-full">
            {/* Background image */}
            <div
                className="h-[480px] w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/bg_hero.png')",
                }}
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/45">
                <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center text-white">
                    {/* Small logo in hero */}
                    <div className="mb-4 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-sm shadow-md overflow-hidden">
                            <img
                                src="/logo_kel.png"
                                alt="Logo DKI Jakarta"
                                className="h-14 w-14 object-contain"
                            />
                        </div>
                    </div>


                    <p className="mb-2 text-base font-medium tracking-wide">
                        Selamat Datang di Situs
                    </p>

                    <h1 className="text-xl font-semibold tracking-wide sm:text-2xl md:text-3xl lg:text-4xl">
                        KELURAHAN LENTENG AGUNG KECAMATAN JAGAKARSA
                    </h1>
                    <h2 className="mt-1 text-lg font-medium tracking-wide sm:text-xl md:text-2xl">
                        KOTA ADMINISTRASI JAKARTA SELATAN
                    </h2>
                </div>
            </div>
        </section>
    );
}
