import { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [
    {
      id: '1',
      name: 'Premium Laptop',
      category: 'Electronics',
      price: 1299.99,
      stock: 45,
      status: 'In Stock',
      description: 'High-performance laptop with the latest specifications',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      createdAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      name: 'Wireless Earbuds',
      category: 'Electronics',
      price: 149.99,
      stock: 5,
      status: 'Low Stock',
      description: 'Premium wireless earbuds with noise cancellation',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
      createdAt: '2024-01-14T15:30:00Z',
    },
  ]
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case 'UPDATE_STOCK':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id
            ? {
                ...product,
                stock: product.stock - action.payload.quantity,
                status: (product.stock - action.payload.quantity) <= 0 
                  ? 'Out of Stock' 
                  : (product.stock - action.payload.quantity) <= 5 
                  ? 'Low Stock' 
                  : 'In Stock'
              }
            : product
        )
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};