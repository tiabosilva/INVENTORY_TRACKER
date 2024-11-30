import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardSelect from './pages/DashboardSelect';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard-select" element={<DashboardSelect />} />
      {/* Placeholder routes for future dashboard implementations */}
      <Route path="/client-dashboard" element={<div className="text-white p-4">Client Dashboard (Coming Soon)</div>} />
      <Route path="/business-dashboard" element={<div className="text-white p-4">Business Dashboard (Coming Soon)</div>} />
    </Routes>
  </Router>
);

export default App;