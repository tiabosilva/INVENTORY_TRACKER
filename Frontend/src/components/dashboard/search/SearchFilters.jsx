import { StarIcon } from '@heroicons/react/24/solid';

const SearchFilters = ({ filters, onChange }) => {
  const handleChange = (key, value) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#1c2537] rounded-lg border border-[#2c374b]">
      <div>
        <label className="block text-gray-400 mb-2">Category</label>
        <select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="w-full px-3 py-2 bg-[#0a0f1c] text-white rounded border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="computers">Computers</option>
          <option value="smart-home">Smart Home</option>
          <option value="gaming">Gaming</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 mb-2">Price Range</label>
        <select
          value={filters.priceRange}
          onChange={(e) => handleChange('priceRange', e.target.value)}
          className="w-full px-3 py-2 bg-[#0a0f1c] text-white rounded border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
        >
          <option value="all">All Prices</option>
          <option value="under-25">Under $25</option>
          <option value="25-50">$25 to $50</option>
          <option value="50-100">$50 to $100</option>
          <option value="100-200">$100 to $200</option>
          <option value="over-200">Over $200</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 mb-2">Customer Rating</label>
        <select
          value={filters.rating}
          onChange={(e) => handleChange('rating', e.target.value)}
          className="w-full px-3 py-2 bg-[#0a0f1c] text-white rounded border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
        >
          <option value="all">All Ratings</option>
          <option value="4-up">4★ & Up</option>
          <option value="3-up">3★ & Up</option>
          <option value="2-up">2★ & Up</option>
          <option value="1-up">1★ & Up</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 mb-2">Shipping Speed</label>
        <select
          value={filters.shippingSpeed}
          onChange={(e) => handleChange('shippingSpeed', e.target.value)}
          className="w-full px-3 py-2 bg-[#0a0f1c] text-white rounded border border-[#2c374b] focus:outline-none focus:border-[#33bbcf]"
        >
          <option value="all">All Options</option>
          <option value="same-day">Same Day Delivery</option>
          <option value="next-day">Next Day Delivery</option>
          <option value="two-day">Two Day Shipping</option>
          <option value="free">Free Shipping</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;