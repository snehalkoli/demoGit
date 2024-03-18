import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../home/Home';
import Yanchity from '../Yanchity';

const Main = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/yanchity" element={<Yanchity />} /> 
      </Routes>
    </Router>
  );
};

export default Main;
