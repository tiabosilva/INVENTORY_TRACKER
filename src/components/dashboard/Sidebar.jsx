import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <motion.div 
      initial={{ width: 256 }}
      animate={{ width: isCollapsed ? 80 : 256 }}
      className="h-screen bg-[#1c2537] border-r border-[#2c374b] flex flex-col"
    >
      {/* Logo */}
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <span className="text-[#33bbcf] text-2xl">|.|</span>
            <span className="text-white text-lg font-semibold">InventoryTracker</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-[#2c374b] text-gray-400"
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 mb-1 transition-colors ${
              location.pathname === item.path
                ? 'bg-[#33bbcf]/10 text-[#33bbcf]'
                : 'text-gray-400 hover:bg-[#2c374b] hover:text-white'
            }`}
          >
            <item.icon className={`h-6 w-6 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;