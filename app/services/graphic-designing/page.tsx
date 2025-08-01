"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Palette, Brush, ImageIcon, Layout, Eye, Layers, ArrowRight, Star, Award, Lightbulb } from "lucide-react"

export default function GraphicDesigningPage() {
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
      icon: Eye,
      title: "Brand Identity Design",
      description: "Complete brand identity packages with logos and guidelines",
    },
    { icon: Layout, title: "UI/UX Design", description: "User-centered interface and experience design" },
    {
      icon: ImageIcon,
      title: "Marketing Materials",
      description: "Brochures, flyers, banners, and promotional content",
    },
    { icon: Layers, title: "Digital Assets", description: "Social media graphics, web banners, and digital content" },
    { icon: Brush, title: "Print Design", description: "Business cards, letterheads, and print collateral" },
    { icon: Lightbulb, title: "Creative Concepts", description: "Innovative design concepts and visual storytelling" },
  ]

  const portfolio = [
    {
      title: "Tech Startup Branding",
      category: "Brand Identity",
      description: "Complete brand identity for innovative tech startup",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988771/a-sleek-futuristic-product-advertisement_F4yo8a2VQV2M282T6y5hqw_4UPANUZ0RcqzLHMy5fgc_A_b47gd2.jpg",
      tags: ["Logo Design", "Brand Guidelines", "Business Cards"],
    },
    {
      title: "E-commerce Website Design",
      category: "UI/UX Design",
      description: "Modern e-commerce platform with intuitive user experience",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988771/a-sleek-futuristic-product-advertisement_F4yo8a2VQV2M282T6y5hqw_4UPANUZ0RcqzLHMy5fgc_A_b47gd2.jpg",
      tags: ["Web Design", "User Experience", "Mobile Responsive"],
    },
    {
      title: "Marketing Campaign Assets",
      category: "Marketing Design",
      description: "Comprehensive marketing materials for product launch",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988771/a-sleek-futuristic-product-advertisement_F4yo8a2VQV2M282T6y5hqw_4UPANUZ0RcqzLHMy5fgc_A_b47gd2.jpg",
      tags: ["Social Media", "Print Design", "Digital Ads"],
    },
    {
      title: "Mobile App Interface",
      category: "App Design",
      description: "Clean and modern mobile application interface design",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988771/a-sleek-futuristic-product-advertisement_F4yo8a2VQV2M282T6y5hqw_4UPANUZ0RcqzLHMy5fgc_A_b47gd2.jpg",
      tags: ["Mobile UI", "User Experience", "Prototyping"],
    },
  ]

  const designProcess = [
    { step: "01", title: "Brief & Research", description: "Understanding your brand, audience, and objectives" },
    { step: "02", title: "Concept Development", description: "Creating initial concepts and design directions" },
    { step: "03", title: "Design & Refinement", description: "Developing designs with iterative feedback" },
    { step: "04", title: "Finalization", description: "Delivering final assets and brand guidelines" },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <Palette className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <Brush
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <ImageIcon
            className="absolute top-1/2 left-1/4 w-16 h-16 text-orange-400/20 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">Creative Design</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">Graphic Designing</h1>
              <p className="text-xl text-gray-300 mb-8">
                Creative visual solutions that capture your brand essence and communicate your message effectively
                through stunning design and visual storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  Start Design Project <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988650/a-sleek-futuristic-product-advertisement_o-PhfQ3nTxu_x7Zlt52lWA_4UPANUZ0RcqzLHMy5fgc_A_o1i7rv.jpg"
                alt="Creative Design Portfolio"
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
            <h2 className="text-4xl font-bold gradient-text mb-4">Design Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive design solutions for all your visual communication needs
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

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Portfolio</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing our creative work across various industries and design disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-orange-400 text-black">{project.category}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-400">Featured</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Design Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collaborative approach to creating exceptional design solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
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

      {/* Design Consultation Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Start Your Design Project</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's bring your creative vision to life with stunning design solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Consultation</h3>
                <p className="text-gray-400 mb-6">Free brand analysis and design strategy consultation</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=brand-consultation">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center ring-2 ring-orange-400">
              <CardContent className="p-8">
                <Palette className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Design</h3>
                <p className="text-gray-400 mb-6">Tailored design solutions for your specific needs</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=custom-design">Start Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
              <CardContent className="p-8">
                <Brush className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Design Revision</h3>
                <p className="text-gray-400 mb-6">Improve existing designs or rebrand your business</p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=design-revision">Get Started</Link>
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
            <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Bring Your Vision to Life?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create stunning visual designs that elevate your brand and captivate your audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/contact">Start Your Design Project</Link>
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
