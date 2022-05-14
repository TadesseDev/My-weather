import { getNearByCity } from './endPoints'

const fetchCitiesData = async (latitude = '40.730610', longitude = '-73.935242') => {
  const options = {
    method: 'GET',
    params: { minPopulation: '5000000' },
    headers: {
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      'X-RapidAPI-Key': '566c430e66mshb3ce2e6895aae75p17f4e4jsnc091a7b69f86'
    }
  }
  return fetch(getNearByCity(latitude, longitude), options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => {
      console.error(err);
    });
}

export default fetchCitiesData;