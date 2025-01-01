import { useForm } from 'react-hook-form';

const Login = ({ onSwitchView, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLoginSubmit = (data) => {
    onSubmit(data);  // Call the parent function passed as a prop
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
      <p className="text-gray-400 mb-8">Enter your credentials to access your account</p>

      <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required'
            })}
            className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register('remember')}
              className="h-4 w-4 rounded border-gray-300 text-[#33bbcf] focus:ring-[#33bbcf]"
            />
            <label className="ml-2 text-sm text-gray-400">Remember me</label>
          </div>
          <button
            type="button"
            onClick={() => onSwitchView('reset-password')}
            className="text-[#33bbcf] text-sm hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#33bbcf] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#2ba9bd] transition-colors"
        >
          Sign in
        </button>
      </form>

      <p className="text-gray-400 text-center mt-8">
        Don't have an account?{' '}
        <button
          onClick={() => onSwitchView('register')}
          className="text-[#33bbcf] hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};


export default Login;
