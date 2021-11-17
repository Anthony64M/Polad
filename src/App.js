import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import './App.css';
import Landing from './components/Landing';
import Login from './pages/Login';
import './index.css';
import Navbar from './components/Navbar';


const App= () => {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="login" element={<Login />} />
          </Routes>
          <Navbar />
      </Router>
    </>
  );
}

export default App;