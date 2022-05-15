import Home from './pages/Home';
import Detail from './pages/Detail';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { updateInitialData } from './Redux/App/App'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateInitialData());
  }, []);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
