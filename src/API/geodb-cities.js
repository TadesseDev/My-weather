import { getNearByCity } from '../GLOBAL/endPoints';

const fetchCitiesData = async (latitude = '40.730610', longitude = '-73.935242') => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      'X-RapidAPI-Key': '566c430e66mshb3ce2e6895aae75p17f4e4jsnc091a7b69f86',
    },
  };
  try {
    return fetch(getNearByCity(latitude, longitude), options)
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => {
        throw Error(err);
      });
  } catch (error) {
    throw Error('fail to fetch cities near you: make sure you are connected to the internet', error);
  }
};

export default fetchCitiesData;
