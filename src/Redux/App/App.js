import fetchCitiesData from '../../API/geodb-cities';
import cityWeather from '../../API/currentWeatherData'
import { v4 } from 'uuid';
import searchReducer from '../components/navigation/navigation'
import MAJOR_CITIES from '../../GLOBAL/MAJOR_CITIES'
const UPDATE_CITIES = 'APP/initialize_app_with_city';

const updateStoreWithCityData = (cities, nearMe, dispatch) => {
  cities.forEach(async city => {
    const cityInfo = await cityWeather(city.latitude, city.longitude)
    const { name, distance = false, population, country, countryCode } = city;
    const { clouds, coord, main, wind, weather, unit } = cityInfo;
    dispatch({
      type: UPDATE_CITIES,
      payload: [{ id: v4(), name, distance, population, nearMe, country, countryCode, clouds, coord, weather, unit, main, wind }]
    });
  });
}

const routeCityData = async (dispatch, latitude, longitude) => {
  let cities = [];
  if (latitude && longitude) {
    cities = await fetchCitiesData(latitude, longitude);
    cities = cities.data;
    updateStoreWithCityData(cities, 1, dispatch);
  }
  updateStoreWithCityData(MAJOR_CITIES, 2, dispatch);
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
      return searchReducer(state, action);
  }
}