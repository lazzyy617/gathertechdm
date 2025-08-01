import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-orange-400" />
              <span className="text-xl font-bold gradient-text">GatherTech DM</span>
            </div>
            <p className="text-gray-400">
              Innovating the future of technology with cutting-edge solutions and comprehensive education.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-orange-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-orange-400 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors">
                Services
              </Link>
              <Link href="/courses" className="block text-gray-400 hover:text-orange-400 transition-colors">
                Courses
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400">AI Automations</p>
              <p className="text-gray-400">Full Stack Development</p>
              <p className="text-gray-400">Mobile App Development</p>
              <p className="text-gray-400">Security Testing</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">gathertechdm@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">+91 9390713454</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">#28, 23-26, Moulana St, Near Vijaya Talkies, Arundalpet, Governor Peta, Vijayawada, Andhra Pradesh 520002, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GatherTech DM. All rights reserved. | Innovating Tomorrow's Technology Today
          </p>
        </div>
      </div>
    </footer>
  )
}
