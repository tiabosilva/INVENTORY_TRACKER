import { useForm } from 'react-hook-form';

const ResetPassword = ({ onSwitchView }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle password reset logic here
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Reset your password</h2>
      <p className="text-gray-400 mb-8">
        Enter your email and we'll send you instructions to reset your password
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <button
          type="submit"
          className="w-full bg-[#33bbcf] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#2ba9bd] transition-colors"
        >
          Send reset instructions
        </button>
      </form>

      <p className="text-gray-400 text-center mt-8">
        Remember your password?{' '}
        <button
          onClick={() => onSwitchView('login')}
          className="text-[#33bbcf] hover:underline"
        >
          Back to login
        </button>
      </p>
    </div>
  );
};

export default ResetPassword;