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
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />  

        {/* All routes below require login */}
        <Route 
          path="/Home" 
          element={
            <ProtectedRoute>
              <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
                <Home searchTerm={searchTerm} />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/book/:id" 
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/Login" />} /> 
      </Routes>
    </Router>
  );
}

export default App;