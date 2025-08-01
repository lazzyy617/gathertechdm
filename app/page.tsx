"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Brain,
  Shield,
  Smartphone,
  Palette,
  Bot,
  TrendingUp,
  Code,
  Globe,
  BookOpen,
  Calendar,
  ArrowRight,
  Cpu,
  Network,
  Lock,
} from "lucide-react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

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
    { icon: TrendingUp, title: "Ad & Marketing Development", description: "Strategic digital marketing solutions" },
    { icon: Bot, title: "AI Automations", description: "Intelligent process automation" },
    { icon: Brain, title: "AI Chatbots", description: "Conversational AI solutions" },
    { icon: Code, title: "Full Stack Applications", description: "End-to-end web development" },
    { icon: Palette, title: "Graphic Designing", description: "Creative visual solutions" },
    { icon: Smartphone, title: "Mobile App Development", description: "iOS and Android applications" },
    { icon: Shield, title: "Security Testing", description: "Comprehensive security audits" },
    { icon: Globe, title: "Social Media Management", description: "Strategic social presence" },
  ]

  const courses = [
    { title: "Artificial Intelligence", level: "Advanced", duration: "12 weeks" },
    { title: "Machine Learning", level: "Intermediate", duration: "10 weeks" },
    { title: "Deep Learning", level: "Advanced", duration: "14 weeks" },
    { title: "AI Tools Mastery", level: "Beginner", duration: "6 weeks" },
    { title: "Cybersecurity Fundamentals", level: "Intermediate", duration: "8 weeks" },
    { title: "Ethical Hacking", level: "Advanced", duration: "16 weeks" },
    { title: "Penetration Testing", level: "Advanced", duration: "12 weeks" },
    { title: "Bug Bounty Hunting", level: "Expert", duration: "20 weeks" },
    { title: "Web Development", level: "Beginner", duration: "12 weeks" },
    { title: "Python Programming", level: "Beginner", duration: "8 weeks" },
    { title: "Java Development", level: "Intermediate", duration: "10 weeks" },
    { title: "Data Structures & Algorithms", level: "Intermediate", duration: "14 weeks" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
      >
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Cpu className="absolute top-20 left-10 w-12 h-12 text-orange-400/30 float-animation" />
          <Network
            className="absolute top-40 right-20 w-16 h-16 text-yellow-400/20 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <Brain
            className="absolute bottom-40 left-20 w-14 h-14 text-orange-400/25 float-animation"
            style={{ animationDelay: "4s" }}
          />
          <Lock
            className="absolute bottom-20 right-10 w-10 h-10 text-yellow-400/30 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">GatherTech DM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering Innovation Through Technology - Where AI Meets Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/services" className="flex items-center">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
              >
                <Link href="/courses" className="flex items-center">
                  View Our Courses <BookOpen className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Core Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Courses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Master cutting-edge technologies with our comprehensive course offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 9).map((course, index) => (
              <div key={index} className="flip-card animate-on-scroll">
                <div className="flip-card-inner relative w-full h-48">
                  <Card className="flip-card-front absolute inset-0 bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                      <p className="text-orange-400 text-sm mb-1">Level: {course.level}</p>
                      <p className="text-gray-400 text-sm">Duration: {course.duration}</p>
                    </CardContent>
                  </Card>
                  <Card className="flip-card-back absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400">
                    <CardContent className="p-6 h-full flex flex-col justify-center text-black">
                      <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
                      <Button className="bg-black text-white hover:bg-gray-800">Enroll Now</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
            >
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Webinars & Workshops CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-400/10 to-yellow-400/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <Calendar className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">Live Events & Workshops</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our interactive webinars and hands-on workshops covering the latest in technology and AI
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
            >
              <Link href="/courses">Register for Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
