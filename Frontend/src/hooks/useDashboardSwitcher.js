import { useLocation } from 'react-router-dom';

export const useDashboardSwitcher = () => {
  const location = useLocation();
  const isBusinessDashboard = location.pathname.includes('business-dashboard');

  return {
    currentDashboard: isBusinessDashboard ? 'business' : 'client',
    switchTo: isBusinessDashboard ? 'client' : 'business',
    targetPath: isBusinessDashboard ? '/client-dashboard' : '/business-dashboard',
    profilePath: isBusinessDashboard ? '/business-dashboard/profile' : '/client-dashboard/profile',
    settingsPath: isBusinessDashboard ? '/business-dashboard/settings' : '/client-dashboard/settings',
  };
};