import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/LoginPage';
import OwnerUserDash from './components/OwnerUserDash';
import WalkerUserDash from './components/WalkerUserDash';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/walker-dashboard" element={<WalkerUserDash/>} />
          <Route path="/owner-dashboard" element={<OwnerUserDash/>} />
          
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
