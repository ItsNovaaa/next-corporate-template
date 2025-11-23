"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import StrategyModalContent from "./product-item";

// --- 1. DATA BARU (DENGAN 2 KONTEKS & GAMBAR BERBEDA) ---
const strategies = [
  {
    id: "core-business",
    title: "Core Business",
    subtitle: "More Energy, Less Emissions",
    // Gambar thumbnail (untuk kartu luar)
    thumbnail: "/max.jpg",
    content: {
      overview: {
        label: "Overview",
        // Gambar saat Tab Overview aktif
        image: "/max.jpg",
        text: "Operate oil and gas in a differentiated manner, safely, reliably, with focus on reducing carbon emissions.",
        points: [
          "Optimalkan efisiensi operasional kilang minyak.",
          "Kurangi flaring dan venting gas rumah kaca.",
          "Tingkatkan keandalan pasokan energi.",
        ],
      },
      milestone: {
        label: "Milestones",
        // Gambar BERBEDA saat Tab Milestone aktif
        image: "/1.jpg",
        text: "Pencapaian utama kami dalam 5 tahun terakhir menuju efisiensi energi maksimal.",
        points: [
          "2023: Pengurangan emisi karbon sebesar 15%.",
          "2024: Implementasi teknologi AI di 5 kilang utama.",
          "2025: Target zero routine flaring tercapai.",
        ],
      },
    },
  },
  {
    id: "new-business",
    title: "New Business",
    subtitle: "Capturing New Growth Opportunities",
    thumbnail: "/max.jpg",
    content: {
      overview: {
        label: "Overview",
        image: "/max.jpg",
        text: "Capture growth opportunities in renewables and cleaner energy solutions including Hydrogen and Green Mobility.",
        points: [
          "Investasi panel surya skala utilitas.",
          "Pengembangan stasiun pengisian EV.",
          "Produksi Green Hydrogen.",
        ],
      },
      milestone: {
        label: "Milestones",
        image: "/1.jpg",
        text: "Langkah strategis dalam membangun portofolio energi masa depan.",
        points: [
          "2023: Akuisisi ladang surya 500MW.",
          "2024: Peluncuran stasiun hidrogen pertama.",
          "2025: Ekspansi ke pasar regional.",
        ],
      },
    },
  },
  // Tambahkan item ke-3 dst...
];

export default function ProdukSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">
            Produk Unggulan Kami
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hadirkan solusi terbaik bagi kebutuhan Anda dengan kualitas yang
            melampaui ekspektasi.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {strategies.map((item) => (
            <Dialog key={item.id}>
              {/* TRIGGER CARD */}
              <DialogTrigger asChild>
                <div className="group relative w-full h-[200px] md:h-[250px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg transition-all hover:scale-[1.01]">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />

                  <div className="absolute inset-0 p-8 md:p-10 flex items-center">
                    <div className="max-w-xl">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {item.title}
                      </h2>
                      <p className="text-teal-300 font-medium tracking-wide uppercase text-sm mb-4">
                        {item.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                        Explore Strategy <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* MODAL CONTAINER */}
              <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden rounded-2xl border-none z-50 h-[85vh] md:h-auto flex flex-col">
                <StrategyModalContent item={item} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
