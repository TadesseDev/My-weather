const UPDATE_INITIAL_CITIES = 'APP/initialize_app_with_city';

export const initializeCities = () =>
  ({ type: UPDATE_INITIAL_CITIES, payload: [] });

export default function appReducer(state = [], action) {
  console.log(action);
  switch (action) {
    case UPDATE_INITIAL_CITIES:
      return action.payload;
    default:
      return state;
  }
}