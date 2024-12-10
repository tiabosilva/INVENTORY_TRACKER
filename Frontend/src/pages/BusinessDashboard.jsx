import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  HomeIcon,
  CubeIcon,
  UsersIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatCard from '../components/dashboard/StatCard';
import Chart from 'react-apexcharts';

const sidebarItems = [
  { name: 'Dashboard', path: '/business-dashboard', icon: HomeIcon },
  { name: 'Inventory', path: '/business-dashboard/inventory', icon: CubeIcon },
  { name: 'Customers', path: '/business-dashboard/customers', icon: UsersIcon },
  { name: 'Messages', path: '/business-dashboard/messages', icon: ChatBubbleLeftIcon },
  { name: 'Settings', path: '/business-dashboard/settings', icon: Cog6ToothIcon },
];

const mockUser = {
  name: 'Sarah Wilson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const BusinessDashboard = () => {
  const [revenueChartOptions] = useState({
    chart: {
      type: 'bar',
      toolbar: { show: false },
      background: 'transparent',
    },
    colors: ['#33bbcf'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '60%',
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

  const [revenueChartSeries] = useState([
    {
      name: 'Revenue',
      data: [4400, 5500, 4100, 6500, 7800, 8500],
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
              title="Total Revenue"
              value="$38,459"
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
              className="lg:col-span-2 bg-[#1c2537] rounded-xl p-6 border border-[#2c374b]"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Revenue Overview</h3>
              <Chart
                options={revenueChartOptions}
                series={revenueChartSeries}
                type="bar"
                height={350}
              />
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1c2537] rounded-xl p-6 border border-[#2c374b]"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Recent Activities</h3>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#33bbcf]" />
                    <div>
                      <p className="text-white">New order #12345</p>
                      <p className="text-sm text-gray-400">2 minutes ago</p>
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
            className="bg-[#1c2537] rounded-xl p-6 border border-[#2c374b]"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Inventory Status</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Category</th>
                    <th className="pb-4">Stock</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-t border-[#2c374b]">
                    <td className="py-4">Product Name</td>
                    <td className="py-4">Electronics</td>
                    <td className="py-4">245</td>
                    <td className="py-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500">
                        In Stock
                      </span>
                    </td>
                    <td className="py-4">$999.99</td>
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

export default BusinessDashboard;