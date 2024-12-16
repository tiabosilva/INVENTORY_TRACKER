import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isBusinessDashboard = location.pathname.includes('business-dashboard');

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-4 right-4 z-50"
    >
      <button
        onClick={() => navigate(isBusinessDashboard ? '/client-dashboard' : '/business-dashboard')}
        className="px-4 py-2 bg-[#33bbcf] text-white rounded-lg hover:bg-[#2ba9bd] transition-colors flex items-center space-x-2"
      >
        <span>Switch to {isBusinessDashboard ? 'Client' : 'Business'} Dashboard</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      </button>
    </motion.div>
  );
};

export default DashboardSwitcher;