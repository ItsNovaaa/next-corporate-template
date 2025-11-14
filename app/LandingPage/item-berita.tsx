import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Pastikan path ini sesuai

// Tipe data untuk prop
type BlogPostProps = {
  post: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    readTime: string;
    date: string;
  };
};

export const BlogPostItem = ({ post }: BlogPostProps) => {
  return (
    <article className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-8 py-8">
      
      {/* Bagian 1: Gambar */}
      <div className="w-full md:w-1/3 lg:w-[350px] flex-shrink-0">
        <Link href={`/blog/${post.id}`}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={700}  // Lebar proporsional untuk 16:9
            height={394} // Tinggi proporsional untuk 16:9
            className="rounded-lg object-cover aspect-video w-full transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>

      {/* Bagian 2: Konten Teks (Judul & Deskripsi) */}
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold text-slate-900">
          <Link
            href={`/blog/${post.id}`}
            className="hover:text-green-700 transition-colors duration-300"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-slate-600 mt-2 leading-relaxed">
          {post.description}
        </p>
      </div>

      {/* Bagian 3: Metadata (Waktu Baca & Tanggal) */}
      <div className="w-full md:w-[120px] flex-shrink-0 text-left md:text-right">
        <p className="text-sm font-semibold text-slate-500">
          {post.readTime}
        </p>
        <p className="text-sm text-slate-500">{post.date}</p>
      </div>

      {/* Bagian 4: Tombol Aksi (Panah) */}
      <div className="flex-shrink-0 md:ml-4">
        <Button
          asChild
          className="bg-lime-400 text-black hover:bg-lime-500 rounded-full w-12 h-12"
          size="icon"
          aria-label={`Read more about ${post.title}`}
        >
          <Link href={`/blog/${post.id}`}>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
      
    </article>
  );
};