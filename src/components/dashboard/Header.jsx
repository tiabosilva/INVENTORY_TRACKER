import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';

const Header = ({ user }) => {
  return (
    <header className="bg-[#1c2537] border-b border-[#2c374b] py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Welcome back, {user.name}</h1>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Menu as="div" className="relative">
            <Menu.Button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-[#2c374b]">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right rounded-lg bg-[#1c2537] border border-[#2c374b] shadow-lg">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Notifications</h3>
                  <div className="space-y-4">
                    {/* Sample notifications */}
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-[#33bbcf]" />
                      <div>
                        <p className="text-sm text-white">New order received</p>
                        <p className="text-xs text-gray-400">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* User Menu */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-3">
              <img
                className="h-8 w-8 rounded-full"
                src={user.avatar}
                alt=""
              />
              <span className="text-white">{user.name}</span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-[#1c2537] border border-[#2c374b] shadow-lg">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-[#2c374b] text-white' : 'text-gray-400'
                        }`}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-[#2c374b] text-white' : 'text-gray-400'
                        }`}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-[#2c374b] text-white' : 'text-gray-400'
                        }`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;