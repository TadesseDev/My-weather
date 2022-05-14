import Home from './pages/Home';
import React from 'react';
import getInitialCities from './API/geodb-cities'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  getInitialCities();
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
