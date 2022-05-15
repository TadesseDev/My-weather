import { cityWeatherEndPoint } from '../GLOBAL/endPoints';

// we chan use mesure to change temp
const cityWeather = async (cityLatitude, cityLongitude, unit = "metric") => {
  const URL = cityWeatherEndPoint(cityLatitude, cityLongitude, unit);
  console.log(URL);
  let response = await fetch(URL);
  response = await response.json();
  console.log(response);
  unit = unit === "metric" ? "℃" : unit === "imperial" ? 'F' : "K";
  return {
    ...response, unit
  };
}
export default cityWeather;