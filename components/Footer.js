import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 border-t-2 border-burger-orange py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍔</span>
              <span className="text-white font-bold text-xl text-burger-orange">IndiBurger</span>
            </div>
            <p className="text-gray-400 text-sm">Authentic Indian burgers with premium ingredients and traditional flavors.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-burger-orange">Quick Links</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#menu" className="hover:text-burger-orange transition">Menu</a></li>
              <li><a href="#bestseller" className="hover:text-burger-orange transition">Bestsellers</a></li>
              <li><a href="#address" className="hover:text-burger-orange transition">Locations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-burger-orange">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-burger-orange transition">📘</a>
              <a href="#" className="hover:text-burger-orange transition">🐦</a>
              <a href="#" className="hover:text-burger-orange transition">📷</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-burger-orange">Contact</h4>
            <p className="text-gray-400 text-sm">Email: info@indiburger.com</p>
            <p className="text-gray-400 text-sm">Phone: +91 9352210765</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 IndiBurger. All rights reserved. Made with 🧡 for burger lovers.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
