import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';

const Favorites = () => {
  const [favorites] = useState([
    {
      id: 1,
      name: 'Premium Laptop',
      price: 1299.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      price: 149.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 299.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      category: 'Electronics'
    }
  ]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Favorite Items</h2>
        <p className="text-gray-400">Your saved items for future purchase</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a0f1c] rounded-xl border border-[#1c2537] overflow-hidden group"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
                <HeartIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#33bbcf]">{item.category}</span>
                <div className="flex items-center">
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400 ml-1">{item.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
              <p className="text-2xl font-bold text-white mb-4">${item.price}</p>
              
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 bg-[#33bbcf] text-white rounded-lg hover:bg-[#2ba9bd] transition-colors flex items-center">
                  <ShoppingCartIcon className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="px-4 py-2 border border-[#1c2537] text-white rounded-lg hover:bg-[#1c2537] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;