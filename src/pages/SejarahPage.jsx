// src/pages/SejarahPage.jsx
const lurahData = [
  { no: 1, nama: "H. Suryadi", periode: "1990 – 1996" },
  { no: 2, nama: "M. Taufik Rahman", periode: "1996 – 2002" },
  { no: 3, nama: "Sri Rahayu, S.Sos.", periode: "2002 – 2008" },
  { no: 4, nama: "Drs. Abdul Majid", periode: "2008 – 2013" },
  { no: 5, nama: "Irwan Setiawan, S.AP.", periode: "2013 – 2018" },
  { no: 6, nama: "Fauziah Ningsih, M.Si.", periode: "2018 – 2021" },
  { no: 7, nama: "Aan Ramlan, S.Sos.", periode: "2021 – Sekarang" },
];

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-12 pt-6 md:pt-8">
      <div className="mx-auto max-w-5xl px-4 md:px-0">
        {/* JUDUL HALAMAN */}
        <div className="mb-6">
          <p className="text-xs font-medium uppercase text-gray-500">
            Profil Kelurahan
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-[#0A7A45]">
            Sejarah Kelurahan Lenteng Agung
          </h1>
        </div>

        {/* KONTEN UTAMA */}
        <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          {/* Paragraf sejarah */}
          <p className="mb-4 text-sm leading-relaxed text-gray-800">
            Kelurahan Lenteng Agung merupakan salah satu kelurahan di wilayah
            Kecamatan Jagakarsa, Jakarta Selatan. Nama &quot;Lenteng Agung&quot;
            diyakini berasal dari sebuah klenteng atau tempat ibadah etnis
            Tionghoa yang dahulu berdiri di kawasan antara Pasar Minggu dan
            Margonda, yang pada masanya dikenal sebagai &quot;Klenteng
            Agung&quot;. Seiring perkembangan wilayah dan perubahan dialek
            masyarakat setempat, nama tersebut kemudian berubah menjadi Lenteng
            Agung dan tetap dipertahankan meskipun bangunan klenteng tersebut
            sudah tidak ada lagi.
          </p>

          <p className="mb-4 text-sm leading-relaxed text-gray-800">
            Lenteng Agung berkembang menjadi kawasan permukiman padat dengan
            karakter masyarakat yang heterogen. Kini, kelurahan ini terdiri atas
            10 RW dan 114 RT, serta memiliki perkembangan pesat di bidang
            sosial, pendidikan, dan infrastruktur seiring urbanisasi di Jakarta
            Selatan. Kelurahan Lenteng Agung terus bertransformasi menjadi area
            yang dinamis namun tetap menyimpan nilai sejarah dari asal-usul
            penamaannya.
          </p>

          {/* Judul tabel */}
          <h2 className="mt-6 mb-3 text-base font-semibold text-black">
            Daftar Lurah Kelurahan Lenteng Agung dari Masa ke Masa
          </h2>

          {/* Tabel lurah */}
          <div className="overflow-x-auto rounded-md border border-gray-300 bg-white">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200 text-left text-[13px] font-semibold text-black">
                  <th className="border border-gray-300 px-3 py-2 w-14 text-center">
                    No
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Nama Lurah
                  </th>
                  <th className="border border-gray-300 px-3 py-2">
                    Periode Menjabat
                  </th>
                </tr>
              </thead>
              <tbody>
                {lurahData.map((row) => (
                  <tr
                    key={row.no}
                    className="odd:bg-gray-50 even:bg-white text-[13px]"
                  >
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      {row.no}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {row.nama}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {row.periode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
