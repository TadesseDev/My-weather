import fetchCitiesData from '../../API/geodb-cities';
import cityWeather from '../../API/currentWeatherData'
import { v4 } from 'uuid';
import { searchReducer } from '../components/navigation/navigation'
import MAJOR_CITIES from '../../GLOBAL/MAJOR_CITIES'
const UPDATE_CITIES = 'APP/initialize_app_with_city';

const updateStoreWithCityData = (cities, nearMe, dispatch) => {
  cities.forEach(async city => {
    try {
      const cityInfo = await cityWeather(city.latitude, city.longitude)
      console.log('get back data from city weather');
      const { name, distance = false, population, country, countryCode } = city;
      const { clouds, coord, main, wind, weather, unit } = cityInfo;
      dispatch({
        type: UPDATE_CITIES,
        payload: [{ id: v4(), name, distance, population, nearMe, country, countryCode, clouds, coord, weather, unit, main, wind }]
      });
    } catch (error) {
      console.error("fail to fetch data for the ", city.name, " ", error);
    }
  });
}

export const routeCityData = async (dispatch, latitude, longitude) => {
  let cities = [];
  if (latitude && longitude) {
    try {
      cities = await fetchCitiesData(latitude, longitude);
      cities = cities.data;
      updateStoreWithCityData(cities, 1, dispatch);
    } catch (error) {
      console.error("fail to fetch cities near you ", error);
    }
  }
  updateStoreWithCityData(MAJOR_CITIES, 2, dispatch);
}

export const updateInitialData = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      routeCityData(dispatch, coords.latitude, coords.longitude);
    }, denied => {
      routeCityData(dispatch);
      console.error("we cannot retrieve cities near you, we need your permission", denied);
    });
  }
}

export default function appReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_CITIES:
      return [...state, ...action.payload];
    default:
      return searchReducer(state, action);
  }
}