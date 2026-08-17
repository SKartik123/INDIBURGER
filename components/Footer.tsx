'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-burger-orange">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍔</span>
              <span className="text-2xl font-bold text-burger-orange">IndiBurger</span>
            </Link>
            <p className="text-sm">Authentic Indian burgers with traditional flavors</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#menu" className="hover:text-burger-orange transition">Menu</Link></li>
              <li><Link href="#bestseller" className="hover:text-burger-orange transition">Bestsellers</Link></li>
              <li><Link href="#address" className="hover:text-burger-orange transition">Location</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +91 9352210765</li>
              <li>📍 Veer Durga Das Colony</li>
              <li>🕐 11 AM - 11 PM Daily</li>
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-burger-orange transition">📘</a>
              <a href="#" className="hover:text-burger-orange transition">📷</a>
              <a href="#" className="hover:text-burger-orange transition">🐦</a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} IndiBurger. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-burger-orange transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-burger-orange transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
