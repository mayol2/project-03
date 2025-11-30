import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Dashboard.css';

const navItems = [
  { icon: '📊', label: 'Dashboard', path: '/dashboard' },
  { icon: '📈', label: 'Analytics', path: '/analytics' },
  { icon: '📂', label: 'Projects', path: '/projects' },
  { icon: '✅', label: 'Tasks', path: '/tasks' },
  { icon: '👥', label: 'Team', path: '/team' },
  { icon: '💬', label: 'Messages', path: '/messages' },
  { icon: '⚙️', label: 'Settings', path: '/settings' },
];

interface DashboardProps {
  onLogout: () => void;
}

// Add a button in the sidebar that uses onLogout
export default function Dashboard({ onLogout }: DashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <button 
            className="toggle-sidebar"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {isSidebarOpen && <span className="nav-label">{item.label}</span>}
                </Link>
              </li>
            ))}
            <li>
              <button 
                onClick={onLogout}
                className="nav-link logout-button"
                style={{ marginTop: 'auto' }}
              >
                <span className="nav-icon">🚪</span>
                {isSidebarOpen && <span className="nav-label">Logout</span>}
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">JD</div>
            {isSidebarOpen && (
              <div className="user-info">
                <div className="user-name">John Doe</div>
                <div className="user-email">john@example.com</div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user-actions">
            <button className="notification-btn" aria-label="Notifications">
              <span className="badge">3</span>
              🔔
            </button>
            <div className="user-menu">
              <div className="avatar">JD</div>
            </div>
          </div>
        </header>
        
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
