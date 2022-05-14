import Home from './pages/Home';
import React from 'react';
import getInitialCities from './API/geodb-cities'
function App() {
  getInitialCities();
  return (
    <div className="App">
      <Home />
      app component
    </div>
  );
}

export default App;
