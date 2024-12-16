import { createContext, useContext, useReducer } from 'react';

const CustomerContext = createContext();

const initialState = {
  customers: [
    {
      id: '1',
      name: 'Jane Cooper',
      email: 'jane@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      status: 'active',
      totalOrders: 12,
      totalSpent: 2430.50,
      lastOrder: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      name: 'John Smith',
      email: 'john@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      status: 'inactive',
      totalOrders: 8,
      totalSpent: 1250.75,
      lastOrder: '2024-01-10T15:30:00Z',
    },
  ]
};

const customerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        customers: [action.payload, ...state.customers]
      };
    case 'UPDATE_CUSTOMER':
      return {
        ...state,
        customers: state.customers.map(customer =>
          customer.id === action.payload.id ? action.payload : customer
        )
      };
    case 'DELETE_CUSTOMER':
      return {
        ...state,
        customers: state.customers.filter(customer => customer.id !== action.payload)
      };
    default:
      return state;
  }
};

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialState);

  return (
    <CustomerContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomers must be used within a CustomerProvider');
  }
  return context;
};