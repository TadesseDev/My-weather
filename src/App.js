import Home from './pages/Home';
import React from 'react';
import getInitialCities from './API/geodb-cities'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  getInitialCities();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
