
import renderer from 'react-test-renderer'
import Weather from '../Weather'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore'
import city from '../../__mocks__/city'
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