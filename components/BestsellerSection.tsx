'use client'

import { motion } from 'framer-motion'
import BurgerExpander from './BurgerExpander'

const BestsellerSection = () => {
  const bestsellers = [
    {
      id: 1,
      name: 'Paneer Tikka Burger',
      price: 249,
      topLayer: 'Paneer Tikka Marinade',
      middleLayer: 'Cheese & Onions',
      protein: 18,
      fat: 12,
      calories: 380,
      description: 'Grilled paneer with traditional Indian spices',
      badge: '⭐ Best Seller',
    },
    {
      id: 2,
      name: 'Tandoori Chicken Burger',
      price: 279,
      topLayer: 'Tandoori Chicken',
      middleLayer: 'Yogurt Mayo & Lettuce',
      protein: 22,
      fat: 10,
      calories: 420,
      description: 'Smoky tandoori chicken with fresh toppings',
      badge: '🔥 Hot Pick',
    },
    {
      id: 3,
      name: 'Keema Pav Burger',
      price: 299,
      topLayer: 'Spiced Mutton Keema',
      middleLayer: 'Caramelized Onions & Cheese',
      protein: 24,
      fat: 14,
      calories: 480,
      description: 'Traditional keema flavors in burger form',
      badge: '🏆 Premium',
    },
  ]

  return (
    <section id="bestseller" className="py-20 bg-gradient-to-b from-burger-dark to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-burger-orange">Our</span> Bestsellers
          </h2>
          <p className="text-gray-400 text-lg">Most loved burgers by our customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map((burger, index) => (
            <motion.div
              key={burger.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-burger-red text-white px-3 py-1 rounded-lg text-sm font-bold">
                  {burger.badge}
                </div>
                <BurgerExpander burger={burger} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellerSection
