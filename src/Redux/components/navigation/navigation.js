import getCityDetail from '../../../API/name-to-coordinate'
const ADD_SINGLE_CITY = "Redux/components/navigation/navigation/ADD_SINGLE_CITY";

export const searchAndAddCity = (cityName, navigator) => async (dispatch) => {
  const data = await getCityDetail(cityName);
  console.log(data);
  navigator("/detail?'this is id");
}