"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TrendingUp, Target, BarChart3, Users, Search, Share2, Mail, ArrowRight } from "lucide-react"

export default function AdMarketingPage() {
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
    { icon: Search, title: "SEO Optimization", description: "Improve your search engine rankings" },
    { icon: Share2, title: "Social Media Marketing", description: "Engage your audience across platforms" },
    { icon: Mail, title: "Email Campaigns", description: "Targeted email marketing strategies" },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Data-driven insights and performance tracking" },
    { icon: Target, title: "PPC Advertising", description: "Paid advertising campaigns that convert" },
    { icon: Users, title: "Audience Targeting", description: "Reach the right customers at the right time" },
  ]

  const caseStudies = [
    {
      client: "talent buzzz.",
      industry: "SaaS",
      result: "leads",
      description: "Comprehensive digital marketing strategy resulting in significant lead generation growth",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753869409/a-sophisticated-conceptual-advertisement_VFpScYDARZuHPMgFIQ1R1w_ybRK_r80SM-ImoSQqyNAvQ_nuv28r.jpg",
    },
    {
      client: "E-Commerce Plus",
      industry: "Retail",
      result: "250% ROI improvement",
      description: "Multi-channel marketing approach that dramatically improved return on investment",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753869604/a-sleek-conceptual-advertisement-graphic_vi5NNTPwTlOoaY52Anp2hA_qnEDijS8R-aMTP4d1ylPcg_dfpa7m.jpg",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <TrendingUp className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <BarChart3
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">Marketing & Advertising</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">Ad & Marketing Development</h1>
              <p className="text-xl text-gray-300 mb-8">
                Strategic digital marketing solutions that drive growth, engagement, and measurable results for your
                business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  contact us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
                >
                  coming soon 
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753870038/a-dark-themed-digital-marketing-dashboar_IM1fXxxxQ-W63YadoYJC4Q_zRyFvPq4Tqqnd4BPRNMdLw_eyv1gu.jpg"
                alt="Digital Marketing Dashboard"
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
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Marketing Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to maximize your online presence and drive business
              growth
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional marketing results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy",
                description: "Analyze your business and create a custom marketing strategy",
              },
              {
                step: "02",
                title: "Implementation",
                description: "Execute campaigns across multiple digital channels",
              },
              { step: "03", title: "Optimization", description: "Monitor performance and optimize for better results" },
              { step: "04", title: "Reporting", description: "Provide detailed analytics and performance reports" },
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Get Your Custom Quote</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific marketing needs and create a tailored solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
                <p className="text-gray-400 mb-6">Get expert advice on your marketing strategy with no commitment</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=marketing">schedule soon</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center ring-2 ring-orange-400">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Proposal</h3>
                <p className="text-gray-400 mb-6">Receive a detailed proposal tailored to your specific requirements</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=marketing">Get Proposal</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-8">
                <BarChart3 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Marketing Audit</h3>
                <p className="text-gray-400 mb-6">Free analysis of your current marketing efforts and opportunities</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=marketing-audit">Get Audit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Success Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real results from our marketing campaigns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll overflow-hidden">
                <img src={study.image || "/placeholder.svg"} alt={study.client} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{study.client}</h3>
                    <Badge className="bg-orange-400 text-black">{study.industry}</Badge>
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-3">{study.result}</div>
                  <p className="text-gray-400">{study.description}</p>
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
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Grow Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a marketing strategy that drives real results for your business
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
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
