import { motion } from 'framer-motion'

const AddressSection = () => {
  const locations = [
    {
      city: 'Veer Durga Das Colony',
      address: 'Veer Durga Das Colony, Delhi',
      phone: '+91 9352210765',
      hours: '11:00 AM - 11:00 PM',
      icon: '🏪',
    },
  ]

  return (
    <section id="address" className="py-20 bg-burger-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            📍 Visit <span className="text-burger-orange">IndiBurger</span>
          </h2>
          <p className="text-gray-300 text-lg">Fresh, Authentic, Delicious - Now in Veer Durga Das Colony</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {locations.map((location, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8 border-l-4 border-burger-orange hover:shadow-2xl transition"
            >
              <div className="text-6xl mb-6 text-center">{location.icon}</div>
              <h3 className="text-3xl font-bold text-burger-orange mb-6 text-center">{location.city}</h3>
              <div className="space-y-4 text-gray-300 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-burger-orange text-2xl">📌</span>
                  <span>{location.address}</span>
                </p>
                <p className="flex items-center gap-3 bg-burger-orange bg-opacity-10 p-3 rounded-lg">
                  <span className="text-burger-orange text-2xl">📞</span>
                  <span className="font-semibold">{location.phone}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-burger-orange text-2xl">🕐</span>
                  <span>{location.hours}</span>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <a href={`tel:${location.phone}`} className="bg-burger-orange hover:bg-burger-red text-white font-bold py-3 rounded-lg transition text-center">
                  Call Now
                </a>
                <button className="bg-burger-red hover:bg-burger-orange text-white font-bold py-3 rounded-lg transition">
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-burger-orange to-burger-red rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-3">🚀 Coming Soon to More Locations!</h3>
          <p className="text-lg">Subscribe to our newsletter to get updates about new IndiBurger outlets</p>
          <div className="mt-4 flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-burger-dark font-semibold"
            />
            <button className="bg-burger-dark hover:bg-gray-800 px-6 py-2 rounded-lg font-bold transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AddressSection
