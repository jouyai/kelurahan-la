const jabatanList = [
  { jabatan: "Lurah", nama: "Abdul Haris" },
  { jabatan: "Sekretaris Kelurahan", nama: "Teguh Suparman" },
  { jabatan: "Satpel Dukcapil", nama: "Saparudin, MA" },
  { jabatan: "Pustu Lenteng Agung 2", nama: "dr. Surya Soma" },
  { jabatan: "Pustu Lenteng Agung 1", nama: "dr. Sabrina" },
  { jabatan: "Satlak DPPTSP", nama: "Lis Sumarnah, SE, M.Tr.IP" },
  { jabatan: "Satpol PP", nama: "Isa Awaluddin, S.E" },
  { jabatan: "Kasi Pemerintahan", nama: "Ahmad Effendi" },
  { jabatan: "Kasi Kesejahteraan Rakyat", nama: "Irfan Yusuf" },
  { jabatan: "Kasi Ekonomi & Pembangunan", nama: "Nursa Indah" },
];

export default function StrukturOrganisasiPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* HERO MINI */}
      <section className="relative h-48 w-full md:h-56">
        <img
          src="/bg_hero.png"
          alt="Kantor Kelurahan Lenteng Agung"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/45">
          <h1 className="px-4 text-center text-2xl font-semibold tracking-wide text-white md:text-3xl">
            Struktur Organisasi Kelurahan Lenteng Agung
          </h1>
        </div>
      </section>

      {/* KONTEN */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-8 md:px-0 md:pt-10">
        {/* Bagan Struktur Organisasi */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="/struktur_kel.png"
              alt="Struktur Organisasi Kelurahan Lenteng Agung"
              className="h-full w-full object-contain md:object-cover"
            />
          </div>
        </div>

        {/* TABEL JABATAN */}
        <div className="mb-10 rounded-2xl bg-white p-4 shadow-sm md:p-6">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Struktur Jabatan Kelurahan Lenteng Agung
          </h2>
          <div className="overflow-x-auto rounded-md border border-gray-300 bg-white">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#d9d9d9] text-left text-[13px] font-semibold text-black">
                  <th className="border border-gray-300 px-3 py-2 w-1/3">
                    Jabatan
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Nama
                  </th>
                </tr>
              </thead>
              <tbody>
                {jabatanList.map((row, idx) => (
                  <tr
                    key={row.jabatan}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-300 px-3 py-2 text-[13px]">
                      {row.jabatan}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-[13px]">
                      {row.nama}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TUGAS & FUNGSI */}
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-base font-semibold text-gray-900">
            Tugas dan Fungsi Jabatan Kelurahan Lenteng Agung
          </h2>

          {/* 1. Lurah */}
          <div className="mb-6 text-sm leading-relaxed text-gray-800">
            <p className="font-semibold mb-1">1. Lurah</p>
            <p className="font-semibold">Tugas Utama:</p>
            <ul className="mb-2 ml-5 list-disc">
              <li>
                Memimpin penyelenggaraan pemerintahan, pembangunan, dan pelayanan
                masyarakat di tingkat kelurahan.
              </li>
            </ul>
            <p className="font-semibold">Fungsi:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Pembinaan ketenteraman dan ketertiban umum.</li>
              <li>
                Pengelolaan pembangunan dan pemberdayaan masyarakat kelurahan.
              </li>
              <li>
                Koordinasi dengan RT/RW dan lembaga kemasyarakatan lainnya.
              </li>
              <li>
                Pengawasan terhadap pelaksanaan tugas para seksi dan staf
                kelurahan.
              </li>
            </ul>
          </div>

          {/* 2. Sekretaris Kelurahan */}
          <div className="mb-6 text-sm leading-relaxed text-gray-800">
            <p className="font-semibold mb-1">2. Sekretaris Kelurahan</p>
            <p className="font-semibold">Tugas Utama:</p>
            <ul className="mb-2 ml-5 list-disc">
              <li>
                Mengelola administrasi umum, kepegawaian, keuangan, serta
                penyusunan program kelurahan.
              </li>
            </ul>
            <p className="font-semibold">Fungsi:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Pengelolaan tata naskah, arsip, dan dokumentasi.</li>
              <li>
                Penatausahaan anggaran serta penyusunan laporan keuangan
                kelurahan.
              </li>
              <li>
                Koordinasi perencanaan program kerja dan kegiatan kelurahan.
              </li>
              <li>Pembinaan administrasi RT/RW.</li>
            </ul>
          </div>

          {/* 3. Kepala Seksi Pemerintahan */}
          <div className="mb-6 text-sm leading-relaxed text-gray-800">
            <p className="font-semibold mb-1">3. Kepala Seksi Pemerintahan</p>
            <p className="font-semibold">Tugas Utama:</p>
            <ul className="mb-2 ml-5 list-disc">
              <li>
                Menangani urusan pemerintahan dan administrasi kependudukan di
                tingkat kelurahan.
              </li>
            </ul>
            <p className="font-semibold">Fungsi:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Pelayanan administrasi kependudukan (KK, KTP, surat keterangan,
                domisili, dll.).
              </li>
              <li>
                Pembinaan penyelenggaraan pemerintahan lingkungan, termasuk
                RT/RW.
              </li>
              <li>
                Monitoring ketenteraman, keamanan, dan ketertiban wilayah.
              </li>
            </ul>
          </div>

          {/* 4. Kepala Seksi Kesejahteraan Rakyat */}
          <div className="mb-6 text-sm leading-relaxed text-gray-800">
            <p className="font-semibold mb-1">
              4. Kepala Seksi Kesejahteraan Rakyat
            </p>
            <p className="font-semibold">Tugas Utama:</p>
            <ul className="mb-2 ml-5 list-disc">
              <li>
                Melaksanakan pelayanan dan pembinaan di bidang sosial, kesehatan,
                pendidikan, dan pemberdayaan masyarakat.
              </li>
            </ul>
            <p className="font-semibold">Fungsi:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Fasilitasi layanan kesehatan lingkungan dan kesehatan masyarakat.
              </li>
              <li>
                Pendataan pendidikan, fasilitas ibadah, dan kegiatan
                kemasyarakatan.
              </li>
              <li>
                Pembinaan PKK, karang taruna, dan lembaga sosial kemasyarakatan.
              </li>
            </ul>
          </div>

          {/* 5. Kepala Seksi Ekonomi & Pembangunan */}
          <div className="text-sm leading-relaxed text-gray-800">
            <p className="font-semibold mb-1">
              5. Kepala Seksi Ekonomi dan Pembangunan
            </p>
            <p className="font-semibold">Tugas Utama:</p>
            <ul className="mb-2 ml-5 list-disc">
              <li>
                Mengoordinasikan pembangunan fisik, lingkungan, serta
                pemberdayaan ekonomi masyarakat.
              </li>
            </ul>
            <p className="font-semibold">Fungsi:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Pendataan sarana dan prasarana wilayah (jalan, drainase, fasilitas
                umum).
              </li>
              <li>
                Monitoring pelaksanaan pembangunan di tingkat kelurahan.
              </li>
              <li>
                Pembinaan UMKM dan pemberdayaan ekonomi masyarakat berbasis
                RW/RT.
              </li>
              <li>
                Peningkatan kualitas lingkungan, termasuk kebersihan dan
                pengelolaan sampah.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
