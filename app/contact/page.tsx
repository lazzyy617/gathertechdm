"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  X,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const service = urlParams.get("service")
    if (service) {
      setSelectedService(service)
      setShowForm(true)
    }
  }, [])

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Show success message (you can implement a toast notification here)
    alert("Message sent successfully! We'll get back to you soon.")
  }

  const validateForm = () => {
    return formData.name && formData.email && formData.subject && formData.message
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h1 className="text-5xl font-bold gradient-text mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team of experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900/50 border-gray-800 animate-on-scroll">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-8 h-8 text-orange-400 mr-3" />
                  <h2 className="text-2xl font-bold">Get In Touch</h2>
                </div>

                <div className="space-y-6">
                  <Button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 text-lg py-4"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Start Your Project - Fill Our Form
                  </Button>

                  <div className="text-center">
                    <p className="text-gray-400 mb-4">Or reach out directly:</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <Mail className="w-5 h-5 text-orange-400 mr-2" />
                        <span className="text-gray-300">gathertechdm@gmail.com</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Phone className="w-5 h-5 text-orange-400 mr-2" />
                        <span className="text-gray-300">+91 9390713454</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-center">Quick Actions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedService("consultation")
                          setShowForm(true)
                        }}
                        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
                      >
                        Free Consultation
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedService("quote")
                          setShowForm(true)
                        }}
                        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
                      >
                        Get Quote
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedService("demo")
                          setShowForm(true)
                        }}
                        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
                      >
                        Schedule Demo
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedService("support")
                          setShowForm(true)
                        }}
                        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
                      >
                        Technical Support
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-lg font-semibold">Our Location</h3>
                  </div>
                  <p className="text-gray-400">
                    #28, 23-26, Moulana St, Near Vijaya Talkies, Arundalpet, Governor Peta
                    <br />
                    Vijayawada, Andhra Pradesh 520002,
                    <br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-lg font-semibold">Phone</h3>
                  </div>
                  <p className="text-gray-400">
                    Main: +91 93907 13454 
                    <br />
                    Support: +91 93907 13454
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-lg font-semibold">Email</h3>
                  </div>
                  <p className="text-gray-400">
                    General: gathertechdm@gmail.com
                    <br />
                    Support: gathertechdm@gmail.com
                    <br />
                    Careers: gathertechdm877@gmail.com
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                  </div>
                  <p className="text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                    <br />
                    Saturday: 10:00 AM - 4:00 PM EST
                    <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Facebook className="w-8 h-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                    <Twitter className="w-8 h-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                    <Linkedin className="w-8 h-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                    <Instagram className="w-8 h-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Find Us</h2>
            <p className="text-gray-400">Visit our office or schedule a virtual meeting</p>
          </div>

          <div className="animate-on-scroll">
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500">#28, 23-26, Moulana St, Near Vijaya Talkies, Arundalpet, Governor Peta, Vijayawada, Andhra Pradesh 520002, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400/10 to-yellow-400/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions about our services and courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary based on complexity and scope. Typically, web applications take 8-16 weeks, while mobile apps require 12-20 weeks.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we provide comprehensive support packages including maintenance, updates, and technical assistance for all our projects.",
              },
              {
                question: "Can I enroll in multiple courses simultaneously?",
                answer:
                  "Many students take multiple courses. We recommend discussing your learning goals with our advisors to create an optimal schedule.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, bank transfers, and offer flexible payment plans for courses and services.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-orange-400">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold gradient-text">
                {selectedService
                  ? `${selectedService.charAt(0).toUpperCase() + selectedService.slice(1)} Request`
                  : "Contact Form"}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <iframe
                src="https://forms.gle/hT4BCBK1b4N21h158"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm mb-4">Having trouble with the form? Contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@gathertechdm.com"
                    className="flex items-center justify-center px-4 py-2 bg-orange-400 text-black rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-center px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-black transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
