import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';
import Navigation from './components/Navigation';
import { updateInitialData } from './Redux/App/App';

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
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
