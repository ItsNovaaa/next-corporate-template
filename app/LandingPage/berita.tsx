import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPostItem } from "./item-berita";

// 1. Data Tiruan (Mock Data)
const blogPosts = [
  {
    id: "1",
    title: "The Future of Residential Solar: Trends to Watch in 2026",
    description:
      "Discover the upcoming innovations in solar technology, from bifacial panels to smart energy management systems.",
    imageUrl: "/max.jpg", // Ganti dengan path gambar Anda
    readTime: "06 min read",
    date: "Nov 10, 2025",
  },
  {
    id: "2",
    title: "How Solar Incentives Can Save You Thousands This Year",
    description:
      "A deep dive into the latest federal and state tax credits and rebates available for new solar installations.",
    imageUrl: "/max.jpg", // Ganti dengan path gambar Anda
    readTime: "05 min read",
    date: "Nov 02, 2025",
  },
  {
    id: "3",
    title: "Case Study: A 1920s Home Goes Net-Zero with Solar",
    description:
      "See the challenges and triumphs of retrofitting an older home with a modern, high-efficiency solar array.",
    imageUrl: "/max.jpg", // Ganti dengan path gambar Anda
    readTime: "08 min read",
    date: "Oct 28, 2025",
  },
];

export default function Berita() {
  return (
    // 1. Wrapper Seksi
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-20">
        
        {/* 2. Bagian Header Seksi */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 tracking-tight">
            Solar News and Insights
          </h2>
          <Button
            size="lg"
            asChild
            className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-6 py-3 hidden md:flex" // Tombol desktop
          >
            <Link href="/blog">
              View all blogs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* 3. Daftar Artikel Blog */}
        <div className="divide-y divide-slate-200">
          {blogPosts.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>

        {/* Tombol "View All" khusus mobile */}
        <div className="mt-12 text-center md:hidden">
          <Button
            asChild
            className="bg-lime-400 text-black hover:bg-lime-500 rounded-full px-6 py-3"
          >
            <Link href="/blog">
              View all blogs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
};