import { motion } from 'framer-motion';
import { UsersIcon, UserPlusIcon, CurrencyDollarIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import CustomerList from './CustomerList';
import StatCard from '../StatCard';
import { useCustomers } from '../../../context/CustomerContext';

const CustomersOverview = () => {
  const { state: { customers } } = useCustomers();

  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === 'active').length;
  const totalRevenue = customers.reduce((acc, c) => acc + c.totalSpent, 0);
  const totalOrders = customers.reduce((acc, c) => acc + c.totalOrders, 0);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Customers Overview</h2>
        <p className="text-gray-400">Manage and analyze your customer base</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Customers"
          value={totalCustomers}
          icon={UsersIcon}
          trend={12.5}
        />
        <StatCard
          title="Active Customers"
          value={activeCustomers}
          icon={UserPlusIcon}
          trend={8.2}
        />
        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          icon={CurrencyDollarIcon}
          trend={15.3}
        />
        <StatCard
          title="Total Orders"
          value={totalOrders}
          icon={ShoppingBagIcon}
          trend={5.8}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
      >
        <CustomerList />
      </motion.div>
    </div>
  );
};

export default CustomersOverview;