import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [stats] = useState({
    totalBooks: 150,
    totalOrders: 45,
    totalUsers: 120,
    revenue: '$12,500'
  });

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-nav">
          <Link to="/orders" className="nav-link">Orders</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p className="stat-number">{stats.totalBooks}</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p className="stat-number">{stats.totalOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-number">{stats.revenue}</p>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn">Add New Book</button>
          <button className="action-btn">View Orders</button>
          <button className="action-btn">Manage Users</button>
          <button className="action-btn">Generate Reports</button>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-time">10:30 AM</span>
            <span className="activity-text">New order #1234 received</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">09:15 AM</span>
            <span className="activity-text">New user registration</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">Yesterday</span>
            <span className="activity-text">Inventory updated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 