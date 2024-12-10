import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import ResetPassword from '../components/auth/ResetPassword';

const AuthPage = () => {
  const [currentView, setCurrentView] = useState('login'); // Tracks current view (login, register, reset-password)
  const [errorMessage, setErrorMessage] = useState(null); // For displaying error messages
  const navigate = useNavigate();

  // Switch between login, register, and reset password views
  const switchView = (view) => {
    setCurrentView(view);
    setErrorMessage(null); // Clear error message when switching views
  };

  // Handle login form submission
  const handleLogin = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        // On success, navigate to the dashboard
        navigate('/dashboard-select');
      } else {
        // On error, display the error message
        setErrorMessage(result.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Network error, please try again.');
    }
  };

  // Handle registration form submission
  const handleRegister = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        // Redirect to login page after successful registration
        setCurrentView('login');
      } else {
        // Display error if registration failed
        setErrorMessage(result.message || 'Registration failed!');
      }
    } catch (error) {
      console.error('Registration error:', error);
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
            <div className="flex items-center gap-2" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <span className="text-[#33bbcf] text-3xl">|.|</span>
              <span className="text-white text-xl font-semibold">InventoryTracker</span>
            </div>
          </div>

          {/* Form Rendering */}
          {currentView === 'login' && (
            <Login onSwitchView={switchView} onSubmit={handleLogin} />
          )}
          {currentView === 'register' && (
            <Register onSwitchView={switchView} onSubmit={handleRegister} />
          )}
          {currentView === 'reset-password' && (
            <ResetPassword onSwitchView={switchView} />
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 mt-4">
              <p>{errorMessage}</p>
            </div>
          )}
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
