import Home from './pages/Home';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateInitialData } from './Redux/App/App'
function App() {
  const storeState = useSelector(store => store);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("action creator ", updateInitialData()());
    console.log("state is", storeState);
  }, []);
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
