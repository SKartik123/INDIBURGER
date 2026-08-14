import { motion } from 'framer-motion'
import { useState } from 'react'

const BurgerExpander = ({ burger }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const containerVariants = {
    collapsed: { height: '300px' },
    expanded: { height: 'auto' },
  }

  const burgerComponents = [
    { name: 'Top Bun', icon: '🍞', color: 'bg-amber-700', y: 0 },
    { name: burger.topLayer, icon: '🧅', color: 'bg-yellow-600', y: 40, nutrition: 'Vitamins & Fiber' },
    { name: 'Sauce', icon: '🍅', color: 'bg-red-600', y: 80, nutrition: 'Antioxidants' },
    { name: 'Patty', icon: '🥩', color: 'bg-red-900', y: 120, nutrition: 'Protein & Iron' },
    { name: burger.middleLayer, icon: '🥒', color: 'bg-green-600', y: 160, nutrition: 'Vitamins & Minerals' },
    { name: 'Bottom Bun', icon: '🍞', color: 'bg-amber-700', y: 200 },
  ]

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 cursor-pointer border-2 border-burger-orange hover:border-burger-red transition"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-center mb-6">
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-6xl inline-block"
        >
          🍔
        </motion.span>
        <h3 className="text-2xl font-bold text-burger-orange mt-4">{burger.name}</h3>
        <p className="text-gray-300 mt-2">₹{burger.price}</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="relative h-96 mb-8">
          {burgerComponents.map((component, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 0, opacity: 0 }}
              animate={isExpanded ? { y: component.y, opacity: 1 } : { y: 0, opacity: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`absolute left-1/2 -translate-x-1/2 w-48 p-4 rounded-lg text-white font-bold text-center shadow-lg ${component.color}`}
            >
              <div className="text-3xl mb-2">{component.icon}</div>
              <div className="text-lg">{component.name}</div>
              {component.nutrition && <div className="text-sm text-gray-100 mt-1">✨ {component.nutrition}</div>}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-blue-600 rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold">{burger.protein}g</div>
            <div className="text-sm">Protein</div>
          </div>
          <div className="bg-amber-600 rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold">{burger.fat}g</div>
            <div className="text-sm">Fat</div>
          </div>
          <div className="bg-green-600 rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold">{burger.calories}</div>
            <div className="text-sm">Calories</div>
          </div>
        </div>

        <p className="text-gray-300 mt-6 text-center">{burger.description}</p>

        <button className="w-full mt-6 bg-burger-orange hover:bg-burger-red text-white font-bold py-3 rounded-lg transition">
          Add to Cart
        </button>
      </motion.div>

      {!isExpanded && (
        <div className="text-center mt-4">
          <p className="text-burger-orange font-semibold">Click to expand and see ingredients</p>
        </div>
      )}
    </motion.div>
  )
}

export default BurgerExpander
