import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline';

const Orders = () => {
  const [orders] = useState([
    {
      id: '#12345',
      product: 'Premium Laptop',
      date: 'Jan 15, 2024',
      status: 'Delivered',
      amount: 1299.99,
      tracking: 'USPS-123456'
    },
    {
      id: '#12346',
      product: 'Wireless Earbuds',
      date: 'Jan 14, 2024',
      status: 'In Transit',
      amount: 149.99,
      tracking: 'FDX-789012'
    },
    {
      id: '#12347',
      product: 'Smart Watch',
      date: 'Jan 13, 2024',
      status: 'Processing',
      amount: 299.99,
      tracking: 'Pending'
    }
  ]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Your Orders</h2>
        <p className="text-gray-400">Track and manage your orders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-[#1c2537]">
              <ShoppingCartIcon className="w-6 h-6 text-[#33bbcf]" />
            </div>
            <div>
              <p className="text-gray-400">Total Orders</p>
              <p className="text-2xl font-bold text-white">145</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-[#1c2537]">
              <TruckIcon className="w-6 h-6 text-[#33bbcf]" />
            </div>
            <div>
              <p className="text-gray-400">Delivered</p>
              <p className="text-2xl font-bold text-white">132</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-[#1c2537]">
              <ClockIcon className="w-6 h-6 text-[#33bbcf]" />
            </div>
            <div>
              <p className="text-gray-400">Processing</p>
              <p className="text-2xl font-bold text-white">8</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-left">
                <th className="pb-4">Order ID</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Tracking</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-[#1c2537]">
                  <td className="py-4">{order.id}</td>
                  <td className="py-4">{order.product}</td>
                  <td className="py-4">{order.date}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' :
                      order.status === 'In Transit' ? 'bg-blue-500/10 text-blue-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">${order.amount}</td>
                  <td className="py-4">
                    <button className="text-[#33bbcf] hover:underline">
                      {order.tracking}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Orders;