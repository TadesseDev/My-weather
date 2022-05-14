export const getNearByCity = (latitude, longitude) => {
  console.log(latitude, '__', longitude)
  latitude = latitude > 0 ? `%2B${latitude}` : latitude;
  longitude = longitude > 0 ? `%2B${longitude}` : longitude;
  return `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=${latitude}${longitude}&limit=10`;
}