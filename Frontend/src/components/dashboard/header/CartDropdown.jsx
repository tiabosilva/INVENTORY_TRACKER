import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../../context/CartContext';

const CartDropdown = () => {
  const { state: cartState } = useCart();
  const cartItemsCount = cartState.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-[#2c374b] relative">
        <ShoppingCartIcon className="h-6 w-6" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#33bbcf] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItemsCount}
          </span>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right rounded-lg bg-[#1c2537] border border-[#2c374b] shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Shopping Cart</h3>
            {cartState.items.length === 0 ? (
              <p className="text-gray-400">Your cart is empty</p>
            ) : (
              <>
                {cartState.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 mb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="text-white">{item.name}</h4>
                      <p className="text-gray-400">${item.price} x {item.quantity}</p>
                    </div>
                  </div>
                ))}
                <button className="w-full bg-[#33bbcf] text-white rounded-lg py-2 mt-4">
                  Checkout
                </button>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CartDropdown;