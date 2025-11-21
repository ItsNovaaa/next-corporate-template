"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// --- 1. DATA STRUCTURE (DATABASE MOCKUP) ---
const strategies = [
  {
    id: "core-business",
    title: "Core Business",
    subtitle: "More Energy, Less Emissions",
    description:
      "Operate oil and gas in a differentiated manner, safely, reliably, with focus on reducing carbon emissions and at competitive cost.",
    image: "https://images.unsplash.com/photo-1605722558200-b2b9e0c18b6a?q=80&w=1600&auto=format&fit=crop", // Ganti dengan gambar Oil Rig
    details: "Detail lengkap tentang strategi bisnis inti akan muncul di sini...",
  },
  {
    id: "new-business",
    title: "New Business",
    subtitle: "Capturing New Growth Opportunities",
    description:
      "Capture growth opportunities in renewables and cleaner, less emission intensive energy solutions including Specialty Chemicals, Carbon Capture & Storage (CCS), hydrogen and green mobility.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop", // Ganti dengan gambar Solar Panel
    details: "Detail lengkap tentang energi terbarukan dan bisnis baru...",
  },
  {
    id: "net-zero",
    title: "Net Zero Carbon Emissions",
    subtitle: "Pathway to Net Zero",
    description:
      "We have identified key abatement levers to decarbonise emissions, and have allocated resources to meet our short and medium-term targets towards achieving net zero by 2050.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1600&auto=format&fit=crop", // Ganti dengan gambar Industry/Greenery
    details: "Detail lengkap tentang target Net Zero 2050...",
  },
];

// --- 2. COMPONENT SEPARATOR (DOTS) ---
// Komponen hiasan titik-titik di antara kartu
const DottedSeparator = () => (
  <div className="flex justify-center gap-2 py-4 md:py-6 overflow-hidden opacity-60">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
          i % 2 === 0 ? "bg-teal-500" : "bg-blue-600"
        }`}
      />
    ))}
  </div>
);

export default function StrategyHero() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header Utama */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">
            Energy Transition Strategy
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As the momentum for the energy transition accelerates, we have
            strengthened our business foundation to pursue our journey through
            these key strategic pillars.
          </p>
        </div>

        {/* Stack Kartu Strategi */}
        <div className="flex flex-col">
          {strategies.map((item, index) => (
            <div key={item.id}>
              
              {/* DIALOG COMPONENT (OPEN BY ID) */}
              <Dialog>
                
                {/* TRIGGER: KARTU UTAMA */}
                <DialogTrigger asChild>
                  <div className="group relative w-full h-[250px] md:h-[300px] rounded-[2.5rem] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-lg">
                    
                    {/* Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Gradient (Kiri Gelap -> Kanan Transparan) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Content Layout */}
                    <div className="absolute inset-0 p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                      
                      {/* Judul (Kiri - 4 Kolom) */}
                      <div className="md:col-span-4 border-l-4 border-teal-400 pl-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                          {item.title.split(" ").map((word, i) => (
                            <span key={i} className="block">
                              {word}
                            </span>
                          ))}
                        </h2>
                      </div>

                      {/* Deskripsi (Kanan - 8 Kolom) */}
                      <div className="md:col-span-8 text-white/90 space-y-2 md:pl-8">
                        <h3 className="text-lg font-semibold text-teal-300 uppercase tracking-wider text-sm">
                          {item.subtitle}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                        
                        {/* Indikator 'Click to view' */}
                        <div className="flex items-center gap-2 text-white/70 text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span>Read Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                    </div>
                  </div>
                </DialogTrigger>

                {/* MODAL CONTENT (DETAIL VIEW) */}
                <DialogContent className="max-w-3xl bg-white p-0 overflow-hidden rounded-2xl">
                  
                  {/* Header Gambar di Modal */}
                  <div className="relative w-full h-48 md:h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                      <DialogTitle className="text-3xl font-bold text-white">
                        {item.title}
                      </DialogTitle>
                    </div>
                  </div>

                  <DialogHeader className="px-6 pt-6">
                    <DialogDescription className="text-teal-600 font-semibold text-lg">
                      {item.subtitle}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Scroll Area untuk Konten Panjang */}
                  <ScrollArea className="h-[300px] w-full p-6 pt-2">
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>{item.description}</p>
                      <p className="text-gray-600">{item.details}</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                         <li>Strategic Initiative 1</li>
                         <li>Strategic Initiative 2</li>
                         <li>Key Milestone Achievement</li>
                      </ul>
                    </div>
                  </ScrollArea>

                </DialogContent>
              </Dialog>

              {/* Separator (Hanya render jika bukan item terakhir) */}
              {index !== strategies.length - 1 && <DottedSeparator />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}