import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  HomeIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatCard from '../components/dashboard/StatCard';
import Chart from 'react-apexcharts';

const sidebarItems = [
  { name: 'Dashboard', path: '/client-dashboard', icon: HomeIcon },
  { name: 'Orders', path: '/client-dashboard/orders', icon: ShoppingCartIcon },
  { name: 'Favorites', path: '/client-dashboard/favorites', icon: HeartIcon },
  { name: 'Profile', path: '/client-dashboard/profile', icon: UserIcon },
  { name: 'Settings', path: '/client-dashboard/settings', icon: Cog6ToothIcon },
];

const mockUser = {
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const ClientDashboard = () => {
  const [chartOptions] = useState({
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#33bbcf'],
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: { style: { colors: '#94a3b8' } },
    },
    yaxis: { labels: { style: { colors: '#94a3b8' } } },
    grid: {
      borderColor: '#2c374b',
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
    },
    theme: { mode: 'dark' },
  });

  const [chartSeries] = useState([
    {
      name: 'Orders',
      data: [30, 40, 35, 50, 49, 60],
    },
  ]);

  return (
    <div className="flex h-screen bg-[#0a0f1c]">
      <Sidebar items={sidebarItems} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={mockUser} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Orders"
              value="264"
              icon={ShoppingCartIcon}
              trend={12.5}
            />
            <StatCard
              title="Active Orders"
              value="32"
              icon={ChartBarIcon}
              trend={-4.2}
            />
            <StatCard
              title="Favorites"
              value="15"
              icon={HeartIcon}
              trend={8.1}
            />
            <StatCard
              title="Reviews Given"
              value="126"
              icon={UserIcon}
              trend={15.3}
            />
          </div>

          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1c2537] rounded-xl p-6 border border-[#2c374b] mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Order Activity</h3>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={350}
            />
          </motion.div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1c2537] rounded-xl p-6 border border-[#2c374b]"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-t border-[#2c374b]">
                    <td className="py-4">#12345</td>
                    <td className="py-4">Product Name</td>
                    <td className="py-4">Jan 15, 2024</td>
                    <td className="py-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500">
                        Delivered
                      </span>
                    </td>
                    <td className="py-4">$129.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;