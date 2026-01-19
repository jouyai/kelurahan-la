export default function GeografisPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* HERO MINI GEOGRAFIS */}
      <section className="relative h-48 w-full md:h-56">
        <img
          src="/bg_hero.png"
          alt="Kantor Kelurahan Lenteng Agung"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/45">
          <h1 className="px-4 text-center text-2xl font-semibold tracking-wide text-white md:text-3xl">
            Geografis
          </h1>
        </div>
      </section>

      {/* KONTEN */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-8 md:px-0 md:pt-10">
        {/* Judul Peta */}
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900">
          Peta Wilayah
        </h2>

        {/* Dua gambar peta */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <img
              src="/peta1.png"
              alt="Peta Wilayah Kelurahan Lenteng Agung"
              className="h-full w-full object-contain md:object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <img
              src="/peta2.png"
              alt="Peta Wilayah Satelit Kelurahan Lenteng Agung"
              className="h-full w-full object-contain md:object-cover"
            />
          </div>
        </div>

        {/* Paragraf penjelasan (mirip yang di screenshot) */}
        <div className="space-y-4 text-sm leading-relaxed text-gray-800">
          <p>
            Kelurahan Lenteng Agung merupakan salah satu kelurahan di wilayah
            Kecamatan Jagakarsa, Jakarta Selatan. Nama &quot;Lenteng Agung&quot;
            diyakini berasal dari sebuah klenteng atau tempat ibadah etnis
            Tionghoa yang dahulu berdiri di kawasan antara Pasar Minggu dan
            Margonda, yang pada masanya dikenal sebagai &quot;Klenteng Agung&quot;.
            Seiring perkembangan wilayah dan perubahan dialek masyarakat setempat,
            nama tersebut kemudian berubah menjadi Lenteng Agung dan tetap
            dipertahankan meskipun bangunan klenteng tersebut sudah tidak ada lagi.
          </p>
          <p>
            Lenteng Agung berkembang menjadi kawasan permukiman padat dengan
            karakter masyarakat yang heterogen. Kini, kelurahan ini terdiri atas
            10 RW dan 114 RT, serta memiliki perkembangan pesat di bidang sosial,
            pendidikan, dan infrastruktur seiring urbanisasi di Jakarta Selatan.
            Kelurahan Lenteng Agung terus bertransformasi menjadi area yang
            dinamis namun tetap menyimpan nilai sejarah dari asal-usul
            penamaannya.
          </p>
        </div>

        {/* Batas wilayah */}
        <div className="mt-8 text-sm leading-relaxed text-gray-800">
          <p className="font-semibold mb-1">Batas Wilayah</p>
          <p className="mb-3">
            Secara administratif, Kelurahan Lenteng Agung memiliki batas wilayah
            sebagai berikut:
          </p>
          <ul className="list-[lower-alpha] space-y-2 pl-5">
            <li>
              <span className="font-medium">Sebelah Utara</span>  
              &nbsp;Berbatasan dengan Kelurahan Srengseng Sawah, Kecamatan Jagakarsa.
            </li>
            <li>
              <span className="font-medium">Sebelah Timur</span>  
              &nbsp;Berbatasan dengan Kelurahan Tanjung Barat, Kecamatan Jagakarsa.
            </li>
            <li>
              <span className="font-medium">Sebelah Selatan</span>  
              &nbsp;Berbatasan dengan Kelurahan Cipedak dan sebagian wilayah Depok
              (Kecamatan Beji).
            </li>
            <li>
              <span className="font-medium">Sebelah Barat</span>  
              &nbsp;Berbatasan dengan Kelurahan Pasar Minggu, Kecamatan Pasar
              Minggu, Jakarta Selatan.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
