"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Globe,
  Users,
  TrendingUp,
  MessageSquare,
  Camera,
  BarChart3,
  Calendar,
  ArrowRight,
  Star,
  Heart,
  Share2,
} from "lucide-react"

export default function SocialMediaManagementPage() {
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
    { icon: Camera, title: "Content Creation", description: "Engaging visual and written content for all platforms" },
    { icon: Calendar, title: "Content Scheduling", description: "Strategic posting schedules for maximum engagement" },
    { icon: Users, title: "Community Management", description: "Active engagement with your audience and followers" },
    { icon: TrendingUp, title: "Growth Strategies", description: "Data-driven strategies to grow your following" },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Detailed performance analytics and insights" },
    { icon: Star, title: "Influencer Partnerships", description: "Collaborations with relevant influencers" },
  ]

  const platforms = [
    { name: "Facebook", color: "bg-blue-600", followers: "2.9B", engagement: "High" },
    { name: "Instagram", color: "bg-pink-600", followers: "2B", engagement: "Very High" },
    { name: "Twitter", color: "bg-blue-400", followers: "450M", engagement: "Medium" },
    { name: "LinkedIn", color: "bg-blue-700", followers: "900M", engagement: "Professional" },
    { name: "TikTok", color: "bg-black", followers: "1B", engagement: "Viral" },
    { name: "YouTube", color: "bg-red-600", followers: "2.7B", engagement: "Long-form" },
  ]

  const caseStudies = [
    {
      client: "Fashion Brand",
      industry: "Retail",
      result: "400% follower growth",
      description: "Complete social media transformation resulting in massive audience growth",
      metrics: { followers: "+150K", engagement: "+320%", sales: "+180%" },
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753987832/create-a-modern-tech-themed-graphic-repr_RUnCU4YjRxCmlYiViC-WSg_nvpiKzDuS_6bIHq54oTQ-Q_ttahyt.jpg",
    },
    {
      client: "Tech Startup",
      industry: "Technology",
      result: "500% engagement increase",
      description: "Strategic content and community building that drove exceptional engagement",
      metrics: { followers: "+75K", engagement: "+500%", leads: "+250%" },
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753987917/a-sleek-conceptual-advertisement-for-gat_xg9SNqv2RlO7ueinCdddWw_nvpiKzDuS_6bIHq54oTQ-Q_fdqfsk.jpg",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <Globe className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <Users
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <MessageSquare
            className="absolute top-1/2 left-1/4 w-16 h-16 text-orange-400/20 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">Social Media</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">Social Media Management</h1>
              <p className="text-xl text-gray-300 mb-8">
                Strategic social media management that builds communities, drives engagement, and grows your brand
                presence across all major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  Grow Your Presence <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
                >
                  Free Social Audit
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753987735/a-sleek-conceptual-advertisement-for-gat_oXC_1J1UTFe3vPznC4vyog_nvpiKzDuS_6bIHq54oTQ-Q_czrejh.jpg"
                alt="Social Media Management Dashboard"
                className="rounded-lg shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Social Media Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive social media solutions to build your brand and engage your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Platforms We Manage</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Expert management across all major social media platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">{platform.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{platform.name}</h3>
                      <p className="text-sm text-gray-400">{platform.followers} users</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Engagement Level:</span>
                    <Badge className="bg-orange-400 text-black">{platform.engagement}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Consultation Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Grow Your Social Presence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's create a social media strategy that builds your brand and engages your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-8">
                <BarChart3 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Media Audit</h3>
                <p className="text-gray-400 mb-6">
                  Free analysis of your current social media presence and opportunities
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=social-audit">Get Free Audit</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center ring-2 ring-orange-400">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
                <p className="text-gray-400 mb-6">Custom social media strategy aligned with your business goals</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=social-strategy">Build Strategy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Full Management</h3>
                <p className="text-gray-400 mb-6">Complete social media management across all platforms</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=social-management">Start Management</Link>
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
            <p className="text-gray-400 max-w-2xl mx-auto">Real results from our social media management campaigns</p>
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
                  <p className="text-gray-400 mb-4">{study.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">{study.metrics.followers}</div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">{study.metrics.engagement}</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">
                        {study.metrics.sales || study.metrics.leads}
                      </div>
                      <div className="text-xs text-gray-500">{study.metrics.sales ? "Sales" : "Leads"}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Process */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Strategic approach to social media management that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "Create comprehensive social media strategy aligned with your goals",
              },
              {
                step: "02",
                title: "Content Creation",
                description: "Develop engaging content calendar with high-quality visuals and copy",
              },
              {
                step: "03",
                title: "Community Building",
                description: "Actively engage with your audience and build loyal communities",
              },
              {
                step: "04",
                title: "Performance Analysis",
                description: "Monitor metrics and optimize strategy based on data insights",
              },
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400/10 to-yellow-400/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <div className="flex justify-center space-x-4 mb-6">
              <Heart className="w-8 h-8 text-orange-400" />
              <Share2 className="w-8 h-8 text-orange-400" />
              <MessageSquare className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Amplify Your Social Presence?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that builds your brand, engages your audience, and drives real
              business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/contact">Start Social Media Growth</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
              >
                Get Free Social Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
