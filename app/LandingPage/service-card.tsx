// Wajib ada karena menggunakan event listener onClick (useState, useEffect, dll)
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  imageUrl: string;
};

export default function AdvancedServiceCard({
  title,
  imageUrl,
}: ServiceCardProps) {
  const handleCardClick = () => {
    console.log("Clicked:", title);
    alert("Navigate to: " + title);
  };

  return (
    <div
      className="relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl 
                   transition-all duration-300 ease-in-out aspect-[4/3] group 
                   hover:-translate-y-2 cursor-pointer"
    >
      {/* 1. Background Image */}
      <div className="absolute inset-0 rounded-[2rem]">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* 3. Konten Teks */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 pb-6 pr-6">
        <h3 className="text-white text-3xl font-semibold tracking-wide text-shadow-md">
          {title}
        </h3>
      </div>

      {/* 4. Tombol Sudut (Bagian Kompleks) */}
      <div
        className="absolute bottom-0 right-0 w-24 h-22 bg-white z-10 rounded-tl-[3.5rem] flex items-center justify-center
                     before:content-[''] before:absolute before:-top-12 before:right-0
                     before:w-11 before:h-14
                     before:bg-[radial-gradient(circle_at_0_0,_transparent_3rem,_white_3rem)]
                     after:content-[''] after:absolute after:bottom-0 after:-left-12
                     after:w-17 after:h-10
                     after:bg-[radial-gradient(circle_at_0%_0%,_transparent_3rem,_white_3rem)]"
      >
        <button
          // onClick={handleClick}
          className="bg-secondary hover:bg-secondary text-white rounded-full w-12 h-12
                       flex items-center justify-center
                       shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40
                       transition-all duration-300 ease-in-out z-20 relative
                       hover:scale-105 active:scale-95"
          aria-label="View service details"
        >
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
      {/* 5. Bingkai Dekoratif (dari HTML Anda) */}
    </div>
  );
}
