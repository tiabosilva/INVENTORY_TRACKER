import CartDropdown from './header/CartDropdown';
import ProfileDropdown from './header/ProfileDropdown';
import NotificationsButton from './header/NotificationsButton';
import BusinessBadge from './header/BusinessBadge';

const Header = ({ user }) => {
  // Add default values for when user is null
  const defaultUser = {
    name: 'Guest',
    businessName: '',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  };

  // Use nullish coalescing to provide default values
  const currentUser = user ?? defaultUser;

  return (
    <header className="bg-[#1c2537] border-b border-[#2c374b] py-4 px-6 relative z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Welcome back, {currentUser.name}
          </h1>
          <BusinessBadge businessName={currentUser.businessName} />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CartDropdown />
            <NotificationsButton />
            <ProfileDropdown user={currentUser} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;