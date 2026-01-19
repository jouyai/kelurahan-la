export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-12 pt-6 md:pt-8">
      <div className="mx-auto max-w-5xl px-4 md:px-0">
        {/* HEADER SAMA KAYA SEJARAH */}
        <div className="mb-6">
          <p className="text-xs font-medium uppercase text-gray-500">
            Profil Kelurahan
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-[#0A7A45]">
            Visi &amp; Misi Kelurahan Lenteng Agung
          </h1>
        </div>

        {/* CARD PUTIH UTAMA */}
        <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          {/* VISI */}
          <div className="mb-8">
            <h2 className="mb-3 text-base font-semibold text-gray-900 text-center">
              VISI
            </h2>
            <p className="text-sm leading-relaxed text-gray-800 text-center md:px-6">
              Mewujudkan Kelurahan Lenteng Agung yang maju, tertib, bersih, aman,
              dan harmonis melalui pelayanan publik yang profesional, transparan,
              dan berorientasi pada masyarakat.
            </p>
          </div>

          {/* GARIS PEMISAH TIPIS (OPTIONAL, BISA DIHAPUS) */}
          <div className="mx-auto mb-8 h-px w-24 bg-gray-200" />

          {/* MISI */}
          <div>
            <h2 className="mb-3 text-base font-semibold text-gray-900 text-center">
              MISI
            </h2>
            <ol className="mt-2 list-decimal space-y-3 text-sm leading-relaxed text-gray-800 md:px-6">
              <li>
                Meningkatkan kualitas pelayanan administrasi kelurahan yang cepat,
                tepat, dan transparan kepada masyarakat.
              </li>
              <li>
                Mendorong partisipasi aktif warga dalam pembangunan wilayah
                melalui semangat gotong royong.
              </li>
              <li>
                Mengembangkan lingkungan yang bersih, sehat, dan aman dengan
                penguatan peran masyarakat dan aparatur kelurahan.
              </li>
              <li>
                Mengoptimalkan tata kelola pemerintahan kelurahan yang akuntabel
                dan profesional.
              </li>
              <li>
                Memperkuat kegiatan sosial kemasyarakatan seperti pendidikan,
                kesehatan, ketahanan pangan, dan pemberdayaan masyarakat.
              </li>
              <li>
                Meningkatkan koordinasi dengan RW dan RT untuk mewujudkan
                ketertiban umum dan keamanan lingkungan.
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
