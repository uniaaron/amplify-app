import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./components/Home";
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register-dog" element={RegisterPage("Dog")} />
          <Route path="/register-walker" element={RegisterPage("Walker")} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
