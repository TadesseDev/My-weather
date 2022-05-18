import { searchCityEndPoint } from '../GLOBAL/endPoints';
const getCityDetail = async (cityName) => {
  console.log("getting a real data");
  try {
    const URL = searchCityEndPoint(cityName);
    let response = await fetch(URL);
    response = await response.json();
    return response;
  } catch (error) {
    throw Error("Fail to map your city name to its coordinate. make sure you are connected to the internet", error);
  }
}
export default getCityDetail;