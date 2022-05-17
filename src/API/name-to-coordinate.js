import { searchCityEndPoint } from '../GLOBAL/endPoints';
const getCityDetail = async (cityName) => {
  try {
    const URL = searchCityEndPoint(cityName);
    let response = await fetch(URL);
    response = await response.json();
    console.log("name to cordinate is ", response);
    return response;
  } catch (error) {
    throw Error("Fail to map your city name to its coordinate. make sure you are connected to the internet", error);
  }
}
export default getCityDetail;