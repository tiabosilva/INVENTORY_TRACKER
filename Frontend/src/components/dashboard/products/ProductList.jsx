import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import {
  PencilIcon,
  TrashIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-left">
            <th className="pb-4 pl-4">Image</th>
            <th className="pb-4 cursor-pointer" onClick={() => requestSort('name')}>
              Product Name
              {sortConfig.key === 'name' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
            <th className="pb-4">Category</th>
            <th className="pb-4 cursor-pointer" onClick={() => requestSort('price')}>
              Price
              {sortConfig.key === 'price' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
            <th className="pb-4 cursor-pointer" onClick={() => requestSort('stock')}>
              Stock
              {sortConfig.key === 'stock' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Added Date</th>
            <th className="pb-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {sortedProducts.map((product) => (
            <motion.tr
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="border-t border-[#1c2537]"
            >
              <td className="py-4 pl-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </td>
              <td className="py-4">{product.name}</td>
              <td className="py-4">{product.category}</td>
              <td className="py-4">${product.price.toFixed(2)}</td>
              <td className="py-4">{product.stock}</td>
              <td className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    product.status === 'In Stock'
                      ? 'bg-green-500/10 text-green-500'
                      : product.status === 'Low Stock'
                      ? 'bg-yellow-500/10 text-yellow-500'
                      : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="py-4">
                {format(new Date(product.createdAt), 'MMM dd, yyyy')}
              </td>
              <td className="py-4">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onEditProduct(product)}
                    className="p-2 rounded-lg hover:bg-[#2c374b] text-gray-400 hover:text-white transition-colors"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDeleteProduct(product.id)}
                    className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;