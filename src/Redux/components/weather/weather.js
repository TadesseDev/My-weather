import { BsFillCloudDrizzleFill, BsFillCloudFog2Fill, BsFillSunFill } from 'react-icons/bs';
import { GiRaining } from 'react-icons/gi'
import { IoIosPartlySunny } from 'react-icons/io'
const ADD_NEW_WEATHER_ICON = "Redux/components/weather/weather/ADD_NEW_WEATHER_ICON";

export const addNewWeatherInfo = (key, value) =>
  ({ action: ADD_NEW_WEATHER_ICON, payload: { key, value } });

const initialWeatherIcons = new Map();
initialWeatherIcons.set("light rain", <GiRaining className="weather-icon" />);
initialWeatherIcons.set("overcast clouds", <BsFillCloudDrizzleFill className="weather-icon" />);
initialWeatherIcons.set("few clouds", <IoIosPartlySunny className="weather-icon" />);
initialWeatherIcons.set("broken clouds", <BsFillCloudFog2Fill className="weather-icon" />);
initialWeatherIcons.set("clear sky", <BsFillSunFill className="weather-icon" />);

const weatherIconsReducer = (state = initialWeatherIcons, action) => {
  switch (action.type) {
    case ADD_NEW_WEATHER_ICON:
      const result = new Map();
      state.forEach((key, value) => {
        result.set(key, value);
      });
      return result;
    default:
      return state;
  }
}

export default weatherIconsReducer;