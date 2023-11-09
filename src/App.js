import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./components/Home";
import RegisterDog from './components/RegisterDog';
import RegisterWalker from './components/RegisterWalker';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register-dog" element={<RegisterDog/>} />
          <Route path="/register-walker" element={<RegisterWalker/>} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
