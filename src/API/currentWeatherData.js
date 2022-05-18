import { cityWeatherEndPoint } from '../GLOBAL/endPoints';

// we chan use mesure to change temp
const cityWeather = async (cityLatitude, cityLongitude, measure = 'metric') => {
  try {
    const URL = cityWeatherEndPoint(cityLatitude, cityLongitude, measure);
    let response = await fetch(URL);
    response = await response.json();
    let unit = '';
    if (measure === 'metric') unit = '℃';
    else if (measure === 'imperial') unit = 'F';
    else unit = 'K';
    return {
      ...response, unit,
    };
  } catch (error) {
    throw Error('Fail to retrieve cities weather data.  make sure you are connected to the internet', error);
  }
};
export default cityWeather;
