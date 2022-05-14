import { getNearByCity } from './endPoints'

const fetchCitiesData = (latitude = '9.005401', longitude = '38.763611') => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      'X-RapidAPI-Key': '566c430e66mshb3ce2e6895aae75p17f4e4jsnc091a7b69f86'
    }
  }
  fetch(getNearByCity(latitude, longitude), options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => {
      console.error(err);
    });
}

export default function getInitialCities() {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    fetchCitiesData(coords.latitude, coords.longitude);
    // const latitude = coords.latitude;
    // const longitude = coords.longitude;
    // console.log(latitude, longitude);

  }, denied => {
    fetchCitiesData();
  });
}