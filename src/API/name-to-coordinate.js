import { searchCityEndPoint } from '../GLOBAL/endPoints';
const getCityDetail = async (cityName) => {
  const URL = searchCityEndPoint(cityName);
  let response = await fetch(URL);
  response = await response.json();
  return response;
}
export default getCityDetail;