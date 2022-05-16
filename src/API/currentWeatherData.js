import { cityWeatherEndPoint } from '../GLOBAL/endPoints';

// we chan use mesure to change temp
const cityWeather = async (cityLatitude, cityLongitude, unit = "metric") => {
  try {
    const URL = cityWeatherEndPoint(cityLatitude, cityLongitude, unit);
    let response = await fetch(URL);
    response = await response.json();
    unit = unit === "metric" ? "℃" : unit === "imperial" ? 'F' : "K";
    return {
      ...response, unit
    };
  } catch (error) {
    throw Error("Fail to get the cities weather data", error);
  }
}
export default cityWeather;