import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./component/Loginform";
import Register from "../src/component/Register";  
import Home from "./component/Home";
import Navbar from "../src/component/Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname === "/Home"; 

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to /Login */}
        <Route path="/" element={<Navigate to="/Login" replace />} />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> 
        
        {/* Home page with Navbar */}
        <Route 
          path="/Home" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        
        {/* 404 fallback - redirect to Login */}  
        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </Router>
  );
}

export default App;