import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./component/Loginform";
import Register from "../src/component/Register"; 
import Home from "./component/Home";
import Navbar from "../src/component/Navbar";
import Details from "../src/component/Details";
import AdminDashboard from "./component/AdminDashboard";

const Layout = ({ children, searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const showNavbar = location.pathname === "/Home"; 

  return (
    <>
      {showNavbar && <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      {children}
    </>
  );
};

const ProtectedRoute = ({ children, requiredRole }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    return <Navigate to="/Login" replace />;
  }
  if (requiredRole && currentUser.role !== requiredRole) {
    // If user tries to access the wrong dashboard, redirect to their correct dashboard
    if (currentUser.role === 'admin') {
      return <Navigate to="/admin-dashboard" replace />;
    } else {
      return <Navigate to="/Home" replace />;
    }
  }
  return children;
};

const PublicRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    // Redirect to dashboard based on role
    if (currentUser.role === 'admin') {
      return <Navigate to="/admin-dashboard" replace />;
    }
    return <Navigate to="/Home" replace />;
  }
  return children;
};

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // State lifted to App

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/Register" element={<PublicRoute><Register /></PublicRoute>} />  

        {/* User Home - only for users */}
        <Route 
          path="/Home" 
          element={
            <ProtectedRoute requiredRole="user">
              <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
                <Home searchTerm={searchTerm} />
              </Layout>
            </ProtectedRoute>
          } 
        />
        {/* Book details - only for users */}
        <Route 
          path="/book/:id" 
          element={
            <ProtectedRoute requiredRole="user">
              <Details />
            </ProtectedRoute>
          } 
        />
        {/* Admin Dashboard - only for admin */}
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        {/* Catch-all: if logged in, redirect to correct dashboard; else to login */}
        <Route path="*" element={
          JSON.parse(localStorage.getItem('currentUser'))
            ? (JSON.parse(localStorage.getItem('currentUser')).role === 'admin'
                ? <Navigate to="/admin-dashboard" replace />
                : <Navigate to="/Home" replace />)
            : <Navigate to="/Login" replace />
        } />
      </Routes>
    </Router>
  );
}

export default App;