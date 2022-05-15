import getCityDetail from '../../../API/name-to-coordinate'
import cityWeather from '../../../API/currentWeatherData'
import { v4 } from 'uuid';
const ADD_SINGLE_CITY = "Redux/components/navigation/navigation/ADD_SINGLE_CITY";

export const searchAndAddCity = (cityName, navigator) => async (dispatch) => {
  let city = await getCityDetail(cityName);
  city = city[0];
  const cityInfo = await cityWeather(city.lat, city.lon);
  const { name, distance = false, population = 0, country, country: countryCode } = city;
  const { clouds, coord, main, wind, weather, unit } = cityInfo;
  console.log(city);
  const action = {
    type: ADD_SINGLE_CITY,
    payload: { id: v4(), name, distance, population, nearMe: false, country, countryCode, clouds, coord, weather, unit, main, wind }
  }
  dispatch(action);
  console.log(action);
  navigator(`/detail?id=${action.payload.id}`);
}

const searchReducer = (state = [], action) => {
  console.log("dispatching action from search");
  switch (action.type) {
    case ADD_SINGLE_CITY:
      console.log("action found")
      return [action.payload, ...state];
    default:
      return state;
  }
}

export default searchReducer;