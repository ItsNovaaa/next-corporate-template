"use client"

import FadeInSection from "@/components/fade-in-section"

export default function About() {
  return (
    <FadeInSection>
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/corporate-team-meeting-collaboration.jpg"
                alt="Team collaboration"
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">About TechCorp</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2010, TechCorp has been at the forefront of digital innovation, helping enterprises transform
                their operations and achieve unprecedented growth.
              </p>
              <p className="text-lg text-muted-foreground">
                With a team of 500+ experts across 15 countries, we deliver world-class solutions to Fortune 500
                companies and ambitious startups alike.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
