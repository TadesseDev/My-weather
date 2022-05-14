import { cityWeatherEndPoint } from './endPoints';

const cityWeather = async (cityLatitude, cityLongitude) => {
  let response = await fetch(cityWeatherEndPoint(cityLatitude, cityLongitude));
  response = await response.json();
  return response;
}
export default cityWeather;