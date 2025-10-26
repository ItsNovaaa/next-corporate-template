"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { motion } from "framer-motion"

export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/professional-woman-executive.png",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/professional-tech-leader.png",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      image: "/professional-woman-operations.png",
    },
    {
      name: "David Kim",
      role: "Head of Innovation",
      image: "/professional-man-innovation.jpg",
    },
  ]

  return (
    <FadeInSection>
      <section id="team" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving innovation at TechCorp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                    <div className="flex gap-3">
                      <Github size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                      <Linkedin size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                      <Twitter size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
