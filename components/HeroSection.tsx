'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-burger-orange via-burger-dark to-burger-red opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-burger-orange">Authentic</span> Indian
            <br />
            <span className="text-burger-red">Burgers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of traditional Indian flavors with modern burger craft
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="bg-burger-orange hover:bg-burger-red text-white font-bold px-8 py-4 rounded-lg transition text-lg"
          >
            Explore Menu
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919352210765"
            className="border-2 border-burger-orange hover:bg-burger-orange text-burger-orange hover:text-white font-bold px-8 py-4 rounded-lg transition text-lg"
          >
            Order Now
          </motion.a>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-16 text-8xl"
        >
          🍔
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
