import { useState } from 'react';
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

const BusinessHome = () => {
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

  const [inventoryItems] = useState([
    {
      id: 1,
      name: 'Premium Laptop',
      category: 'Electronics',
      stock: 245,
      status: 'In Stock',
      price: 999.99,
      trend: 12
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      category: 'Electronics',
      stock: 15,
      status: 'Low Stock',
      price: 149.99,
      trend: -5
    },
    {
      id: 3,
      name: 'Smart Watch',
      category: 'Electronics',
      stock: 0,
      status: 'Out of Stock',
      price: 299.99,
      trend: 8
    },
    {
      id: 4,
      name: 'Gaming Console',
      category: 'Electronics',
      stock: 89,
      status: 'In Stock',
      price: 499.99,
      trend: 15
    }
  ]);

  return (
    <main className="flex-1 overflow-y-auto p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$85,459"
          icon={BanknotesIcon}
          trend={18.2}
        />
        <StatCard
          title="Active Orders"
          value="182"
          icon={ClockIcon}
          trend={5.1}
        />
        <StatCard
          title="Total Customers"
          value="2,845"
          icon={UsersIcon}
          trend={12.5}
        />
        <StatCard
          title="Inventory Items"
          value="1,458"
          icon={CubeIcon}
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
            <div className="flex items-start space-x-4">
              <div className="h-2 w-2 mt-2 rounded-full bg-green-500" />
              <div>
                <p className="text-white">New order #12345</p>
                <p className="text-sm text-gray-400">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-2 w-2 mt-2 rounded-full bg-yellow-500" />
              <div>
                <p className="text-white">Low stock alert: Wireless Earbuds</p>
                <p className="text-sm text-gray-400">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-2 w-2 mt-2 rounded-full bg-red-500" />
              <div>
                <p className="text-white">Smart Watch out of stock</p>
                <p className="text-sm text-gray-400">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-2 w-2 mt-2 rounded-full bg-[#33bbcf]" />
              <div>
                <p className="text-white">New customer registration</p>
                <p className="text-sm text-gray-400">2 hours ago</p>
              </div>
            </div>
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
              {inventoryItems.map((item) => (
                <tr key={item.id} className="border-t border-[#1c2537]">
                  <td className="py-4">{item.name}</td>
                  <td className="py-4">{item.category}</td>
                  <td className="py-4">{item.stock}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.status === 'In Stock' ? 'bg-green-500/10 text-green-500' :
                      item.status === 'Low Stock' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      {item.trend > 0 ? (
                        <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <span className={item.trend > 0 ? 'text-green-500' : 'text-red-500'}>
                        {item.trend}%
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