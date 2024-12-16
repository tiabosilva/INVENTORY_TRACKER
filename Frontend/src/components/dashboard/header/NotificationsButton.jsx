import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { useNotifications } from '../../../context/NotificationsContext';

const NotificationsButton = () => {
  const { state: { notifications }, dispatch } = useNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id) => {
    dispatch({ type: 'MARK_AS_READ', payload: id });
  };

  const handleMarkAllAsRead = () => {
    dispatch({ type: 'MARK_ALL_AS_READ' });
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-[#2c374b] relative">
        <BellIcon className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#33bbcf] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
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
        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right rounded-lg bg-[#1c2537] border border-[#2c374b] shadow-lg z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={handleMarkAllAsRead}
                  className="text-sm text-[#33bbcf] hover:underline"
                >
                  Mark all as read
                </button>
              )}
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg ${
                    notification.read ? 'bg-[#0a0f1c]' : 'bg-[#33bbcf]/5'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-white font-medium">{notification.title}</h4>
                    <span className="text-xs text-gray-400">
                      {format(new Date(notification.timestamp), 'MMM dd, HH:mm')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                  {!notification.read && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="text-sm text-[#33bbcf] hover:underline mt-2"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationsButton;