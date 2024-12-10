import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = ({ onSwitchView, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [userType, setUserType] = useState(null); // State to store user type

  const handleRegisterSubmit = async (data) => {
    try {
      // Send the registration data to the backend API
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: data.fullName,
        email: data.email,
        password: data.password,
        userType, // Send the user type to the backend
      });

      // Assuming backend returns a JWT token upon successful registration
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store JWT in localStorage

        // Call the parent function (optional, depending on your app's flow)
        onSubmit(response.data); 

        // Optionally, redirect to login or dashboard page
        window.location.href = '/dashboard'; // Or use navigate('/dashboard') if you use react-router
      }
    } catch (error) {
      console.error('Registration failed', error);
      // Handle errors here (e.g., display an error message)
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Create a new account</h2>
      <p className="text-gray-400 mb-8">Fill out the form to get started</p>

      {/* User Type Selection */}
      <div className="mb-6 flex space-x-2">
        <button
          type="button"
          onClick={() => setUserType('business')}
          className={`w-1/3 py-3 rounded-l-lg ${userType === 'business' ? 'bg-[#33bbcf]' : 'bg-[#1c2537]'} text-white font-semibold`}
        >
          Small Business Owner / Startup
        </button>
        <button
          type="button"
          onClick={() => setUserType('client')}
          className={`w-1/3 py-3 ${userType === 'client' ? 'bg-[#33bbcf]' : 'bg-[#1c2537]'} text-white font-semibold`}
        >
          Client
        </button>
        <button
          type="button"
          onClick={() => setUserType('both')}
          className={`w-1/3 py-3 rounded-r-lg ${userType === 'both' ? 'bg-[#33bbcf]' : 'bg-[#1c2537]'} text-white font-semibold`}
        >
          Both
        </button>
      </div>

      {/* Only show the next form fields if user type is selected */}
      {userType && (
        <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              {...register('fullName', {
                required: 'Full Name is required',
              })}
              className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match',
              })}
              className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#33bbcf] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#2ba9bd] transition-colors"
          >
            Sign up
          </button>
        </form>
      )}

      <p className="text-gray-400 text-center mt-8">
        Already have an account?{' '}
        <button
          onClick={() => onSwitchView('login')}
          className="text-[#33bbcf] hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default Register;
