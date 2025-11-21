"use client";

import { useState } from "react";
import Image from "next/image";
import { DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// 1. Definisi Tipe Data (Agar aman dan bisa dipakai ulang)
export interface StrategyItem {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  content: {
    overview: {
      label: string;
      image: string;
      text: string;
      points: string[];
    };
    milestone: {
      label: string;
      image: string;
      text: string;
      points: string[];
    };
  };
}

export default function StrategyModalContent({ item }: { item: StrategyItem }) {
  // State lokal: Hanya milik komponen ini
  const [activeTab, setActiveTab] = useState<"overview" | "milestone">(
    "overview"
  );

  // Data berubah dinamis berdasarkan activeTab
  const currentData = item.content[activeTab];

  return (
    <div className="flex flex-col h-full">
      {/* HEADER IMAGE BERUBAH */}
      <div className="relative w-full h-56 md:h-64 shrink-0 overflow-hidden bg-gray-100">
        {/* Key=currentData.image memicu animasi ulang saat gambar berubah */}
        <Image
          key={currentData.image}
          src={currentData.image}
          alt={item.title}
          fill
          className="object-cover animate-in fade-in duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-6 md:p-8">
          <div>
            <p className="text-teal-300 font-semibold text-sm uppercase tracking-wider mb-1">
              {item.subtitle}
            </p>
            <DialogTitle className="text-3xl md:text-4xl font-bold text-white">
              {item.title}
            </DialogTitle>
          </div>
        </div>
      </div>

      {/* TABS SECTION */}
      <div className="flex-1 flex flex-col bg-white">
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={(val) => setActiveTab(val as "overview" | "milestone")}
          className="w-full h-full flex flex-col"
        >
          {/* TAB LIST */}
          <div className="px-6 pt-6 border-b border-gray-100">
            <TabsList className="w-full justify-start bg-transparent p-0 h-auto gap-6">
              {/* TRIGGER 1: OVERVIEW */}
              <TabsTrigger
                value="overview"
                className="
                    rounded-none border-b-2 border-transparent px-0 py-2 font-semibold text-gray-500 bg-transparent hover:text-secondary
                    
                    data-[state=active]:border-secondary 
                    data-[state=active]:text-primary
                    data-[state=active]:shadow-none 
                    
                    focus-visible:ring-0 
                    focus-visible:ring-offset-0 
                    focus-visible:outline-none
                    "
              >
                Overview
              </TabsTrigger>

              {/* TRIGGER 2: MILESTONE */}
              <TabsTrigger
                value="milestone"
                className="
                rounded-none border-b-2 border-transparent px-0 py-2 font-semibold text-gray-500 bg-transparent hover:text-secondary
                
                data-[state=active]:border-secondary 
                data-[state=active]:text-primary
                data-[state=active]:shadow-none 
                
                focus-visible:ring-0 
                focus-visible:ring-offset-0 
                focus-visible:outline-none
                "
              >
                Milestones & Targets
              </TabsTrigger>
            </TabsList>{" "}
          </div>

          {/* SCROLLABLE CONTENT */}
          <ScrollArea className="flex-1 p-6 md:p-8 h-[300px]">
            {/* Overview Content */}
            <TabsContent
              value="overview"
              className="mt-0 animate-in slide-in-from-left-4 duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Overview
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.content.overview.text}
              </p>
              <ul className="space-y-3">
                {item.content.overview.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Milestone Content */}
            <TabsContent
              value="milestone"
              className="mt-0 animate-in slide-in-from-right-4 duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Milestones
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.content.milestone.text}
              </p>
              <div className="grid gap-4 border-l-2 border-gray-200 pl-4 ml-2">
                {item.content.milestone.points.map((point, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-teal-600 shadow-sm" />
                    <p className="text-gray-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
}
