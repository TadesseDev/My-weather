export const getNearByCity = (latitude, longitude) =>
  `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=%2B${latitude}%2B${longitude}&limit=10`;