'use client'

import { motion } from 'framer-motion'

const AddressSection = () => {
  return (
    <section id="address" className="py-20 bg-gradient-to-b from-burger-dark to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-burger-orange to-burger-red rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🍔 Ready to Order?
          </h2>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">📍 Our Location</h3>
            <p className="text-white text-xl font-semibold mb-2">
              Veer Durga Das Colony
            </p>
            <p className="text-white text-lg opacity-90">
              Delhi, India
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-white text-lg mb-4">Call us now to place your order!</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919352210765"
                className="inline-block bg-white text-burger-red font-bold px-8 py-4 rounded-lg text-xl hover:bg-gray-100 transition"
              >
                📱 +91 9352210765
              </motion.a>
            </div>

            <div className="text-white text-sm opacity-75">
              <p>Open Daily</p>
              <p>11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Order Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '📞', title: 'Call Now', desc: 'Direct phone order' },
            { icon: '📍', title: 'Visit Us', desc: 'Dine-in experience' },
            { icon: '🚚', title: 'Delivery', desc: 'Home delivery available' },
          ].map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{method.title}</h4>
              <p className="text-gray-400">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AddressSection
