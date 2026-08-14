import { motion } from 'framer-motion'

const MenuSection = () => {
  const menuItems = [
    { category: 'Vegetarian', icon: '🥬', items: ['Paneer Tikka', 'Aloo Kabab', 'Mushroom Mozzarella', 'Corn Delight'] },
    { category: 'Chicken', icon: '🍗', items: ['Tandoori Chicken', 'Butter Chicken', 'Spiced Chicken', 'Grilled Chicken'] },
    { category: 'Mutton', icon: '🥩', items: ['Biryani Mutton', 'Seekh Kebab', 'Mughlai Mutton', 'Keema Burger'] },
    { category: 'Sides', icon: '🍟', items: ['Crispy Fries', 'Garlic Mayo Fries', 'Cheese Fries', 'Spiced Potato Wedges'] },
  ]

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-900 to-burger-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            📋 Our <span className="text-burger-orange">Menu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((menu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 hover:from-burger-orange hover:to-burger-red transition border border-burger-orange"
            >
              <div className="text-4xl mb-4 text-center">{menu.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{menu.category}</h3>
              <ul className="space-y-2">
                {menu.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-gray-300 flex items-center gap-2">
                    <span className="text-burger-orange">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
