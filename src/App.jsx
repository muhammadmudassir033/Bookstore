import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./component/Loginform";
import Register from "../src/component/Register"; 
import Home from "./component/Home";
import Navbar from "../src/component/Navbar";
import Details from "../src/component/Details";

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

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // State lifted to App

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> 
        <Route 
          path="/Home" 
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <Home searchTerm={searchTerm} />
            </Layout>
          } 
        />
        <Route path="/book/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </Router>
  );
}

export default App;