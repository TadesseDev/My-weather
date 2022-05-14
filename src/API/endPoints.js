export const getNearByCity = (latitude, longitude) => {
  latitude = latitude > 0 ? `%2B${latitude}` : latitude;
  longitude = longitude > 0 ? `%2B${longitude}` : longitude;
  return `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=${latitude}${longitude}&limit=10`;
}
export const cityWeatherEndPoint = (cityLatitude, cityLongitude) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=6902c072c502ba82c29e7bb1ee6cb7ec`