import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ProductProvider } from './context/ProductContext';
import { CustomerProvider } from './context/CustomerContext';
import { MessageProvider } from './context/MessageContext';
import { NotificationsProvider } from './context/NotificationsContext';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardSelect from './pages/DashboardSelect';
import ClientDashboard from './pages/ClientDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import ResetPassword from './components/auth/Reset'; // Import the ResetPassword component

const App = () => (
  <Router>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <FavoritesProvider>
            <CustomerProvider>
              <MessageProvider>
                <NotificationsProvider>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/dashboard-select" element={<DashboardSelect />} />
                    <Route path="/client-dashboard/*" element={<ClientDashboard />} />
                    <Route path="/business-dashboard/*" element={<BusinessDashboard />} />
                    <Route path="/reset-password" element={<ResetPassword />} /> {/* Add the reset-password route */}
                  </Routes>
                </NotificationsProvider>
              </MessageProvider>
            </CustomerProvider>
          </FavoritesProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </Router>
);

export default App;
