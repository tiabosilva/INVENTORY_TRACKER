import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import Search from './Search';
import ProductGrid from './ProductGrid';

const ClientHome = () => {
  const { state: productState } = useProducts();
  const { dispatch: cartDispatch } = useCart();
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'relevance',
    rating: 'all'
  });

  const handleAddToCart = (product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleToggleFavorite = (productId) => {
    favoritesDispatch({ type: 'TOGGLE_FAVORITE', payload: productId });
  };

  const filteredProducts = productState.products
    .filter(product => {
      if (searchQuery) {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
               product.category.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .filter(product => {
      if (filters.category === 'all') return true;
      return product.category === filters.category;
    })
    .filter(product => {
      if (filters.priceRange === 'all') return true;
      const [min, max] = filters.priceRange.split('-').map(Number);
      return product.price >= min && (!max || product.price <= max);
    })
    .map(product => ({
      ...product,
      isFavorite: favoritesState.items.includes(product.id)
    }));

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to the Store</h1>
        <Search
          onSearch={setSearchQuery}
          filters={filters}
          onFiltersChange={setFilters}
        />
      </div>

      <ProductGrid
        products={filteredProducts}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
      />
    </main>
  );
};

export default ClientHome;