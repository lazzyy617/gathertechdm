"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Brain,
  MessageSquare,
  Users,
  Clock,
  Globe,
  Settings,
  ArrowRight,
  CheckCircle,
  Bot,
  Headphones,
  BarChart3,
} from "lucide-react"

export default function AIChatbotsPage() {
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

  const features = [
    { icon: Brain, title: "Natural Language Processing", description: "Advanced NLP for human-like conversations" },
    { icon: Clock, title: "24/7 Availability", description: "Round-the-clock customer support" },
    { icon: Globe, title: "Multi-Platform Integration", description: "Deploy across websites, apps, and social media" },
    { icon: Users, title: "Personalized Interactions", description: "Tailored responses based on user data" },
    { icon: BarChart3, title: "Analytics & Insights", description: "Detailed conversation analytics and reporting" },
    { icon: Settings, title: "Custom Training", description: "Train chatbots on your specific business data" },
  ]

  const chatbotTypes = [
    {
      title: "Customer Support Bot",
      description: "Handle customer inquiries, troubleshooting, and support tickets automatically",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753870782/a-sleek-futuristic-product-advertisement_3M0l7ti8TfesSvBTkrhCcA_nBDaaqP1TkCA0ByKz3JuIg_eniik1.jpg",
      features: ["Ticket creation", "FAQ responses", "Escalation handling", "Multi-language support"],
    },
    {
      title: "Sales Assistant Bot",
      description: "Qualify leads, provide product information, and guide customers through sales funnel",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753925990/design-a-futuristic-dark-themed-graphic-_EsHeM7iMRtC6rdd-mC6_yw_8vS7n2TmSLehpctLGTvvNA_xdumfx.jpg",
      features: ["Lead qualification", "Product recommendations", "Appointment scheduling", "CRM integration"],
    },
    {
      title: "E-commerce Bot",
      description: "Assist with product discovery, order tracking, and purchase recommendations",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753926028/a-sleek-futuristic-product-advertisement_Maos086LRE2qs5QXbECLqA_8vS7n2TmSLehpctLGTvvNA_txk06q.jpg",
      features: ["Product search", "Order tracking", "Payment assistance", "Inventory updates"],
    },
  ]

  const platforms = [
    { name: "Website", icon: Globe, description: "Embed directly on your website" },
    { name: "WhatsApp", icon: MessageSquare, description: "WhatsApp Business integration" },
    { name: "Facebook", icon: Users, description: "Facebook Messenger integration" },
    { name: "Slack", icon: Bot, description: "Internal team communication" },
    { name: "Telegram", icon: MessageSquare, description: "Telegram bot integration" },
    { name: "Mobile App", icon: Headphones, description: "Native mobile app integration" },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <Brain className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <MessageSquare
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <Bot
            className="absolute top-1/2 left-1/4 w-16 h-16 text-orange-400/20 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">AI Chatbots</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">AI Chatbots</h1>
              <p className="text-xl text-gray-300 mb-8">
                Intelligent conversational AI solutions that enhance customer engagement, provide 24/7 support, and
                drive business growth through automated interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  Build Your Bot <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
                >
                  Try Demo
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753926193/a-sleek-futuristic-product-advertisement_vqZHHCVASh-XZZzJD-cxwQ_D_xEr89vRXGxohktTUzgKQ_kuf6qh.jpg"
                alt="AI Chatbot Interface"
                className="rounded-lg shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Chatbot Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced AI capabilities that make your chatbot intelligent and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Types */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Chatbot Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized chatbots designed for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {chatbotTypes.map((bot, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll overflow-hidden">
                <img src={bot.image || "/placeholder.svg"} alt={bot.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{bot.title}</h3>
                  <p className="text-gray-400 mb-4">{bot.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-orange-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {bot.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Multi-Platform Integration</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deploy your chatbot across multiple platforms and channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
                <CardContent className="p-8">
                  <platform.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                  <p className="text-gray-400 text-sm">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our systematic approach to building intelligent chatbots</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analysis", description: "Understand your business needs and customer journey" },
              { step: "02", title: "Design", description: "Create conversation flows and user experience design" },
              { step: "03", title: "Development", description: "Build and train the AI chatbot with your data" },
              { step: "04", title: "Deployment", description: "Launch and integrate across your platforms" },
            ].map((process, index) => (
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

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Build Your Perfect Chatbot</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's create an AI chatbot that perfectly matches your business needs and customer expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-6">
                <MessageSquare className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Demo & Consultation</h3>
                <p className="text-gray-400 mb-4 text-sm">See our chatbots in action and discuss your requirements</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=chatbot-demo">Book Demo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center ring-2 ring-orange-400">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Custom Development</h3>
                <p className="text-gray-400 mb-4 text-sm">Get a chatbot built specifically for your business needs</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=chatbot-custom">Start Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Integration Support</h3>
                <p className="text-gray-400 mb-4 text-sm">Seamlessly integrate chatbots into your existing systems</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=chatbot-integration">Get Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400/10 to-yellow-400/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Build Your AI Chatbot?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your customer experience with intelligent conversational AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
