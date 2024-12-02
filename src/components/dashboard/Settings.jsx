import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    orders: true,
    news: false,
  });

  const [theme, setTheme] = useState('dark');

  return (
    <div className="p-6">
      <div className="bg-[#0a0f1c] rounded-xl p-8 border border-[#1c2537]">
        <h2 className="text-2xl font-bold text-white mb-8">Settings</h2>

        {/* Notifications */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Notifications</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-gray-400 text-sm">Receive email updates about your account</p>
              </div>
              <Switch
                checked={notifications.email}
                onChange={(checked) => setNotifications({ ...notifications, email: checked })}
                className={`${
                  notifications.email ? 'bg-[#33bbcf]' : 'bg-[#1c2537]'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className="sr-only">Enable email notifications</span>
                <span
                  className={`${
                    notifications.email ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-gray-400 text-sm">Receive push notifications on your device</p>
              </div>
              <Switch
                checked={notifications.push}
                onChange={(checked) => setNotifications({ ...notifications, push: checked })}
                className={`${
                  notifications.push ? 'bg-[#33bbcf]' : 'bg-[#1c2537]'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className="sr-only">Enable push notifications</span>
                <span
                  className={`${
                    notifications.push ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Order Updates</p>
                <p className="text-gray-400 text-sm">Receive updates about your orders</p>
              </div>
              <Switch
                checked={notifications.orders}
                onChange={(checked) => setNotifications({ ...notifications, orders: checked })}
                className={`${
                  notifications.orders ? 'bg-[#33bbcf]' : 'bg-[#1c2537]'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className="sr-only">Enable order updates</span>
                <span
                  className={`${
                    notifications.orders ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Security</h3>
          <div className="space-y-4">
            <button className="w-full px-4 py-3 text-left bg-[#1c2537] text-white rounded-lg hover:bg-[#2c374b] transition-colors">
              Change Password
            </button>
            <button className="w-full px-4 py-3 text-left bg-[#1c2537] text-white rounded-lg hover:bg-[#2c374b] transition-colors">
              Two-Factor Authentication
            </button>
            <button className="w-full px-4 py-3 text-left bg-[#1c2537] text-white rounded-lg hover:bg-[#2c374b] transition-colors">
              Connected Devices
            </button>
          </div>
        </div>

        {/* Theme */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Theme</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setTheme('dark')}
              className={`p-4 rounded-lg border ${
                theme === 'dark'
                  ? 'border-[#33bbcf] bg-[#1c2537]'
                  : 'border-[#2c374b] bg-[#0a0f1c]'
              }`}
            >
              <div className="text-white font-medium mb-2">Dark</div>
              <div className="h-20 rounded bg-[#0a0f1c] border border-[#1c2537]"></div>
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`p-4 rounded-lg border ${
                theme === 'light'
                  ? 'border-[#33bbcf] bg-[#1c2537]'
                  : 'border-[#2c374b] bg-[#0a0f1c]'
              }`}
            >
              <div className="text-white font-medium mb-2">Light</div>
              <div className="h-20 rounded bg-white border border-gray-200"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;