import { useState, useEffect } from 'react';

export const useSearch = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Simulated data - in a real app, this would come from your backend
  const recentSearches = [
    'Wireless Headphones',
    'Gaming Laptop',
    'Smart Watch',
    'Mechanical Keyboard'
  ];

  const categories = [
    'Electronics',
    'Computers',
    'Smart Home',
    'Gaming',
    'Audio',
    'Accessories'
  ];

  // Simulated API call for suggestions
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      // Simulate API response
      const mockSuggestions = [
        `${query} in Electronics`,
        `${query} Best Sellers`,
        `${query} New Releases`,
        `${query} Under $100`,
        `${query} with Free Shipping`
      ];
      setSuggestions(mockSuggestions);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return {
    suggestions,
    loading,
    recentSearches,
    categories
  };
};