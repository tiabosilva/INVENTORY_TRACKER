import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
import Profile from '../components/dashboard/Profile';
import Settings from '../components/dashboard/Settings';

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
  return (
    <div className="flex h-screen bg-[#0a0f1c]">
      <Sidebar items={sidebarItems} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={mockUser} />
        
        <Routes>
          <Route path="/" element={<BusinessHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default BusinessDashboard;