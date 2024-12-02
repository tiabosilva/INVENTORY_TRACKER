import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon, trend }) => {
  const isPositive = trend > 0;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#1c2537] rounded-xl p-6 border border-[#2c374b]"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h4 className="text-2xl font-bold text-white mt-2">{value}</h4>
        </div>
        <div className="p-3 rounded-lg bg-[#33bbcf]/10">
          <Icon className="h-6 w-6 text-[#33bbcf]" />
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{trend}%
        </span>
        <span className="text-gray-400 text-sm ml-2">vs last month</span>
      </div>
    </motion.div>
  );
};

export default StatCard;