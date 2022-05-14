import fetchCitiesData from '../../API/geodb-cities';
import cityWeather from '../../API/currentWeatherData'
const UPDATE_CITIES = 'APP/initialize_app_with_city';
export const updateInitialData = () => async (dispatch) => {
  const routeCityData = async (latitude, longitude) => {
    let cities = [];
    if (latitude && longitude) {
      cities = await fetchCitiesData(latitude, longitude);
    }
    else cities = await fetchCitiesData();
    cities = cities.data;
    for (let i = 0; i < cities.length; i++) {
      const cityInfo = await cityWeather(cities[i].latitude, cities[i].longitude)
      const { name, clouds, coord, main, sys, wind } = cityInfo;
      dispatch({ type: UPDATE_CITIES, payload: [{ name, clouds, coord, main, sys, wind }] });
    }
  }
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    routeCityData(coords.latitude, coords.longitude);
  }, async denied => {
    routeCityData();
  });
}

export default function appReducer(state = [], action) {
  console.log(action);
  switch (action) {
    case UPDATE_CITIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
}