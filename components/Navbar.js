import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-burger-dark bg-opacity-95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🍔</span>
            <span className="text-white font-bold text-2xl text-burger-orange">IndiBurger</span>
          </div>
          <div className="hidden md:flex gap-8">
            <Link href="#menu" className="text-gray-300 hover:text-burger-orange transition">
              Menu
            </Link>
            <Link href="#bestseller" className="text-gray-300 hover:text-burger-orange transition">
              Bestseller
            </Link>
            <Link href="#address" className="text-gray-300 hover:text-burger-orange transition">
              Address
            </Link>
          </div>
          <button className="bg-burger-orange text-white px-6 py-2 rounded-lg hover:bg-burger-red transition font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
