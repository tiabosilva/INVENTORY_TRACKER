import { createContext, useContext, useReducer } from 'react';

const NotificationsContext = createContext();

const initialState = {
  notifications: [
    {
      id: '1',
      title: 'New Order',
      message: 'You have received a new order #12345',
      timestamp: '2024-01-15T10:00:00Z',
      read: false,
      type: 'order'
    },
    {
      id: '2',
      title: 'Low Stock Alert',
      message: 'Product "Wireless Earbuds" is running low on stock',
      timestamp: '2024-01-15T09:30:00Z',
      read: false,
      type: 'alert'
    },
    {
      id: '3',
      title: 'Payment Received',
      message: 'Payment of $149.99 has been received',
      timestamp: '2024-01-14T15:30:00Z',
      read: true,
      type: 'payment'
    }
  ]
};

const notificationsReducer = (state, action) => {
  switch (action.type) {
    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload ? { ...notification, read: true } : notification
        )
      };
    case 'MARK_ALL_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification => ({ ...notification, read: true }))
      };
    default:
      return state;
  }
};

export const NotificationsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationsReducer, initialState);

  return (
    <NotificationsContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};