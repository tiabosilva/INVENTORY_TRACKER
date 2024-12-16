import { createContext, useContext, useReducer } from 'react';

const MessageContext = createContext();

const initialState = {
  messages: [
    {
      id: '1',
      sender: {
        id: '1',
        name: 'Jane Cooper',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      },
      content: 'Hello, I have a question about my recent order.',
      timestamp: '2024-01-15T10:00:00Z',
      read: false,
      type: 'inquiry'
    },
    {
      id: '2',
      sender: {
        id: '2',
        name: 'John Smith',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      },
      content: 'When will my order be shipped?',
      timestamp: '2024-01-15T09:30:00Z',
      read: true,
      type: 'support'
    }
  ]
};

const messageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [action.payload, ...state.messages]
      };
    case 'MARK_AS_READ':
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === action.payload ? { ...message, read: true } : message
        )
      };
    case 'DELETE_MESSAGE':
      return {
        ...state,
        messages: state.messages.filter(message => message.id !== action.payload)
      };
    default:
      return state;
  }
};

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessageProvider');
  }
  return context;
};