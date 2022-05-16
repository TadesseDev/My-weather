import { searchCityEndPoint } from '../GLOBAL/endPoints';
const getCityDetail = async (cityName) => {
  try {
    const URL = searchCityEndPoint(cityName);
    let response = await fetch(URL);
    response = await response.json();
    return response;
  } catch (error) {
    throw Error("Fail to fetch city detail", error);
  }
}
export default getCityDetail;