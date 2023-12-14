import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./components/Home";
import Login from './components/LoginPage';

import RegisterDog from './components/RegisterDog';
import RegisterWalker from './components/RegisterWalker';
import ViewDogs from './components/ViewDogs';
import ViewWalkers from './components/ViewWalkers';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register-dog" element={<RegisterDog/>} />
          <Route path="/register-walker" element={<RegisterWalker/>} /> 
          <Route path="/all-dogs" element={<ViewDogs/>} /> 
          <Route path="/all-walkers" element={<ViewWalkers/>} /> 
          
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
