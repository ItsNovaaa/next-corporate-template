"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion"; // 1. Import Framer Motion

export default function OurStory() {
  // 2. State untuk melacak tab yang aktif agar animasi tahu harus pindah ke mana
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Our Story
        </h2>
        <p className="text-gray-600 text-lg">
          Discover our journey, our values, and what drives us forward.
        </p>
      </div>

      {/* Tambahkan value dan onValueChange untuk mengontrol state */}
      <Tabs 
        defaultValue="vision" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full flex flex-col items-center"
      >
        
        <TabsList className="w-full md:w-fit gap-8 border-b border-gray-200 relative">
          
          {/* --- TRIGGER 1: VISION --- */}
          <TabsTrigger
            value="vision"
            className="
              relative px-2 pb-3 pt-2 font-semibold text-gray-500 transition-colors duration-300
              hover:text-secondary
              data-[state=active]:text-primary
            "
          >
            Vision & Mission
            
            {/* 3. INI LOGIKA MAGIC-NYA: */}
            {/* Jika tab ini aktif, render garis bawah animasi */}
            {activeTab === "vision" && (
              <motion.div
                layoutId="active-tab-underline" // ID ini harus SAMA di semua tab
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </TabsTrigger>

          {/* --- TRIGGER 2: PROFILE --- */}
          <TabsTrigger
            value="profile"
            className="
              relative px-2 pb-3 pt-2 font-semibold text-gray-500 transition-colors duration-300
              hover:text-secondary
              data-[state=active]:text-secondary
            "
          >
            Company Profile

            {/* Copy logika motion div ke sini juga */}
            {activeTab === "profile" && (
              <motion.div
                layoutId="active-tab-underline" // ID harus SAMA
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-900"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </TabsTrigger>
        </TabsList>

        {/* --- CONTENT (Tetap menggunakan animasi slide masuk) --- */}
        <TabsContent 
          value="vision" 
          className="w-full mt-8 animate-in fade-in slide-in-from-left-8 duration-500 ease-out"
        >
          <div className="bg-slate-50/80 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-gray-200 pb-8">
              <h3 className="min-w-[150px] font-bold text-slate-700 text-lg">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                To be the global leader in sustainable technology, creating a
                world where innovation and responsibility go hand in hand.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 pt-8">
              <h3 className="min-w-[150px] font-bold text-slate-700 text-lg">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                To design and deliver user-centric products that solve complex
                problems, driven by a passion for excellence.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent 
          value="profile" 
          className="w-full mt-8 animate-in fade-in slide-in-from-left-8 duration-500 ease-out"
        >
          <div className="bg-slate-50/80 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm text-center h-[300px] flex items-center justify-center">
            <p className="text-gray-500 italic">
              Konten Company Profile akan muncul di sini...
            </p>
          </div>
        </TabsContent>

      </Tabs>
    </section>
  );
}