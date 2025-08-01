"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Code,
  Database,
  Globe,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Server,
  Layout,
  Settings,
} from "lucide-react"

export default function FullStackApplicationsPage() {
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

  const technologies = [
    { icon: Layout, title: "Frontend Development", description: "React, Next.js, Vue.js, Angular" },
    { icon: Server, title: "Backend Development", description: "Node.js, Python, Java, .NET" },
    { icon: Database, title: "Database Design", description: "PostgreSQL, MongoDB, MySQL, Redis" },
    { icon: Cloud, title: "Cloud Deployment", description: "AWS, Azure, Google Cloud, Vercel" },
    { icon: Shield, title: "Security Implementation", description: "Authentication, Authorization, Data Protection" },
    { icon: Settings, title: "API Development", description: "RESTful APIs, GraphQL, Microservices" },
  ]

  const projectTypes = [
    {
      title: "E-Commerce Platform",
      description: "Complete online store with payment processing, inventory management, and admin dashboard",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753985485/a-dark-themed-e-commerce-website-homepag_sX6vUnbYS-2yVqMyqa-uMw_lzSdHu0WSg-6gHCq3AeC0w_c2t8ij.jpg",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "Order management",
        "Admin dashboard",
        "Mobile responsive",
      ],
    },
    {
      title: "SaaS Application",
      description: "Software-as-a-Service platform with user management, subscriptions, and analytics",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753985774/a-dark-themed-saas-application-dashboard_nbAy5d19QMyLJJUkB5-Fcw_kUnV9CkzRd63HT8PbMiGzQ_kdx5tv.jpg",
      features: [
        "User authentication",
        "Subscription billing",
        "Analytics dashboard",
        "API integration",
        "Multi-tenancy",
        "Real-time features",
      ],
    },
    {
      title: "Enterprise Web App",
      description: "Custom business application with complex workflows and integrations",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753986454/a-dark-themed-dashboard-interface-for-ga_vGCPUJe1SzWBaaNVZpJd_Q_BZPIUFzASoKpBS5XC5ru0A_adi3me.jpg",
      features: [
        "Custom workflows",
        "Third-party integrations",
        "Advanced reporting",
        "Role-based access",
        "Scalable architecture",
        "Enterprise security",
      ],
    },
  ]

  const techStack = [
    { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", technologies: ["Node.js", "Express", "Python", "Django"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
    { category: "Cloud", technologies: ["AWS", "Vercel", "Docker", "Kubernetes"] },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <Code className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <Database
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <Globe
            className="absolute top-1/2 left-1/4 w-16 h-16 text-orange-400/20 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">Full Stack Development</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">Full Stack Applications</h1>
              <p className="text-xl text-gray-300 mb-8">
                End-to-end web application development with modern technologies, scalable architecture, and exceptional
                user experiences that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
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
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753986838/a-full-stack-web-application-dashboard-i_Rx9E64-RR4q7m9n9SkSbYg_gOGRwn7eQReT9yd_GrAnGQ_gtdstk.jpg"
                alt="Full Stack Development"
                className="rounded-lg shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Development Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for robust, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <tech.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Application Types</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Custom solutions tailored to your specific business needs</p>
          </div>

          <div className="space-y-16">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`animate-on-scroll ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.features.map((feature, featureIndex) => (
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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded-lg shadow-2xl glow-effect w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Consultation Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Let's Build Your Application</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every application is unique. Let's discuss your vision and create something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Code className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">Project Discovery</h3>
                <p className="text-gray-400 mb-6 text-center">
                  Free consultation to understand your requirements and provide technical guidance
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Requirements analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Technical architecture planning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Project timeline estimation
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=fullstack-discovery">Start Discovery</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Globe className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">Custom Proposal</h3>
                <p className="text-gray-400 mb-6 text-center">
                  Detailed project proposal with specifications, timeline, and investment breakdown
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Detailed project scope
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Technology recommendations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Investment breakdown
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=fullstack-proposal">Get Proposal</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Details */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Modern tools and frameworks we use to build exceptional applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-400">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="flex items-center text-gray-300">
                        <Zap className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {tech}
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
              Our proven methodology for delivering successful applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Requirements gathering and project planning" },
              { step: "02", title: "Design", description: "UI/UX design and architecture planning" },
              { step: "03", title: "Development", description: "Agile development with regular updates" },
              { step: "04", title: "Deployment", description: "Testing, deployment, and ongoing support" },
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
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Build Your Application?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that exceeds your expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/contact">contact us</Link>
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
