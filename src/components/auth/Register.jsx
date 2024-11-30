import { useForm } from 'react-hook-form';

const Register = ({ onSwitchView }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle registration logic here
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Create an account</h2>
      <p className="text-gray-400 mb-8">Join thousands of companies using InventoryTracker</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">First Name</label>
            <input
              {...register('firstName', { required: 'First name is required' })}
              className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Last Name</label>
            <input
              {...register('lastName', { required: 'Last name is required' })}
              className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

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
            placeholder="john@company.com"
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
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
            className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] placeholder-gray-500"
            placeholder="Create a password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('terms', { required: 'You must accept the terms' })}
            className="h-4 w-4 rounded border-gray-300 text-[#33bbcf] focus:ring-[#33bbcf]"
          />
          <label className="ml-2 text-sm text-gray-400">
            I agree to the{' '}
            <a href="#" className="text-[#33bbcf] hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-[#33bbcf] hover:underline">Privacy Policy</a>
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm">{errors.terms.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#33bbcf] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#2ba9bd] transition-colors"
        >
          Create account
        </button>
      </form>

      <p className="text-gray-400 text-center mt-8">
        Already have an account?{' '}
        <button
          onClick={() => onSwitchView('login')}
          className="text-[#33bbcf] hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default Register;