"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  TrendingUp,
  Bot,
  Brain,
  Code,
  Palette,
  Smartphone,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react"

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: TrendingUp,
      title: "Ad & Marketing Development",
      description: "Strategic digital marketing solutions that drive growth and engagement",
      features: ["SEO Optimization", "Social Media Campaigns", "Content Strategy", "Analytics & Reporting"],
      price: "Starting at 12,500/month",
    },
    {
      icon: Bot,
      title: "AI Automations",
      description: "Intelligent process automation to streamline your business operations",
      features: ["Workflow Automation", "Data Processing", "Task Scheduling", "Integration Services"],
      price: "Starting at 15,000/project",
    },
    {
      icon: Brain,
      title: "AI Chatbots",
      description: "Conversational AI solutions for enhanced customer engagement",
      features: [
        "Natural Language Processing",
        "24/7 Customer Support",
        "Multi-platform Integration",
        "Custom Training",
      ],
      price: "Starting at 13,000/project",
    },
    {
      icon: Code,
      title: "Full Stack Applications",
      description: "End-to-end web development with modern technologies",
      features: ["React/Next.js Frontend", "Node.js Backend", "Database Design", "API Development"],
      price: "Starting at 10,000/project",
    },
    {
      icon: Palette,
      title: "Graphic Designing",
      description: "Creative visual solutions that capture your brand essence",
      features: ["Brand Identity", "UI/UX Design", "Marketing Materials", "Digital Assets"],
      price: "Starting at 1,500/project",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
      price: "Starting at 15,000/project",
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Comprehensive security audits and penetration testing",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Consulting", "Compliance Audits"],
      price: "Starting at 14,000/project",
    },
    {
      icon: Globe,
      title: "Social Media Management",
      description: "Strategic social presence management and growth",
      features: ["Content Creation", "Community Management", "Influencer Partnerships", "Performance Analytics"],
      price: "Starting at 12,000/month",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h1 className="text-5xl font-bold gradient-text mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-lg">
                      <service.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-orange-400">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Pricing</p>
                      <p className="text-lg font-semibold text-orange-400">{service.price}</p>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose GatherTech DM?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Industry professionals with proven track records",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with 24/7 support",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
                <CardContent className="p-8">
                  <benefit.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400/10 to-yellow-400/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
            >
              <Link href="/contact" className="flex items-center">
                Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
