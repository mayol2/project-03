import { Link } from 'react-router-dom';
import './DashboardHome.css';

export default function DashboardHome() {
  return (
    <div className="dashboard-home">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-actions">
          <button className="btn btn-primary">
            + New Project
          </button>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">24</div>
          <div className="stat-label">Active Projects</div>
          <div className="stat-change positive">+12% from last month</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">156</div>
          <div className="stat-label">Tasks Completed</div>
          <div className="stat-change positive">+8% from last week</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">$12,450</div>
          <div className="stat-label">Total Revenue</div>
          <div className="stat-change positive">+5.4% from last month</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">89%</div>
          <div className="stat-label">Customer Satisfaction</div>
          <div className="stat-change negative">-2% from last month</div>
        </div>
      </div>
      
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="activity-item">
              <div className="activity-avatar">JD</div>
              <div className="activity-content">
                <div className="activity-message">
                  <strong>John Doe</strong> completed task <strong>Update homepage design</strong>
                </div>
                <div className="activity-time">2 hours ago</div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/activity" className="view-all">View all activity →</Link>
      </div>
    </div>
  );
}
