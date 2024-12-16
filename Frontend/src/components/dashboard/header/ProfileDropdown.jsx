import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { 
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import { useDashboardSwitcher } from '../../../hooks/useDashboardSwitcher';

const ProfileDropdown = ({ user }) => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { switchTo, targetPath, profilePath, settingsPath } = useDashboardSwitcher();

  const handleLogout = () => {
    setUser(null);
    navigate('/auth');
  };

  const menuItems = [
    {
      icon: UserIcon,
      label: 'Your Profile',
      onClick: () => navigate(profilePath),
      className: 'text-gray-400'
    },
    {
      icon: BuildingOfficeIcon,
      label: `Switch to ${switchTo}`,
      onClick: () => navigate(targetPath),
      className: 'text-[#33bbcf]'
    },
    {
      icon: Cog6ToothIcon,
      label: 'Settings',
      onClick: () => navigate(settingsPath),
      className: 'text-gray-400'
    },
    {
      icon: ArrowRightOnRectangleIcon,
      label: 'Sign out',
      onClick: handleLogout,
      className: 'text-red-400'
    }
  ];

  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#2c374b] transition-colors">
              <img
                className="h-8 w-8 rounded-full"
                src={user.avatar}
                alt=""
              />
            </Menu.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-[#1c2537] border border-[#2c374b] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]"
              >
                <div className="py-2">
                  {menuItems.map((item) => (
                    <Menu.Item key={item.label}>
                      {({ active }) => (
                        <button
                          onClick={item.onClick}
                          className={`flex items-center w-full text-left px-4 py-2 text-sm ${
                            active ? `bg-[#2c374b] ${item.className}` : item.className
                          }`}
                        >
                          <item.icon className="h-5 w-5 mr-3" />
                          {item.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ProfileDropdown;