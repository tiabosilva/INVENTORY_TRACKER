import { ClockIcon, FireIcon, TagIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const SearchSuggestions = ({
  query,
  loading,
  suggestions,
  recentSearches,
  categories,
  onSuggestionClick
}) => {
  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 bg-[#2c374b] rounded w-3/4" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-2">
      {query && suggestions.length > 0 && (
        <div className="px-4 py-2">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Suggestions</h3>
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSuggestionClick(suggestion)}
              className="flex items-center w-full px-2 py-2 text-white hover:bg-[#2c374b] rounded-lg"
            >
              <FireIcon className="h-4 w-4 mr-3 text-[#33bbcf]" />
              {suggestion}
            </motion.button>
          ))}
        </div>
      )}

      {!query && recentSearches.length > 0 && (
        <div className="px-4 py-2 border-b border-[#2c374b]">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Recent Searches</h3>
          {recentSearches.map((search, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSuggestionClick(search)}
              className="flex items-center w-full px-2 py-2 text-white hover:bg-[#2c374b] rounded-lg"
            >
              <ClockIcon className="h-4 w-4 mr-3 text-gray-400" />
              {search}
            </motion.button>
          ))}
        </div>
      )}

      <div className="px-4 py-2">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Popular Categories</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSuggestionClick(category)}
              className="flex items-center px-3 py-2 text-white bg-[#2c374b] hover:bg-[#33bbcf]/10 rounded-lg"
            >
              <TagIcon className="h-4 w-4 mr-2 text-[#33bbcf]" />
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;