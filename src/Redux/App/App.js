import fetchCitiesData from '../../API/geodb-cities';
const UPDATE_INITIAL_CITIES = 'APP/initialize_app_with_city';
export const updateInitialData = () => async (dispatch) => {
  let data = [];
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    data = await fetchCitiesData(coords.latitude, coords.longitude);
    console.log("data is", data);
  }, async denied => {
    data = await fetchCitiesData();
  });
}

export default function appReducer(state = [], action) {
  console.log(action);
  switch (action) {
    case UPDATE_INITIAL_CITIES:
      return action.payload;
    default:
      return state;
  }
}