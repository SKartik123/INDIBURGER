'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-burger-dark bg-opacity-95 backdrop-blur-md z-50 border-b border-burger-orange"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-4xl">🍔</span>
          <span className="text-burger-orange">IndiBurger</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#menu" className="hover:text-burger-orange transition font-semibold">
            Menu
          </Link>
          <Link href="#bestseller" className="hover:text-burger-orange transition font-semibold">
            Bestsellers
          </Link>
          <Link href="#address" className="hover:text-burger-orange transition font-semibold">
            Locations
          </Link>
        </div>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="tel:+919352210765"
          className="hidden md:block bg-burger-orange hover:bg-burger-red text-white font-bold px-6 py-2 rounded-lg transition"
        >
          Order Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-burger-orange text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-burger-dark border-t border-burger-orange p-4 space-y-4"
        >
          <Link href="#menu" className="block hover:text-burger-orange transition font-semibold">
            Menu
          </Link>
          <Link href="#bestseller" className="block hover:text-burger-orange transition font-semibold">
            Bestsellers
          </Link>
          <Link href="#address" className="block hover:text-burger-orange transition font-semibold">
            Locations
          </Link>
          <a href="tel:+919352210765" className="block bg-burger-orange text-white font-bold px-4 py-2 rounded-lg text-center">
            Order Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
