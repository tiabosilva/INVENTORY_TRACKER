import { Routes, Route } from 'react-router-dom';
import {
  HomeIcon,
  CubeIcon,
  UsersIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import BusinessHome from '../components/dashboard/BusinessHome';
import ProductsOverview from '../components/dashboard/products/ProductsOverview';
import CustomersOverview from '../components/dashboard/customers/CustomersOverview';
import MessagesOverview from '../components/dashboard/messages/MessagesOverview';
import Profile from '../components/dashboard/Profile';
import Settings from '../components/dashboard/Settings';
import { useUser } from '../context/UserContext';

const sidebarItems = [
  { name: 'Dashboard', path: '/business-dashboard', icon: HomeIcon },
  { name: 'Products', path: '/business-dashboard/products', icon: CubeIcon },
  { name: 'Customers', path: '/business-dashboard/customers', icon: UsersIcon },
  { name: 'Messages', path: '/business-dashboard/messages', icon: ChatBubbleLeftIcon },
  { name: 'Settings', path: '/business-dashboard/settings', icon: Cog6ToothIcon },
];

const BusinessDashboard = () => {
  const { user } = useUser();

  return (
    <div className="flex h-screen bg-[#0a0f1c]">
      <Sidebar items={sidebarItems} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        
        <Routes>
          <Route path="/" element={<BusinessHome />} />
          <Route path="/products" element={<ProductsOverview />} />
          <Route path="/customers" element={<CustomersOverview />} />
          <Route path="/messages" element={<MessagesOverview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default BusinessDashboard;