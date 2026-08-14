import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-burger-dark to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="text-9xl inline-block">🍔</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
        >
          Welcome to <span className="text-burger-orange">IndiBurger</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Discover the finest Indian-inspired burgers with authentic flavors and premium ingredients
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-burger-orange text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-burger-red transition"
        >
          Scroll to Explore
        </motion.button>
      </div>
    </div>
  )
}

export default Hero
