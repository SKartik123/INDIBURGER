'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface BurgerProps {
  burger: {
    id: number
    name: string
    price: number
    topLayer: string
    middleLayer: string
    protein: number
    fat: number
    calories: number
    description: string
    badge: string
  }
}

const BurgerExpander = ({ burger }: BurgerProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-burger-orange hover:border-burger-red transition"
        layout
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{burger.name}</h3>
            <p className="text-burger-orange font-bold text-lg">₹{burger.price}</p>
          </div>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-2xl"
          >
            ⬇️
          </motion.span>
        </div>

        <p className="text-gray-300 text-sm mb-4">{burger.description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3 border-t border-burger-orange pt-4"
            >
              <div className="bg-burger-dark bg-opacity-50 p-3 rounded-lg">
                <p className="text-gray-400 text-sm">🥖 Top Layer</p>
                <p className="text-burger-orange font-semibold">{burger.topLayer}</p>
              </div>
              <div className="bg-burger-dark bg-opacity-50 p-3 rounded-lg">
                <p className="text-gray-400 text-sm">🌶️ Middle Layer</p>
                <p className="text-burger-orange font-semibold">{burger.middleLayer}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-burger-dark bg-opacity-50 p-3 rounded-lg text-center">
                  <p className="text-gray-400 text-xs">Protein</p>
                  <p className="text-burger-orange font-bold">{burger.protein}g</p>
                </div>
                <div className="bg-burger-dark bg-opacity-50 p-3 rounded-lg text-center">
                  <p className="text-gray-400 text-xs">Fat</p>
                  <p className="text-burger-orange font-bold">{burger.fat}g</p>
                </div>
                <div className="bg-burger-dark bg-opacity-50 p-3 rounded-lg text-center">
                  <p className="text-gray-400 text-xs">Calories</p>
                  <p className="text-burger-orange font-bold">{burger.calories}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default BurgerExpander
