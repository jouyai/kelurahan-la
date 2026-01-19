const dataPenduduk = [
  { kelompokUsia: "0–4 tahun", laki: 210, perempuan: 200, total: 410 },
  { kelompokUsia: "5–9 tahun", laki: 230, perempuan: 220, total: 450 },
  { kelompokUsia: "10–14 tahun", laki: 260, perempuan: 240, total: 500 },
  { kelompokUsia: "15–19 tahun", laki: 280, perempuan: 270, total: 550 },
  { kelompokUsia: "20–24 tahun", laki: 300, perempuan: 290, total: 590 },
  { kelompokUsia: "25–29 tahun", laki: 310, perempuan: 300, total: 610 },
  { kelompokUsia: "30–34 tahun", laki: 320, perempuan: 315, total: 635 },
  { kelompokUsia: "35–39 tahun", laki: 310, perempuan: 300, total: 610 },
  { kelompokUsia: "40–44 tahun", laki: 280, perempuan: 270, total: 550 },
  { kelompokUsia: "45–49 tahun", laki: 250, perempuan: 240, total: 490 },
  { kelompokUsia: "50–54 tahun", laki: 220, perempuan: 210, total: 430 },
  { kelompokUsia: "55–59 tahun", laki: 190, perempuan: 180, total: 370 },
  { kelompokUsia: "60–64 tahun", laki: 160, perempuan: 150, total: 310 },
  { kelompokUsia: "65–69 tahun", laki: 120, perempuan: 110, total: 230 },
  { kelompokUsia: "70 tahun ke atas", laki: 90, perempuan: 85, total: 175 },
];

const totalRow = {
  kelompokUsia: "TOTAL",
  laki: 3540,
  perempuan: 3380,
  total: 6920,
};

export default function DataPendudukPage() {
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
            Data Penduduk Kelurahan Lenteng Agung
          </h1>
        </div>
      </section>

      {/* KONTEN */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-8 md:px-0 md:pt-10">
        {/* Header sama style dengan halaman lain */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Demografi
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          {/* Deskripsi */}
          <p className="mb-4 text-sm leading-relaxed text-gray-800">
            Halaman Data Penduduk menampilkan informasi demografis Kelurahan
            Lenteng Agung secara lengkap dan terstruktur. Data ini mencakup jumlah
            penduduk berdasarkan jenis kelamin, kelompok usia, status pekerjaan,
            tingkat pendidikan, serta persebaran wilayah per RT/RW. Penyajian data
            dilakukan secara informatif dan mudah dipahami, sehingga dapat menjadi
            rujukan bagi masyarakat, peneliti, maupun lembaga pemerintahan dalam
            melihat kondisi kependudukan di wilayah Lenteng Agung.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-gray-800">
            Informasi ini diperbarui secara berkala untuk memastikan akurasi data
            dan mendukung proses perencanaan pembangunan di tingkat kelurahan.
          </p>

          {/* Tabel Data Penduduk */}
          <div className="overflow-x-auto rounded-md border border-gray-300 bg-white">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200 text-[13px] font-semibold text-black">
                  <th className="border border-gray-300 px-3 py-2 text-left">
                    Kelompok Usia
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-center">
                    Laki-laki
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-center">
                    Perempuan
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataPenduduk.map((row) => (
                  <tr
                    key={row.kelompokUsia}
                    className="odd:bg-gray-50 even:bg-white text-[13px]"
                  >
                    <td className="border border-gray-300 px-3 py-2">
                      {row.kelompokUsia}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {row.laki.toLocaleString("id-ID")}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {row.perempuan.toLocaleString("id-ID")}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center font-medium">
                      {row.total.toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}

                {/* Baris total */}
                <tr className="bg-gray-200 text-[13px] font-semibold">
                  <td className="border border-gray-300 px-3 py-2">
                    {totalRow.kelompokUsia}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {totalRow.laki.toLocaleString("id-ID")}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {totalRow.perempuan.toLocaleString("id-ID")}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {totalRow.total.toLocaleString("id-ID")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
