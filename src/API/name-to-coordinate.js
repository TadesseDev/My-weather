import { searchCityEndPoint } from '../GLOBAL/endPoints';
// const getCityDetail = async (cityName) => {
//   console.log(cityName);
//   const URL = searchCityEndPoint(cityName);
//   console.log(URL);
//   let response = await fetch(URL);
//   response = await response.json();
//   return response;
// }
const another = async (cityName) => {
  console.log(cityName);
  const URL = searchCityEndPoint(cityName);
  console.log(URL);
  let response = await fetch(URL);
  response = await response.json();
  return response;
}
export default another;