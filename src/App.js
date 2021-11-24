import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Register from './views/auth/Register';
import './App.css';
import Landing from './components/Landing';
import Login from './views/auth/Login';
import Logout from './views/auth/Logout';
import './index.css';
import Navbar from './components/Navbar';
import Schedule from './pages/schedule/Schedule';

const App = () => {
    return (
    <div className='App'>
      <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="logout" element={<Logout />} />
            <Route exact path="scheduler" element={<Schedule />} />
          </Routes>
          <Navbar />
      </Router>
    </div>
  );
}

export default App;