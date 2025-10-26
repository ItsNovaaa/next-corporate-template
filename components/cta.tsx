"use client"

import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export default function CTA() {
  return (
    <FadeInSection>
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Ready to Transform Your Business?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join hundreds of leading companies that trust TechCorp to drive their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
