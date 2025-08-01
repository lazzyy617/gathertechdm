"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, BookOpen, Star, Award, Shield, Brain, Code, Database } from "lucide-react"

export default function CoursesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

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

  const liveEvents = [
    {
      title: "Advanced Cybersecurity Workshop",
      date: "announce soon",
      time: "2:00 PM EST",
      duration: "3 hours",
      instructor: "Karthik",
      participants: 45,
      type: "Workshop",
    },
    {
      title: "IoT Development Masterclass",
      date: "announce soon",
      time: "1:00 PM EST",
      duration: "4 hours",
      instructor: "Janga sumanth",
      participants: 32,
      type: "Masterclass",
    },
    {
      title: "AI in Business Webinar",
      date: "announce soon",
      time: "3:00 PM EST",
      duration: "2 hours",
      instructor: "Siva Thanay",
      participants: 78,
      type: "Webinar",
    },
    {
      title: "UI/UX Design Trends 2024",
      date: "announce soon",
      time: "2:30 PM EST",
      duration: "2.5 hours",
      instructor: "Lisa Thompson",
      participants: 56,
      type: "Workshop",
    },
  ]

  const courses = [
    {
      title: "Artificial Intelligence Fundamentals",
      category: "AI/ML",
      level: "Beginner",
      duration: "12 weeks",
      price: "contact us",
      rating: 4.9,
      students: 1250,
      icon: Brain,
      description: "Comprehensive introduction to AI concepts and applications",
    },
    {
      title: "Machine Learning Mastery",
      category: "AI/ML",
      level: "Intermediate",
      duration: "16 weeks",
      price: "Contact Us",
      rating: 4.8,
      students: 890,
      icon: Brain,
      description: "Deep dive into ML algorithms and practical implementations",
    },
    {
      title: "Deep Learning with Neural Networks",
      category: "AI/ML",
      level: "Advanced",
      duration: "20 weeks",
      price: "contact us",
      rating: 4.9,
      students: 567,
      icon: Brain,
      description: "Advanced neural network architectures and applications",
    },
    {
      title: "AI Tools and Platforms",
      category: "AI/ML",
      level: "Beginner",
      duration: "8 weeks",
      price: "Contact Us",
      rating: 4.7,
      students: 2100,
      icon: Brain,
      description: "Hands-on experience with popular AI tools and platforms",
    },
    {
      title: "Cybersecurity Fundamentals",
      category: "Security",
      level: "Beginner",
      duration: "10 weeks",
      price: "Contact Us",
      rating: 4.8,
      students: 1450,
      icon: Shield,
      description: "Essential cybersecurity concepts and best practices",
    },
    {
      title: "Ethical Hacking Certification",
      category: "Security",
      level: "Advanced",
      duration: "24 weeks",
      price: "Contact Us",
      rating: 4.9,
      students: 678,
      icon: Shield,
      description: "Comprehensive ethical hacking and penetration testing",
    },
    {
      title: "Penetration Testing Bootcamp",
      category: "Security",
      level: "Intermediate",
      duration: "16 weeks",
      price: "Contact Us",
      rating: 4.8,
      students: 543,
      icon: Shield,
      description: "Hands-on penetration testing methodologies",
    },
    {
      title: "Bug Bounty Hunter Program",
      category: "Security",
      level: "Expert",
      duration: "28 weeks",
      price: "Contact Us",
      rating: 4.9,
      students: 234,
      icon: Shield,
      description: "Professional bug bounty hunting techniques",
    },
    {
      title: "Full Stack Web Development",
      category: "Development",
      level: "Intermediate",
      duration: "20 weeks",
      price: "Contact Us",
      rating: 4.7,
      students: 1890,
      icon: Code,
      description: "Complete web development with modern frameworks",
    },
    {
      title: "Python Programming Mastery",
      category: "Development",
      level: "Beginner",
      duration: "12 weeks",
      price: "Contact Us",
      rating: 4.8,
      students: 2340,
      icon: Code,
      description: "Comprehensive Python programming from basics to advanced",
    },
    {
      title: "Java Enterprise Development",
      category: "Development",
      level: "Intermediate",
      duration: "18 weeks",
      price: "Contact Us",
      rating: 4.6,
      students: 987,
      icon: Code,
      description: "Enterprise Java development with Spring framework",
    },
    {
      title: "Data Structures & Algorithms",
      category: "Development",
      level: "Intermediate",
      duration: "14 weeks",
      price: "Contact Us",
      rating: 4.9,
      students: 1567,
      icon: Database,
      description: "Essential DSA concepts for technical interviews",
    },
  ]

  const categories = ["all", "AI/ML", "Security", "Development"]

  const filteredCourses =
    selectedFilter === "all" ? courses : courses.filter((course) => course.category === selectedFilter)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500"
      case "Intermediate":
        return "bg-yellow-500"
      case "Advanced":
        return "bg-orange-500"
      case "Expert":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h1 className="text-5xl font-bold gradient-text mb-6">Courses & Events</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive courses and live events
            </p>
          </div>
        </div>
      </section>

      {/* Live Events Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <Calendar className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">Upcoming Live Events</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Join our interactive webinars and hands-on workshops</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveEvents.map((event, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-orange-400 text-black">{event.type}</Badge>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{event.date}</p>
                      <p className="text-sm text-orange-400">{event.time}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {event.participants} registered
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">Instructor: {event.instructor}</p>

                  <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <BookOpen className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Courses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive learning paths designed by industry experts</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={
                  selectedFilter === category
                    ? "bg-gradient-to-r from-orange-400 to-yellow-400 text-black"
                    : "border-gray-600 text-gray-400 hover:text-orange-400"
                }
              >
                {category === "all" ? "All Courses" : category}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 card-hover animate-on-scroll group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <course.icon className="w-8 h-8 text-orange-400" />
                    <Badge className={`${getLevelColor(course.level)} text-white`}>{course.level}</Badge>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                    <span className="text-lg font-semibold text-orange-400">{course.price}</span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500">
                    contact us
                  </Button>
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
            <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">Start Your Learning Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our expert-led courses
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black hover:from-orange-500 hover:to-yellow-500 glow-effect"
            >
              Browse All Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
