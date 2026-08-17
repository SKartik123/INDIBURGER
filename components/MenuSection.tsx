'use client'

import { motion } from 'framer-motion'
import BurgerExpander from './BurgerExpander'

const MenuSection = () => {
  const menuCategories = {
    'Vegetarian': [
      {
        id: 1,
        name: 'Paneer Tikka',
        price: 249,
        topLayer: 'Marinated Paneer',
        middleLayer: 'Bell Peppers & Onions',
        protein: 16,
        fat: 10,
        calories: 350,
        description: 'Classic paneer with traditional spices',
        badge: '🌱 Veg',
      },
      {
        id: 2,
        name: 'Aloo Tikki',
        price: 199,
        topLayer: 'Crispy Potato Patty',
        middleLayer: 'Chutneys & Cucumber',
        protein: 8,
        fat: 8,
        calories: 280,
        description: 'Traditional potato patty burger',
        badge: '🌱 Veg',
      },
    ],
    'Chicken': [
      {
        id: 3,
        name: 'Tandoori Chicken',
        price: 279,
        topLayer: 'Tandoori Chicken',
        middleLayer: 'Yogurt Mayo & Lettuce',
        protein: 22,
        fat: 10,
        calories: 420,
        description: 'Smoky tandoori flavors',
        badge: '🍗 Chicken',
      },
      {
        id: 4,
        name: 'Chilly Garlic Chicken',
        price: 269,
        topLayer: 'Garlic Fried Chicken',
        middleLayer: 'Green Chilly Sauce',
        protein: 20,
        fat: 11,
        calories: 400,
        description: 'Spicy and tangy chicken burger',
        badge: '🌶️ Spicy',
      },
    ],
    'Mutton': [
      {
        id: 5,
        name: 'Keema Pav',
        price: 299,
        topLayer: 'Spiced Mutton Keema',
        middleLayer: 'Caramelized Onions',
        protein: 24,
        fat: 14,
        calories: 480,
        description: 'Traditional keema preparation',
        badge: '🐑 Mutton',
      },
      {
        id: 6,
        name: 'Mutton Seekh',
        price: 289,
        topLayer: 'Mutton Seekh Kabab',
        middleLayer: 'Mint Chutney & Cheese',
        protein: 23,
        fat: 12,
        calories: 460,
        description: 'Grilled mutton seekh kabab',
        badge: '🐑 Mutton',
      },
    ],
    'Sides': [
      {
        id: 7,
        name: 'Masala Fries',
        price: 99,
        topLayer: 'Crispy Fries',
        middleLayer: 'Indian Spice Mix',
        protein: 3,
        fat: 12,
        calories: 220,
        description: 'Fries with Indian masala',
        badge: '🍟 Side',
      },
      {
        id: 8,
        name: 'Chaat Fries',
        price: 129,
        topLayer: 'Crispy Fries',
        middleLayer: 'Chaat Masala & Toppings',
        protein: 4,
        fat: 13,
        calories: 250,
        description: 'Street style chaat fries',
        badge: '🍟 Side',
      },
    ],
  }

  return (
    <section id="menu" className="py-20 bg-burger-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Complete <span className="text-burger-orange">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg">Explore all our delicious offerings</p>
        </motion.div>

        {Object.entries(menuCategories).map((category, catIndex) => (
          <motion.div
            key={category[0]}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-burger-orange">
              {category[0]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category[1].map((burger) => (
                <BurgerExpander key={burger.id} burger={burger} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default MenuSection
