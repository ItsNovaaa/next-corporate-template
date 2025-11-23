'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

export default function WorkWithUs() {
  return (
    // TAMBAHKAN 'overflow-hidden' DI SINI
    <section className="text-gray-900 overflow-hidden">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-1">
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1 rounded-full">
              TENTANG KAMI
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Tertarik Bekerja sama dengan PT Rembang Migas? Hubungi Kami
            </h2>
            <Button
              size="lg"
              className="bg-secondary text-white font-semibold hover:bg-primary mt-8 px-6 py-3"
            >
              Kontak Kami
              <ArrowRight className="w-5 h-5 ml-2" /> {/* Saya pindahkan ikon ke kanan (ml-2) */}
            </Button>
          </div>

          <div className="lg:col-span-1 w-full flex justify-end">
            <img
              src="/technition.webp"
              alt="Pekerja Green Power dengan panel surya"
              className="rounded-2xl object-cover max-h-[400px] w-full lg:w-auto
                         lg:scale-110 lg:translate-x-12" // <-- TAMBAHKAN KELAS INI
            />
          </div>

        </div>
      </div>
    </section>
  );
}