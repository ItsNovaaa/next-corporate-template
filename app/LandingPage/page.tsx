import Image from "next/image";
import Navbar from "../Components/Navbar";
import Hero from "./hero";
import AboutUs from "./about-us";
import Product from "./product";
import Service from "./service-section";
import Benefit from "./benefit";
import Marquee from "./marquee";
import Berita from "./berita";
import WorkWithUs from "./work-with-us";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <section>
      <main className="relative min-h-screen text-white">
        {/* 1. Gambar Latar Belakang */}
        <Image
          src="/max.jpg" // GANTI DENGAN PATH GAMBAR ANDA
          alt="Pemandangan kincir angin"
          fill
          className="object-cover -z-10"
          priority
        />
        {/* Lapisan overlay gelap agar teks lebih mudah dibaca */}
        <div className="absolute inset-0 bg-black/30 -z-10" />

        {/* 2. Komponen Navbar */}
        <Navbar />

        {/* 3. Komponen Hero Section */}
        <Hero />
      </main>
      <AboutUs />
      <Product />
      <Service />
      <Benefit />
      <Marquee />
      <Berita />
      <WorkWithUs />
      <Footer />
    </section>
  );
}
