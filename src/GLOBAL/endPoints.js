export const getNearByCity = (latitude, longitude, limit = 10, type = 'city', minPopulation = 0) => {
  latitude = latitude > 0 ? `%2B${latitude}` : latitude;
  longitude = longitude > 0 ? `%2B${longitude}` : longitude;
  return `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=${latitude}${longitude}&limit=${limit}&minPopulation=${minPopulation}&types=${type}`;
}
export const cityWeatherEndPoint = (cityLatitude, cityLongitude, unit) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=6902c072c502ba82c29e7bb1ee6cb7ec&units=${unit}`;

export const searchCityEndPoint = (city) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6902c072c502ba82c29e7bb1ee6cb7ec`;