import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardSelect from './pages/DashboardSelect';
import ClientDashboard from './pages/ClientDashboard';
import BusinessDashboard from './pages/BusinessDashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard-select" element={<DashboardSelect />} />
      <Route path="/client-dashboard/*" element={<ClientDashboard />} />
      <Route path="/business-dashboard/*" element={<BusinessDashboard />} />
    </Routes>
  </Router>
);

export default App;