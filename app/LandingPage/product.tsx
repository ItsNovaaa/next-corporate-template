import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Data untuk kartu layanan, agar mudah dikelola
const services = [
  {
    title: "Residential Solar",
    imageSrc: "/max.jpg", // GANTI PATH INI
    href: "#",
  },
  {
    title: "Hydropower System",
    imageSrc: "/max.jpg", // GANTI PATH INI
    href: "#",
  },
  {
    title: "Wind Turbine",
    imageSrc: "/max.jpg", // GANTI PATH INI
    href: "#",
  },
];

export default function ServiceSection() {
  return (
    // 1. Tata Letak Section Utama
    <section className="bg-white text-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-15">
        
        {/* 2. Area Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-12">
          {/* Kolom Kiri */}
          <div>
            <span className="inline-block bg-secondary/10 text-secondary/80 text-sm font-semibold px-4 py-1 rounded-full">
              Product
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Our Solar Solutions
            </h2>
          </div>
          {/* Kolom Kanan */}
          <p className="text-gray-600 text-lg max-w-md md:mt-2">
            We believe in the power of solar energy to transform lives and
            communities.
          </p>
        </div>

        {/* 3. Grid Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            // 4. Styling Kartu Individual
            <Link
              href={service.href}
              key={service.title}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl group"
            >
              {/* Gambar Latar */}
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Konten Bawah (Overlay) */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <Button
                    size="icon"
                    className="bg-secondary text-black rounded-full hover:bg-secondary flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <ArrowUpRight className="w-5 text-white h-5" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 5. Tombol "View all services" */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-secondary text-white font-semibold hover:bg-secondary px-6 py-6 text-base"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
}