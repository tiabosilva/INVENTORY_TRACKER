import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useCustomers } from '../../../context/CustomerContext';

const CustomerList = () => {
  const { state: { customers } } = useCustomers();

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-left">
            <th className="pb-4">Customer</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Total Orders</th>
            <th className="pb-4">Total Spent</th>
            <th className="pb-4">Last Order</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {customers.map((customer) => (
            <motion.tr
              key={customer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-[#1c2537]"
            >
              <td className="py-4">
                <div className="flex items-center">
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <div className="text-white font-medium">{customer.name}</div>
                    <div className="text-gray-400 text-sm">{customer.email}</div>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  customer.status === 'active'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-gray-500/10 text-gray-500'
                }`}>
                  {customer.status}
                </span>
              </td>
              <td className="py-4">{customer.totalOrders}</td>
              <td className="py-4">${customer.totalSpent.toFixed(2)}</td>
              <td className="py-4">{format(new Date(customer.lastOrder), 'MMM dd, yyyy')}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;