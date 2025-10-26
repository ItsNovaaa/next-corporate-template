"use client"

import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import Image from "next/image"

export default function Hero() {
  return (
    <FadeInSection>
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Innovate Your Business Today
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                We deliver cutting-edge technology solutions that transform enterprises and drive sustainable growth in
                the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
                <Image className="w-full rounded-lg" src="/corporate-team-meeting-collaboration.jpg" alt="Modern office workspace" width={100} height={100} />
            </div>
            
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
