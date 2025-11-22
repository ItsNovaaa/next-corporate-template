import { BlogPostItem } from "./item-berita";
import { BlogPostData } from "./item-berita";
// --- DATA DUMMY (MOCK DATABASE) ---
const newsData: BlogPostData[] = [
  {
    id: "1",
    title: "Green Power Raih Penghargaan Energi Berkelanjutan 2024",
    description: "Komitmen kami terhadap inovasi ramah lingkungan kembali diakui di tingkat nasional dengan penghargaan bergengsi.",
    content: `Green Power dengan bangga mengumumkan keberhasilan meraih penghargaan 'Best Sustainable Energy Company 2024'. Penghargaan ini merupakan bukti nyata dari kerja keras tim kami dalam mengembangkan solusi energi terbarukan yang efisien.
    
    Acara penganugerahan yang berlangsung di Jakarta Convention Center dihadiri oleh para pemimpin industri energi. CEO Green Power menyatakan bahwa penghargaan ini akan menjadi motivasi untuk terus berinovasi.
    
    Fokus kami selanjutnya adalah ekspansi ke wilayah Indonesia Timur dengan teknologi panel surya hibrida terbaru.`,
    imageUrl: "/max.jpg", // Ganti dengan gambar Anda
    readTime: "5 Min Read",
    date: "22 Nov 2025",
  },
  {
    id: "2",
    title: "Ekspansi Infrastruktur Panel Surya di Kalimantan",
    description: "Proyek terbesar tahun ini dimulai dengan pemasangan 5000 panel di area industri pertambangan.",
    content: `Sebagai bagian dari strategi transisi energi, Green Power resmi memulai proyek instalasi panel surya berkapasitas 10MWp di Kalimantan Timur. Proyek ini bertujuan untuk mengurangi ketergantungan industri pertambangan terhadap bahan bakar fosil.
    
    Tantangan logistik yang ada berhasil diatasi dengan manajemen rantai pasok yang canggih. Kami menargetkan penyelesaian proyek ini pada kuartal ketiga tahun depan.`,
    imageUrl: "/max.jpg",
    readTime: "4 Min Read",
    date: "10 Nov 2025",
  },
  {
    id: "3",
    title: "Laporan Keberlanjutan Tahunan Dirilis",
    description: "Transparansi adalah kunci. Simak pencapaian penurunan emisi karbon kami sepanjang tahun lalu.",
    content: `Kami telah merilis Laporan Keberlanjutan 2024 yang menyoroti pencapaian signifikan dalam pengurangan jejak karbon. Tercatat penurunan emisi sebesar 25% dibandingkan tahun sebelumnya.
    
    Laporan ini juga mencakup inisiatif CSR terbaru kami yang berfokus pada pendidikan energi terbarukan untuk sekolah-sekolah di daerah terpencil.`,
    imageUrl: "/max.jpg",
    readTime: "7 Min Read",
    date: "01 Nov 2025",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* HEADER HALAMAN */}
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4">
            NEWSROOM
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Berita & <span className="text-secondary">Wawasan</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dapatkan informasi terbaru seputar aktivitas perusahaan, inovasi teknologi, dan perkembangan industri energi.
          </p>
        </div>

        {/* LIST BERITA */}
        <div className="flex flex-col">
          {newsData.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>

        {/* PAGINATION (Opsional) */}
        <div className="mt-16 flex justify-center">
            <button className="px-6 py-3 bg-slate-100 text-slate-600 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors">
                Muat Lebih Banyak
            </button>
        </div>

      </div>
    </main>
  );
}