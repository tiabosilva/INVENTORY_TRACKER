import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import ResetPassword from '../components/auth/Reset';

const AuthPage = () => {
  const [currentView, setCurrentView] = useState('login');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const switchView = (view) => {
    setCurrentView(view);
    setErrorMessage(null);
  };

  const handleSubmit = async (data, type) => {
    const url = `http://localhost:5000/api/auth/${type}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        if (type === 'login') navigate('/dashboard-select');
        else setCurrentView('login');
      } else {
        setErrorMessage(result.message || 'Operation failed!');
      }
    } catch (error) {
      console.error(`${type} error:`, error);
      setErrorMessage('Network error, please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-8 sm:px-12 lg:px-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <span className="text-[#33bbcf] text-3xl">|.|</span>
              <span className="text-white text-xl font-semibold">
                InventoryTracker
              </span>
            </div>
          </div>

          {/* Form Rendering */}
          {currentView === 'login' && (
            <Login onSwitchView={switchView} onSubmit={(data) => handleSubmit(data, 'login')} />
          )}
          {currentView === 'register' && (
            <Register onSwitchView={switchView} onSubmit={(data) => handleSubmit(data, 'register')} />
          )}
          {currentView === 'reset-password' && <ResetPassword onSwitchView={switchView} />}

          {/* Error Message */}
          {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-cyan-400/10 to-transparent">
        <div className="h-full flex items-center justify-center p-16">
          <img
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
            alt="Analytics"
            className="max-w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
