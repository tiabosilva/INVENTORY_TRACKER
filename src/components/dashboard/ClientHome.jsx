import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCartIcon,
  ClockIcon,
  TruckIcon,
  StarIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import StatCard from './StatCard';
import Chart from 'react-apexcharts';

const ClientHome = () => {
  const [chartOptions] = useState({
    chart: {
      type: 'donut',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#33bbcf', '#3b82f6', '#8b5cf6', '#ec4899'],
    labels: ['Electronics', 'Clothing', 'Books', 'Other'],
    stroke: { show: false },
    legend: {
      position: 'bottom',
      labels: { colors: '#94a3b8' }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Orders',
              color: '#94a3b8'
            }
          }
        }
      }
    },
    theme: { mode: 'dark' }
  });

  const [chartSeries] = useState([44, 55, 13, 33]);

  const [recentOrders] = useState([
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
    <main className="flex-1 overflow-y-auto p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Orders"
          value="145"
          icon={ShoppingCartIcon}
          trend={12.5}
        />
        <StatCard
          title="Active Orders"
          value="8"
          icon={ClockIcon}
          trend={-4.2}
        />
        <StatCard
          title="Delivered"
          value="132"
          icon={TruckIcon}
          trend={8.1}
        />
        <StatCard
          title="Reviews Given"
          value="98"
          icon={StarIcon}
          trend={15.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Order Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Order Distribution</h3>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height={350}
          />
        </motion.div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Recent Orders</h3>
            <button className="text-[#33bbcf] text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center p-3 rounded-lg hover:bg-[#1c2537] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#1c2537] flex items-center justify-center">
                  <ShoppingCartIcon className="w-6 h-6 text-[#33bbcf]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">{order.product}</h4>
                  <p className="text-gray-400 text-sm">${order.amount}</p>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-sm ${
                  order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' :
                  order.status === 'In Transit' ? 'bg-blue-500/10 text-blue-500' :
                  'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Favorite Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Favorite Items</h3>
            <button className="text-[#33bbcf] text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center p-3 rounded-lg hover:bg-[#1c2537] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#1c2537] flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-[#33bbcf]" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Product Name</h4>
                  <p className="text-gray-400 text-sm">$299.99</p>
                </div>
                <button className="ml-auto text-[#33bbcf]">
                  <ShoppingCartIcon className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ClientHome;