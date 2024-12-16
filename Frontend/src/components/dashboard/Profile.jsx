import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <div className="bg-[#0a0f1c] rounded-xl p-8 border border-[#1c2537]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-[#1c2537] text-white rounded-lg hover:bg-[#2c374b] transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-center space-x-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#1c2537]"
            />
            {isEditing && (
              <button
                type="button"
                className="px-4 py-2 bg-[#1c2537] text-white rounded-lg hover:bg-[#2c374b] transition-colors"
              >
                Change Photo
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 mb-2">First Name</label>
              <input
                {...register('firstName')}
                disabled={!isEditing}
                defaultValue="John"
                className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Last Name</label>
              <input
                {...register('lastName')}
                disabled={!isEditing}
                defaultValue="Doe"
                className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                {...register('email')}
                disabled={!isEditing}
                defaultValue="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Phone</label>
              <input
                {...register('phone')}
                disabled={!isEditing}
                defaultValue="+1 234 567 890"
                className="w-full px-4 py-3 rounded-lg bg-[#1c2537] text-white border border-[#2c374b] focus:outline-none focus:border-[#33bbcf] disabled:opacity-50"
              />
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end space-x-4 mt-8">
              <button
                type="submit"
                className="px-6 py-3 bg-[#33bbcf] text-white rounded-lg hover:bg-[#2ba9bd] transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;