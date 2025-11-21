import { Zap, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
      <footer className="bg-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-20">
          {/* Grid responsif: 1 kolom di HP, 2 di tablet, 3 di desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-32">
            {/* --- Kolom 1: Brand & Social Links --- */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-400" />
                <span className="text-xl font-bold text-white">
                  Green Power
                </span>
              </Link>
              <p className="mt-4 text-sm max-w-xs">
                Green Power is a leading provider of solar energy solutions.
              </p>

              <h3 className="text-lg font-semibold text-white mt-8 mb-4">
                Social Links
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                {/* Catatan: Ikon ke-3 di gambar tidak jelas, saya gunakan Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* --- Kolom 2: Quick Link --- */}
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Link</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link
                  href="#"
                  className="bg-primary/50 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary/50 transition-colors"
                >
                  REGISTRATION
                </Link>
                <Link
                  href="#"
                  className="bg-primary/50 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary/50 transition-colors"
                >
                  CONTACT
                </Link>
                <Link
                  href="#"
                  className="bg-primary/50 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary/50 transition-colors"
                >
                  FEATURES
                </Link>
                <Link
                  href="#"
                  className="bg-primary/50 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary/50 transition-colors"
                >
                  SERVICE
                </Link>
                <Link
                  href="#"
                  className="bg-primary/50 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary/50 transition-colors"
                >
                  PROJECTS
                </Link>
                <Link
                  href="#"
                  className="bg-primary/50 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary/50 transition-colors"
                >
                  PRICING
                </Link>
              </div>
            </div>

            {/* --- Kolom 3: Contact --- */}
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p>
                  <a
                    href="mailto:greenpower@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    greenpower@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+111526578"
                    className="hover:text-white transition-colors"
                  >
                    +111 526-578
                  </a>
                  ,{" "}
                  <a
                    href="tel:+111623569"
                    className="hover:text-white transition-colors"
                  >
                    +111 623-569
                  </a>
                </p>
                <p>
                  541 Del Monte St.
                  <br />
                  San Francisco, CA 94122
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
