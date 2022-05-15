import fetchCitiesData from '../../API/geodb-cities';
import cityWeather from '../../API/currentWeatherData'
import { v4 } from 'uuid';
const UPDATE_CITIES = 'APP/initialize_app_with_city';

const routeCityData = async (dispatch, latitude, longitude) => {
  let cities = [];
  if (latitude && longitude) {
    cities = await fetchCitiesData(latitude, longitude);
  }
  else cities = await fetchCitiesData();
  cities = cities.data;
  cities.forEach(async city => {
    const cityInfo = await cityWeather(city.latitude, city.longitude)
    const { name, distance = false, population } = city;
    const { clouds, coord, main, sys, wind } = cityInfo;
    dispatch({ type: UPDATE_CITIES, payload: [{ id: v4(), name, distance, population, clouds, coord, main, sys, wind }] });
  });
}

export const updateInitialData = () => async (dispatch) => {
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    routeCityData(dispatch, coords.latitude, coords.longitude);
  }, async denied => {
    routeCityData(dispatch);
  });
}

export default function appReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_CITIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
}