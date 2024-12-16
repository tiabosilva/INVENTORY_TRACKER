import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../../../context/ProductContext';
import AddProductModal from './AddProductModal';
import EditProductModal from '../EditProductModal';
import ProductList from './ProductList';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const ProductsOverview = () => {
  const { state, dispatch } = useProducts();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddProduct = (newProduct) => {
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

  const handleDeleteProduct = (productId) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: productId });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct });
    setEditingProduct(null);
    setIsEditModalOpen(false);
  };

  const filteredProducts = state.products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Products Overview</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-[#33bbcf] text-white rounded-lg hover:bg-[#2ba9bd] transition-colors flex items-center"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Product
          </motion.button>
        </div>

        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by name or category..."
            className="w-full pl-10 pr-4 py-3 bg-[#1c2537] text-white rounded-lg border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-400"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
      >
        <ProductList
          products={filteredProducts}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
      </motion.div>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProduct={handleAddProduct}
      />

      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingProduct(null);
        }}
        product={editingProduct}
        onUpdateProduct={handleUpdateProduct}
      />
    </div>
  );
};

export default ProductsOverview;