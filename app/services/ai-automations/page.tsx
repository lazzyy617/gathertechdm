"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Bot,
  Zap,
  Workflow,
  Database,
  Clock,
  Settings,
  ArrowRight,
  CheckCircle,
  Cpu,
  Network,
  BarChart3,
} from "lucide-react"

export default function AIAutomationsPage() {
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

  const automationTypes = [
    { icon: Workflow, title: "Process Automation", description: "Streamline repetitive business processes" },
    { icon: Database, title: "Data Processing", description: "Automated data collection and analysis" },
    { icon: Clock, title: "Task Scheduling", description: "Intelligent task scheduling and execution" },
    { icon: Settings, title: "System Integration", description: "Connect and automate between systems" },
    { icon: BarChart3, title: "Report Generation", description: "Automated reporting and analytics" },
    { icon: Network, title: "Workflow Orchestration", description: "Complex multi-step automation workflows" },
  ]

  const benefits = [
    { title: "80% Time Savings", description: "Reduce manual work by up to 80%" },
    { title: "99.9% Accuracy", description: "Eliminate human errors in repetitive tasks" },
    { title: "24/7 Operation", description: "Automated processes work around the clock" },
    { title: "Cost Reduction", description: "Significant reduction in operational costs" },
  ]

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Automated ticket routing, response generation, and escalation management",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753870542/a-sleek-conceptual-advertisement-for-gat_RFuV24-nR9Gejkqt58T-UA_7b2W4C5lTaGoieUK0YkDtA_n5qa6a.jpg",
      features: ["Intelligent ticket routing", "Automated responses", "Escalation management", "Performance analytics"],
    },
    {
      title: "Sales Process Automation",
      description: "Lead qualification, follow-up sequences, and pipeline management automation",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753870499/a-sleek-conceptual-advertisement-for-gat_26d3-csWTje6BBTlFB_CpA_7b2W4C5lTaGoieUK0YkDtA_mv1mbc.jpg",
      features: ["Lead scoring", "Email sequences", "CRM integration", "Sales analytics"],
    },
    {
      title: "Financial Process Automation",
      description: "Invoice processing, expense management, and financial reporting automation",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753870442/a-striking-conceptual-advertisement-for-_VwS_PtXqQ9WMx21BKaRzqg_7b2W4C5lTaGoieUK0YkDtA_yqsyqx.jpg",
      features: ["Invoice processing", "Expense tracking", "Financial reporting", "Compliance monitoring"],
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <Bot className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <Cpu
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <Zap
            className="absolute top-1/2 left-1/4 w-16 h-16 text-orange-400/20 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">AI & Automation</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">AI Automations</h1>
              <p className="text-xl text-gray-300 mb-8">
                Intelligent process automation solutions that transform your business operations, reduce costs, and
                increase efficiency through cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  Start Automation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
                >
                  View Demo
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753870265/a-sleek-conceptual-advertisement-for-gat_j2NOWNeUTGC_SK8NWSnL7w_7b2W4C5lTaGoieUK0YkDtA_wpxlt4.jpg"
                alt="AI Automation Workflow"
                className="rounded-lg shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose AI Automation?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transform your business with intelligent automation that delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold gradient-text mb-3">{benefit.title}</div>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Automation Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive automation services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-400">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Real-World Applications</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how AI automation transforms different business functions
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`animate-on-scroll ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h3 className="text-3xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`animate-on-scroll ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="rounded-lg shadow-2xl glow-effect w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge tools and platforms for robust automation solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["Python", "TensorFlow", "OpenAI", "Zapier", "Microsoft Power Automate", "UiPath"].map((tech, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-black font-bold text-xs">{tech.slice(0, 2)}</span>
                  </div>
                  <p className="text-sm font-medium">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Start Your Automation Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8 text-center">
                <Bot className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Free Automation Assessment</h3>
                <p className="text-gray-400 mb-6">
                  Get a comprehensive analysis of your current processes and automation opportunities
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=ai-automation">Get Assessment</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Custom Solution Design</h3>
                <p className="text-gray-400 mb-6">
                  Work with our experts to design the perfect automation solution for your needs
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=ai-automation-custom">Start Project</Link>
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
            <h2 className="text-4xl font-bold gradient-text mb-4">Ready to Automate Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI automation can transform your operations and drive efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
