import { Routes, Route } from 'react-router-dom';
import {
  HomeIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import ClientHome from '../components/dashboard/ClientHome';
import Orders from '../components/dashboard/Orders';
import Favorites from '../components/dashboard/Favorites';
import Profile from '../components/dashboard/Profile';
import Settings from '../components/dashboard/Settings';

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
  return (
    <div className="flex h-screen bg-[#0a0f1c]">
      <Sidebar items={sidebarItems} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={mockUser} />
        
        <Routes>
          <Route path="/" element={<ClientHome />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default ClientDashboard;