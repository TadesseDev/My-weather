import Home from './pages/Home';
import React from 'react';
import getInitialCities from './API/geodb-cities'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { initializeCities } from './Redux/App/App'
function App() {
  const storeState = useSelector(store => store);
  const dispatch = useDispatch();
  console.log("action creator ", initializeCities());
  console.log("state is", storeState);
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
