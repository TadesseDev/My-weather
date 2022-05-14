import Home from './pages/Home';
import React from 'react';
function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      'X-RapidAPI-Key': '566c430e66mshb3ce2e6895aae75p17f4e4jsnc091a7b69f86'
    }
  };
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const latitude = coords.latitude;
    const longitude = coords.longitude;
    console.log(latitude, longitude);
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=%2B${latitude}%2B${longitude}&limit=10`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => {
        console.error(err);
      });
  }, denied => {
    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=%2B40.730610-73.935242&limit=10', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => {
        console.error(err);
      });
  });
  return (
    <div className="App">
      <Home />
      app component
    </div>
  );
}

export default App;
