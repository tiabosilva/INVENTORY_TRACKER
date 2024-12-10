import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DashboardSelect = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] to-[#1a1f2c] flex items-center justify-center px-4 py-12 relative">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2333bbcf' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-[#33bbcf]/5 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-[#3b82f6]/5 blur-[120px]" />
      </div>

      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#33bbcf]/10 via-[#3b82f6]/10 to-[#33bbcf]/10 opacity-30"
           style={{
             maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
             animation: 'gradient 8s linear infinite'
           }} />

      <motion.div 
        className="max-w-6xl w-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33bbcf] to-[#3b82f6]">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Select the dashboard that best suits your needs and start managing your inventory efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {/* Client Dashboard Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/client-dashboard')}
            className="group relative bg-[#1c2537]/80 backdrop-blur-xl rounded-2xl p-8 cursor-pointer border border-[#2c374b]/50 hover:border-[#33bbcf]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#33bbcf]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="h-20 w-20 bg-gradient-to-r from-[#33bbcf] to-[#3b82f6] rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#33bbcf] transition-colors duration-300">
                Client Dashboard
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Perfect for individual users and small businesses. Manage your personal inventory, track orders, and handle your account settings with ease.
              </p>

              <div className="flex items-center text-[#33bbcf] group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-lg font-semibold">Get started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Business Dashboard Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/business-dashboard')}
            className="group relative bg-[#1c2537]/80 backdrop-blur-xl rounded-2xl p-8 cursor-pointer border border-[#2c374b]/50 hover:border-[#33bbcf]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#33bbcf]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="h-20 w-20 bg-gradient-to-r from-[#33bbcf] to-[#3b82f6] rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#33bbcf] transition-colors duration-300">
                Business Dashboard
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Built for enterprises and growing businesses. Access advanced analytics, manage team permissions, and scale your operations efficiently.
              </p>

              <div className="flex items-center text-[#33bbcf] group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-lg font-semibold">Get started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardSelect;