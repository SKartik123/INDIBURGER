import { motion } from 'framer-motion'
import BurgerExpander from './BurgerExpander'

const BestsellerSection = () => {
  const bestsellers = [
    {
      id: 1,
      name: 'Spicy Paneer Burger',
      price: 299,
      topLayer: 'Crispy Paneer',
      middleLayer: 'Jalapeños & Cilantro',
      protein: 18,
      fat: 12,
      calories: 450,
      description: 'A vegetarian delight with crispy paneer, spicy mayo, and fresh cilantro. Perfect for spice lovers!',
      badge: '⭐ #1 Bestseller',
    },
    {
      id: 2,
      name: 'Tandoori Chicken Burger',
      price: 349,
      topLayer: 'Tandoori Chicken',
      middleLayer: 'Mint Chutney',
      protein: 28,
      fat: 8,
      calories: 520,
      description: 'Authentic tandoori-grilled chicken with mint chutney, onions, and tomatoes. A true IndiBurger favorite!',
      badge: '🔥 Fan Favorite',
    },
    {
      id: 3,
      name: 'Butter Chicken Burger',
      price: 379,
      topLayer: 'Butter Chicken',
      middleLayer: 'Caramelized Onions',
      protein: 26,
      fat: 15,
      calories: 580,
      description: 'Creamy butter chicken with caramelized onions, mozzarella, and special spice blend. Indulgence at its finest!',
      badge: '✨ Premium Choice',
    },
  ]

  return (
    <section id="bestseller" className="py-20 bg-burger-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            🌟 Our <span className="text-burger-orange">Bestsellers</span>
          </h2>
          <p className="text-gray-300 text-lg">Click on any burger to expand and explore its delicious components!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.map((burger, idx) => (
            <motion.div
              key={burger.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 bg-burger-red text-white px-4 py-2 rounded-full font-bold text-sm">
                {burger.badge}
              </div>
              <BurgerExpander burger={burger} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellerSection
