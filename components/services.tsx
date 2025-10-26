"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, TrendingUp, Users } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your operations with cloud-native solutions and automation.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with full regulatory compliance.",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Data-driven decisions with advanced analytics and reporting.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for distributed teams.",
    },
  ]

  return (
    <FadeInSection>
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-foreground">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
