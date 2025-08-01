"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Search,
  FileText,
  ArrowRight,
  Target,
  Bug,
  Network,
} from "lucide-react"

export default function SecurityTestingPage() {
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
      icon: Search,
      title: "Vulnerability Assessment",
      description: "Comprehensive security vulnerability identification",
    },
    { icon: Target, title: "Penetration Testing", description: "Ethical hacking to test your security defenses" },
    { icon: Network, title: "Network Security Audit", description: "Complete network infrastructure security review" },
    { icon: Bug, title: "Web Application Testing", description: "OWASP-based web application security testing" },
    { icon: Lock, title: "Security Consulting", description: "Expert guidance on security best practices" },
    { icon: FileText, title: "Compliance Audits", description: "Ensure compliance with industry standards" },
  ]

  const testingTypes = [
    {
      title: "Web Application Security Testing",
      description: "Comprehensive security assessment of web applications using OWASP methodology",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988308/a-dramatic-conceptual-advertisement-for-_fiWpGor1SkqET0cmWF82aA_uv-QBJ9ITQKGrXhpSX7bUA_dsooxr.jpg",
      features: [
        "SQL Injection Testing",
        "Cross-Site Scripting (XSS)",
        "Authentication Bypass",
        "Session Management",
        "Input Validation",
        "Business Logic Flaws",
      ],
      timeline: "2-4 weeks",
    },
    {
      title: "Network Penetration Testing",
      description: "In-depth network security assessment to identify vulnerabilities and security gaps",
      image: "/https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988308/a-dramatic-conceptual-advertisement-for-_fiWpGor1SkqET0cmWF82aA_uv-QBJ9ITQKGrXhpSX7bUA_dsooxr.jpg",
      features: [
        "Network Reconnaissance",
        "Vulnerability Scanning",
        "Exploitation Testing",
        "Privilege Escalation",
        "Lateral Movement",
        "Data Exfiltration Testing",
      ],
      timeline: "3-6 weeks",
    },
    {
      title: "Mobile Application Security",
      description: "Security testing for iOS and Android applications including static and dynamic analysis",
      image: "https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988334/a-sleek-conceptual-advertisement-for-gat_Sl9Qx-XWQciel-bh4rml5g_uv-QBJ9ITQKGrXhpSX7bUA_wijqny.jpg",
      features: [
        "Static Code Analysis",
        "Dynamic Analysis",
        "Runtime Manipulation",
        "Data Storage Security",
        "Communication Security",
        "Authentication Testing",
      ],
      timeline: "2-3 weeks",
    },
  ]

  const methodologies = [
    { name: "OWASP", description: "Open Web Application Security Project standards" },
    { name: "NIST", description: "National Institute of Standards and Technology framework" },
    { name: "PTES", description: "Penetration Testing Execution Standard" },
    { name: "OSSTMM", description: "Open Source Security Testing Methodology Manual" },
  ]

  const complianceStandards = ["ISO 27001", "SOC 2", "PCI DSS", "HIPAA", "GDPR", "NIST Cybersecurity Framework"]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <Shield className="absolute top-20 right-20 w-32 h-32 text-orange-400/10 float-animation" />
          <Lock
            className="absolute bottom-20 left-20 w-24 h-24 text-yellow-400/10 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <Eye
            className="absolute top-1/2 left-1/4 w-16 h-16 text-orange-400/20 float-animation"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge className="bg-orange-400 text-black mb-4">Cybersecurity</Badge>
              <h1 className="text-5xl font-bold gradient-text mb-6">Security Testing</h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive security audits and penetration testing services to identify vulnerabilities and
                strengthen your digital defenses against cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500"
                >
                  Secure Your Systems <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
                >
                  Free Security Assessment
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <img
                src="https://res.cloudinary.com/dmc3hjfnr/image/upload/v1753988439/design-a-dark-themed-high-tech-graphic-r_Qyde5A1dS02ZQRrJXe8Mjg_uv-QBJ9ITQKGrXhpSX7bUA_o8rvep.jpg"
                alt="Security Testing Dashboard"
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
            <h2 className="text-4xl font-bold gradient-text mb-4">Security Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive security testing and consulting services to protect your digital assets
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

      {/* Testing Types */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Security Testing Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized security testing services for different types of systems and applications
            </p>
          </div>

          <div className="space-y-16">
            {testingTypes.map((test, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`animate-on-scroll ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h3 className="text-3xl font-bold mb-4">{test.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{test.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {test.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="text-orange-400 font-semibold">{test.timeline}</p>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                    Get Security Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className={`animate-on-scroll ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <img
                    src={test.image || "/placeholder.svg"}
                    alt={test.title}
                    className="rounded-lg shadow-2xl glow-effect w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Testing Methodologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Industry-standard methodologies and frameworks we follow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">{methodology.name}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{methodology.name}</h3>
                  <p className="text-gray-400 text-sm">{methodology.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Compliance Standards</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We help ensure your systems meet industry compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
                <CardContent className="p-4 text-center">
                  <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-sm font-medium">{standard}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Security Testing Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our systematic approach to comprehensive security testing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Reconnaissance", description: "Information gathering and attack surface mapping" },
              {
                step: "02",
                title: "Vulnerability Assessment",
                description: "Automated and manual vulnerability identification",
              },
              { step: "03", title: "Exploitation", description: "Controlled exploitation to validate vulnerabilities" },
              { step: "04", title: "Reporting", description: "Detailed report with remediation recommendations" },
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

      {/* Security Consultation Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Secure Your Digital Assets</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get expert security assessment and recommendations to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Shield className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">Free Security Assessment</h3>
                <p className="text-gray-400 mb-6 text-center">
                  Complimentary security evaluation to identify potential vulnerabilities
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Basic vulnerability scan
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Security recommendations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Risk assessment report
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=security-assessment">Get Assessment</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-center">Comprehensive Testing</h3>
                <p className="text-gray-400 mb-6 text-center">
                  Full-scale penetration testing and security audit services
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Penetration testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Compliance auditing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Detailed reporting
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                  <Link href="/contact?service=security-testing">Start Testing</Link>
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
            <AlertTriangle className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">Secure Your Digital Assets Today</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Proactively identify and fix vulnerabilities before attackers do
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
              >
                <Link href="/contact">Get Security Assessment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent"
              >
                Schedule Security Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
