import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Loginform";
import Register from "../src/component/Register";  
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to /Login */}
        <Route path="/" element={<Navigate to="/Login" replace />} />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />}/> 
        <Route path="/Home" element={<Home />} />
        
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </Router>
  );
}

export default App;