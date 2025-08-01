"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Smartphone,
  Tablet,
  Code,
  Zap,
  Users,
  Star,
  Download,
  ArrowRight,
  CheckCircle,
  Apple,
  Play,
  Globe,
} from "lucide-react"

export default function MobileAppDevelopmentPage() {
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

  const platforms = [
    { icon: Apple, title: "iOS Development", description: "Native iOS apps using Swift and Objective-C" },
    { icon: Play, title: "Android Development", description: "Native Android apps using Kotlin and Java" },
    { icon: Globe, title: "Cross-Platform", description: "React Native and Flutter for multi-platform apps" },
    { icon: Tablet, title: "Tablet Optimization", description: "Optimized experiences for tablets and larger screens" },
    { icon: Zap, title: "Performance Optimization", description: "Fast, responsive apps with smooth animations" },
    { icon: Users, title: "User Experience", description: "Intuitive interfaces designed for mobile users" },
  ]

  const appTypes = [
    {
      title: "E-Commerce Mobile App",
      description: "Complete shopping experience with payment integration and order management",
      image: "/https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753989144/design-a-futuristic-dark-themed-visual-r_9iiMOVJpSBGby_Xgsm5ufw_vj6sveyJRQS9kBUMvKWirA_e1ebot.jpg",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "Push notifications",
        "User accounts",
        "Order tracking",
      ],
    },
    {
      title: "Social Media App",
      description: "Social networking platform with real-time messaging and content sharing",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753989144/design-a-futuristic-dark-themed-visual-r_9iiMOVJpSBGby_Xgsm5ufw_vj6sveyJRQS9kBUMvKWirA_e1ebot.jpg",
      features: [
        "User profiles",
        "Real-time chat",
        "Content sharing",
        "Social features",
        "Push notifications",
        "Media upload",
      ],
    },
    {
      title: "Business Productivity App",
      description: "Enterprise-grade productivity tools with team collaboration features",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753989144/design-a-futuristic-dark-themed-visual-r_9iiMOVJpSBGby_Xgsm5ufw_vj6sveyJRQS9kBUMvKWirA_e1ebot.jpg",
      features: [
        "Task management",
        "Team collaboration",
        "File sharing",
        "Calendar integration",
        "Offline sync",
        "Analytics",
      ],
    },
  ]

  const technologies = [
    { category: "iOS", techs: ["Swift", "Objective-C", "Xcode", "Core Data"] },
    { category: "Android", techs: ["Kotlin", "Java", "Android Studio", "Room DB"] },
    { category: "Cross-Platform", techs: ["React Native", "Flutter", "Xamarin", "Ionic"] },
    { category: "Backend", techs: ["Node.js", "Firebase", "AWS", "MongoDB"] },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define app requirements, target audience, and technical approach",
    },
    { step: "02", title: "UI/UX Design", description: "Create wireframes, prototypes, and visual designs" },
    { step: "03", title: "Development", description: "Build the app with regular testing and iterations" },
    { step: "04", title: "Testing & Launch", description: "Quality assurance, app store submission, and deployment" },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <Smartphone className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <Tablet
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <Code
            className="absolute top-1/2 left-1/4 w-16 h-16 text-orange-400/20 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">Mobile Development</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">Mobile App Development</h1>
              <p className="text-xl text-gray-300 mb-8">
                Native and cross-platform mobile applications that deliver exceptional user experiences and drive
                business growth across iOS and Android platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  Start Your App <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
                >
                  View App Portfolio
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753989113/a-sleek-futuristic-product-advertisement_pALTPiRvTjWKZZ96w2AftA_vj6sveyJRQS9kBUMvKWirA_aq40vs.jpg"
                alt="Mobile App Development"
                className="rounded-lg shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Development Platforms</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive mobile app development across all major platforms and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <platform.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                    {platform.title}
                  </h3>
                  <p className="text-gray-400">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">App Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Custom mobile applications tailored to your specific business needs
            </p>
          </div>

          <div className="space-y-16">
            {appTypes.map((app, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`animate-on-scroll ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h3 className="text-3xl font-bold mb-4">{app.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{app.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                    Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className={`animate-on-scroll ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    <img
                      src={app.image || "/placeholder.svg"}
                      alt={app.title}
                      className="rounded-lg shadow-2xl glow-effect mx-auto"
                    />
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-black p-2 rounded-full">
                      <Star className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Consultation */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Turn Your App Idea Into Reality</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to app store - let's build your mobile application together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Smartphone className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">App Strategy Session</h3>
                <p className="text-gray-400 mb-6 text-center">
                  Free consultation to validate your app idea and plan the development approach
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Market analysis & validation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Platform recommendations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Feature prioritization
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=app-strategy">Book Strategy Session</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Code className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">Development Proposal</h3>
                <p className="text-gray-400 mb-6 text-center">
                  Comprehensive development plan with technical specifications and project roadmap
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Technical architecture
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Development timeline
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Investment breakdown
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=app-proposal">Get Proposal</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for robust mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-400">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.techs.map((technology, techIndex) => (
                      <li key={techIndex} className="flex items-center text-gray-300">
                        <Zap className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {technology}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven methodology for delivering successful mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Store Features */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">App Store Success</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We handle the complete app store submission and optimization process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Download,
                title: "App Store Submission",
                description: "Complete submission process for both iOS and Android",
              },
              {
                icon: Star,
                title: "ASO Optimization",
                description: "App Store Optimization for better visibility and downloads",
              },
              { icon: Users, title: "User Acquisition", description: "Strategies to grow your app's user base" },
              {
                icon: Zap,
                title: "Performance Monitoring",
                description: "Ongoing monitoring and optimization post-launch",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your idea into a successful mobile application that users love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/contact">Start Your App Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
