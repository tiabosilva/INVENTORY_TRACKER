import { useState } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './search/SearchBar';
import SearchFilters from './search/SearchFilters';

const Search = ({ onSearch }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'relevance',
    rating: 'all',
    availability: 'all',
    brand: 'all',
    shippingSpeed: 'all'
  });

  const handleSearch = (searchTerm) => {
    onSearch({ searchTerm, filters });
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-4">
        <SearchBar onSearch={handleSearch} />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-3 bg-[#1c2537] text-gray-400 hover:text-white rounded-lg border border-[#2c374b] transition-colors"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <SearchFilters
              filters={filters}
              onChange={(newFilters) => setFilters(newFilters)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;