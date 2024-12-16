import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BanknotesIcon,
  ClockIcon,
  UsersIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';
import StatCard from './StatCard';
import Chart from 'react-apexcharts';
import { useProducts } from '../../context/ProductContext';

const BusinessHome = () => {
  const { state: productState } = useProducts();
  const [revenueChartOptions] = useState({
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#33bbcf', '#3b82f6'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: { style: { colors: '#94a3b8' } },
    },
    yaxis: { 
      labels: { style: { colors: '#94a3b8' } },
      title: { text: 'Amount ($)', style: { color: '#94a3b8' } }
    },
    grid: {
      borderColor: '#1c2537',
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
    },
    theme: { mode: 'dark' },
    legend: {
      labels: { colors: '#94a3b8' }
    }
  });

  const [revenueChartSeries] = useState([
    {
      name: 'Revenue',
      data: [44000, 55000, 41000, 65000, 78000, 85000],
    },
    {
      name: 'Profit',
      data: [13000, 22000, 15000, 28000, 34000, 39000],
    }
  ]);

  // Calculate total revenue
  const totalRevenue = productState.products.reduce((acc, product) => {
    return acc + (product.price * product.stock);
  }, 0);

  // Calculate total inventory items
  const totalItems = productState.products.length;

  // Calculate low stock items
  const lowStockItems = productState.products.filter(product => product.stock <= 5).length;

  return (
    <main className="flex-1 overflow-y-auto p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          icon={BanknotesIcon}
          trend={18.2}
        />
        <StatCard
          title="Active Orders"
          value={lowStockItems.toString()}
          icon={ClockIcon}
          trend={5.1}
        />
        <StatCard
          title="Total Products"
          value={totalItems.toString()}
          icon={CubeIcon}
          trend={12.5}
        />
        <StatCard
          title="Low Stock Items"
          value={lowStockItems.toString()}
          icon={UsersIcon}
          trend={-2.4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Financial Overview</h3>
            <select className="bg-[#1c2537] text-white rounded-lg px-3 py-1 text-sm">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>
          <Chart
            options={revenueChartOptions}
            series={revenueChartSeries}
            type="area"
            height={350}
          />
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Recent Activities</h3>
            <button className="text-[#33bbcf] text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {productState.products.slice(0, 4).map((product, index) => (
              <div key={product.id} className="flex items-start space-x-4">
                <div className={`h-2 w-2 mt-2 rounded-full ${
                  product.stock === 0 ? 'bg-red-500' :
                  product.stock <= 5 ? 'bg-yellow-500' :
                  'bg-green-500'
                }`} />
                <div>
                  <p className="text-white">{product.name} - {
                    product.stock === 0 ? 'Out of stock' :
                    product.stock <= 5 ? 'Low stock' :
                    'In stock'
                  }</p>
                  <p className="text-sm text-gray-400">Stock: {product.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Inventory Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Inventory Status</h3>
          <button className="px-4 py-2 bg-[#33bbcf] text-white rounded-lg hover:bg-[#2ba9bd] transition-colors">
            Add Product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-left">
                <th className="pb-4">Product</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Stock</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">Trend</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {productState.products.map((product) => (
                <tr key={product.id} className="border-t border-[#1c2537]">
                  <td className="py-4">{product.name}</td>
                  <td className="py-4">{product.category}</td>
                  <td className="py-4">{product.stock}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.stock > 5 ? 'bg-green-500/10 text-green-500' :
                      product.stock > 0 ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {product.stock > 5 ? 'In Stock' :
                       product.stock > 0 ? 'Low Stock' :
                       'Out of Stock'}
                    </span>
                  </td>
                  <td className="py-4">${product.price}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      {product.stock > 5 ? (
                        <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <span className={product.stock > 5 ? 'text-green-500' : 'text-red-500'}>
                        {product.stock > 5 ? '+12%' : '-8%'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </main>
  );
};

export default BusinessHome;