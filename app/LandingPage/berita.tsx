import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPostItem, BlogPostData } from "./item-berita"; // Pastikan path import benar

// Update Data Dummy dengan 'content'
const blogPosts: BlogPostData[] = [
  {
    id: "1",
    title: "The Future of Residential Solar: Trends to Watch in 2026",
    description: "Discover the upcoming innovations in solar technology, from bifacial panels to smart energy management systems.",
    // Isi konten panjang untuk Modal
    content: `The solar industry is evolving rapidly. In 2026, we expect to see a surge in bifacial solar panels adoption for residential use, allowing energy capture from both sides of the panel.
    
    Furthermore, smart energy management systems integrated with AI will become standard, optimizing battery usage based on weather patterns and usage habits. This ensures maximum efficiency and cost savings for homeowners.`,
    imageUrl: "/max.jpg",
    readTime: "06 min read",
    date: "Nov 10, 2025",
  },
  {
    id: "2",
    title: "How Solar Incentives Can Save You Thousands This Year",
    description: "A deep dive into the latest federal and state tax credits and rebates available for new solar installations.",
    content: `Understanding tax credits is crucial for maximizing ROI. This year, the federal government has extended the ITC (Investment Tax Credit), allowing homeowners to deduct 30% of the cost of installing a solar energy system from their federal taxes.
    
    Additionally, many states offer local rebates that can be stacked with federal incentives. We break down the most lucrative opportunities available in your region.`,
    imageUrl: "/max.jpg",
    readTime: "05 min read",
    date: "Nov 02, 2025",
  },
  {
    id: "3",
    title: "Case Study: A 1920s Home Goes Net-Zero with Solar",
    description: "See the challenges and triumphs of retrofitting an older home with a modern, high-efficiency solar array.",
    content: `Retrofitting a 100-year-old home presents unique challenges, from structural integrity to aesthetic preservation. In this case study, we explore how the Green Power team successfully installed a 8kW system on a heritage property.
    
    The result? A Net-Zero home that preserves its historical charm while producing 100% of its own electricity needs.`,
    imageUrl: "/max.jpg",
    readTime: "08 min read",
    date: "Oct 28, 2025",
  },
];

export default function Berita() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-20">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Berita Terbaru
          </h2>
          <Button size="lg" asChild className="bg-secondary text-white hover:bg-primary rounded-full px-6 py-3 hidden md:flex">
            <Link href="/berita"> {/* Link ke halaman baru */}
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-200">
          {blogPosts.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 text-center md:hidden">
          <Button asChild className="bg-secondary text-white hover:bg-primary rounded-full px-6 py-3 w-full">
            <Link href="/berita">
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
};