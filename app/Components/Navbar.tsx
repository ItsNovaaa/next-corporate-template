'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Leaf, Menu, Sparkles } from "lucide-react";


export default function Navbar() {

  const Navbar = [
    {
      title: "Home",
      href: "/",
      icon: Sparkles,
    },
    {
      title: "About",
      href: "/about",
      icon: Leaf,
    },
    {
      title: "Service",
      href: "/service",
      icon: Sparkles,
    },
    {
      title: "Benefits",
      href: "/benefits",
      icon: Sparkles,
    },
    {
      title: "Benefits",
      href: "/benefits",
      icon: Sparkles,
    },
  ]

  return (
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-4 md:px-8 lg:px-12 backdrop-blur-sm bg-black/10">
        {/* Sisi Kiri: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="text-green-400 w-7 h-7" />
          <span className="text-2xl font-bold text-white">Green Power</span>
        </Link>

        {/* Sisi Tengah: Navigasi (Desktop) */}
        <nav className="hidden  md:flex gap-6 text-lg">
          {
            Navbar.map((item, index) => (
              <Link key={index} href={item.href} className="text-white hover:text-red-500 transition-colors duration-200 flex">
                {/* <item.icon className="h-6 w-6" /> */}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))
          }
        </nav>

        {/* Sisi Kanan: Tombol Aksi (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Button className="bg-white text-black font-semibold hover:bg-gray-200 rounded-full">
            Contact Us
          </Button>
          
        </div>

        {/* Tombol Menu Mobile (Hamburger) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gray-900/90 text-white border-l-white/20 backdrop-blur-md"
            >
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" className="font-semibold text-white text-lg">
                  Home
                </Link>
                <Link href="#" className="text-gray-200 hover:text-white text-lg">
                  About
                </Link>
                <Link href="#" className="text-gray-200 hover:text-white text-lg">
                  Service
                </Link>
                <Link href="#" className="text-gray-200 hover:text-white text-lg">
                  Benefits
                </Link>
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                <Button className="bg-white text-black font-semibold hover:bg-gray-200 w-full">
                  Contact Us
                </Button>
                <Button
                  variant="ghost"
                  className="text-white font-semibold hover:bg-white/10 hover:text-white w-full border border-white/20"
                >
                  Registration
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
  )
}