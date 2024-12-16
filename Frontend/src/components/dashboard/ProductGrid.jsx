import { motion } from 'framer-motion';
import { StarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const ProductGrid = ({ products, onAddToCart, onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1c2537] rounded-xl overflow-hidden border border-[#2c374b] group"
        >
          <div className="relative h-48">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => onToggleFavorite(product.id)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              {product.isFavorite ? (
                <HeartIconSolid className="w-5 h-5 text-red-500" />
              ) : (
                <HeartIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#33bbcf]">{product.category}</span>
              <div className="flex items-center">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400 ml-1">{product.rating}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">${product.price}</span>
              <button
                onClick={() => onAddToCart(product)}
                className="flex items-center px-4 py-2 bg-[#33bbcf] text-white rounded-lg hover:bg-[#2ba9bd] transition-colors"
              >
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;