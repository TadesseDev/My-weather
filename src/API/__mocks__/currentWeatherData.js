
const cityWeather = (cityLatitude, cityLongitude, unit = "metric") => {
  console.log("getting mock data")
  return {
    "coord": {
      "lon": -3.7103,
      "lat": 40.4023
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 25.84,
      "feels_like": 25.5,
      "temp_min": 24.3,
      "temp_max": 27.15,
      "pressure": 1020,
      "humidity": 39
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.13,
      "deg": 226,
      "gust": 5.36
    },
    "clouds": {
      "all": 0
    },
    "dt": 1652814388,
    "sys": {
      "type": 2,
      "id": 2007545,
      "country": "ES",
      "sunrise": 1652763422,
      "sunset": 1652815538
    },
    "timezone": 7200,
    "id": 6355233,
    "name": "Madrid",
    "cod": 200,
    "unit": "℃"
  }
}
export default cityWeather;