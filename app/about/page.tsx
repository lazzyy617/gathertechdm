"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Linkedin, Twitter, Github, Award, Lightbulb, Globe, Rocket } from "lucide-react"

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "BEVARA MOHITH",
      role: "Founder",
      bio: "Visionary leader in tech innovation",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867085/WhatsApp_Image_2025-07-21_at_11.40.03_c01ec1bd_hupmg0.jpg",
    },
    {
      name: "VIJAY VARMA",
      role: "CO-Founder",
      bio: "Expert in the ui and ux designer , 3d web dev",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867106/WhatsApp_Image_2025-07-17_at_17.40.50_6268ccf2_rwkytz.jpg",
    },
    {
      name: "G KARTHIK",
      role: "CEO",
      bio: "Visionary leader driving innovation at GatherTech DM, empowering digital transformation",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867442/WhatsApp_Image_2025-07-21_at_23.41.54_5f3bf7e8_gtclvr.jpg",
    },
    {
      name: "Sivakoti Anusha",
      role: "CFO",
      bio: "Strategic financial expert at GatherTech DM, ensuring sustainable growth through smart budgeting, forecasting, and resource management",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753868133/WhatsApp_Image_2025-07-30_at_15.04.28_dd334814_jkwdo1.jpg",
    },
    {
      name: "P Sai Keerthi",
      role: "CTO",
      bio: "Technology architect at GatherTech DM, leading innovation in AI, automation, and full-stack solutions with a future-ready vision",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867117/WhatsApp_Image_2025-07-21_at_11.32.41_ef221153_y5w9ch.jpg",
    },
    {
      name: "Neha",
      role: "COO",
      bio: "Operations strategist at GatherTech DM, streamlining processes and driving execution for seamless business performance and growth.",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867130/WhatsApp_Image_2025-07-21_at_11.32.41_edb1b636_qmvxi3.jpg",
    },
    {
    name: "Vineela Sree",
      role: "CMO",
      bio: "Brand strategist at GatherTech DM, leading impactful marketing campaigns to drive visibility, engagement, and business growth",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867140/WhatsApp_Image_2025-07-21_at_11.32.41_9a859d27_uac0y0.jpg",
    },
    {
    name: "Pavan Siva Sai",
      role: "Project Manager",
      bio: "Efficient planner at GatherTech DM, ensuring timely delivery and coordination of innovative tech solutions across all teams",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867904/WhatsApp_Image_2025-07-21_at_11.32.42_b3cd580e_rojijj.jpg",
    },
    {
      name: "Janga Sumanth",
      role: "Devolper",
      bio: "Code craftsman at GatherTech DM, building robust and scalable applications that power our digital solutions",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867275/WhatsApp_Image_2025-07-17_at_16.45.49_5a4cf698_i2wzez.jpg",
    },
    {
      name: "Siva Thanay",
      role: "Designer",
      bio: "Creative mind at GatherTech DM, crafting intuitive and visually compelling designs that elevate user experiences",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753867284/WhatsApp_Image_2025-07-17_at_16.32.56_6b6153c4_zuh1m0.jpg",
    },
  ]

  const milestones = [
    { year: "2025", title: "Company Founded", description: "Started with a vision to democratize technology" },
    { year: "2025", title: "First AI Product", description: "Launched our flagship AI automation platform" },
    { year: "2025", title: "100+ Students", description: "Reached milestone of training 1000+ professionals" },
    { year: "2025", title: "Global Expansion", description: "Extended services to international markets" },
    { year: "2025", title: "Innovation Hub", description: "cybersecurity technologies" },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h1 className="text-5xl font-bold gradient-text mb-6">About GatherTech DM</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to bridging the gap between cutting-edge innovation
              and practical business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-orange-400 mb-6" />
                <h2 className="text-3xl font-bold gradient-text mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses and individuals with innovative technology solutions that drive growth,
                  efficiency, and success. We believe in making advanced technology accessible to everyone through
                  comprehensive services and education.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-orange-400 mb-6" />
                <h2 className="text-3xl font-bold gradient-text mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading catalyst for technological transformation, creating a future where AI and advanced
                  technologies seamlessly integrate into every aspect of business and daily life, fostering innovation
                  and human potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From a small startup to a leading tech innovator - here's our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-yellow-400"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 animate-on-scroll ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="bg-gray-900/50 border-gray-800 card-hover">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-orange-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-orange-400 rounded-full relative z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <Users className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Talented professionals dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                    <Twitter className="w-4 h-4 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                    <Github className="w-4 h-4 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400/10 to-yellow-400/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: "Innovation", description: "Constantly pushing boundaries" },
              { icon: Award, title: "Excellence", description: "Delivering quality in everything" },
              { icon: Globe, title: "Accessibility", description: "Making tech available to all" },
              { icon: Rocket, title: "Growth", description: "Fostering continuous improvement" },
            ].map((value, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
