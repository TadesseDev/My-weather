
import renderer from 'react-test-renderer'
import Weather from '../Weather'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore'
const city = {
  "id": "c58ca307-8097-48f0-91f7-5869070696c3",
  "name": "Wereta",
  "distance": 43.49,
  "population": 26813,
  "nearMe": 1,
  "country": "Ethiopia",
  "countryCode": "ET",
  "clouds": {
    "all": 46
  },
  "coord": {
    "lon": 37.7,
    "lat": 11.9167
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03n"
    }
  ],
  "unit": "℃",
  "main": {
    "temp": 24.77,
    "feels_like": 24.29,
    "temp_min": 24.77,
    "temp_max": 24.77,
    "pressure": 1012,
    "humidity": 38,
    "sea_level": 1012,
    "grnd_level": 826
  },
  "wind": {
    "speed": 6,
    "deg": 324,
    "gust": 9.91
  }
}
describe('Snapshot the check for the FilteredCities', () => {

  test('should match the snapshot', () => {
    const weatherSnap = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Weather city={city} />
          </BrowserRouter>
        </Provider>
      ).toJSON();
    expect(weatherSnap).toMatchSnapshot();
  })
})