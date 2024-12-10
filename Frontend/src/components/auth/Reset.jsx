import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      // Send the reset password request to the backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/reset-password`, // Ensure API URL is set in .env
        { email }
      );

      if (response.data.message) {
        setMessage('If an account with that email exists, a reset link has been sent.');
      }
    } catch (error) {
      setMessage('An error occurred while sending the reset request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-[#1c2537] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-2">Reset Your Password</h2>
      <p className="text-gray-400 mb-8">Enter your email to reset your password</p>

      <form onSubmit={handleResetSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading} // Disable button while loading
          className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors ${
            isLoading
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-[#33bbcf] text-white hover:bg-[#2ba9bd]'
          }`}
        >
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      {message && <p className="text-center text-gray-400 mt-4">{message}</p>}

      <p className="text-gray-400 text-center mt-4">
        Remembered your password?{' '}
        <button
          onClick={() => navigate('/auth')} // Navigate to login page
          className="text-[#33bbcf] hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default ResetPassword;
