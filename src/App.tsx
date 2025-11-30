import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Landing from './landing/landing';
import Landing2 from './landing/landing2';
import Landing3 from './landing/landing3';
import AppContent from './components/AppContent';
import MainLayout from './layouts/MainLayout';
import Pricing from './pages/Pricing';
import StartTrial from './pages/StartTrial';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/dashboard/DashboardHome';
import './App.css';

// Define types for the ProtectedRoute props
interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
  children?: ReactNode;
}

// Protected Route Component with TypeScript
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  isAuthenticated, 
  redirectPath = '/signin',
  children 
}) => {
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }
  
  return children ? <>{children}</> : <Outlet />;
};

// Main App component
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = (): void => {
    try {
      localStorage.setItem('authToken', 'dummy-token');
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route 
          path="/signin" 
          element={<SignIn onLogin={handleLogin} />} 
        />
        <Route 
          path="/signup" 
          element={<SignUp />} 
        />
        
        {/* Protected dashboard routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route 
            path="/dashboard" 
            element={
              <Dashboard 
                onLogout={() => {
                  localStorage.removeItem('authToken');
                  setIsAuthenticated(false);
                }}
              />
            }
          >
            <Route index element={<DashboardHome />} />
            {/* Add more dashboard sub-routes here */}
          </Route>
        </Route>

        {/* Other public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/landing2" element={<Landing2 />} />
          <Route path="/landing3" element={<Landing3 />} />
          <Route path="/app" element={<AppContent />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/start-trial" element={<StartTrial />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
