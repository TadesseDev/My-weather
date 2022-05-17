import renderer from 'react-test-renderer'
import Navigation from '../Navigation'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore'
describe('Snapshot the check for the FilteredCities', () => {

  test('should match the snapshot', () => {
    const navigationSnap = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      ).toJSON();
    expect(navigationSnap).toMatchSnapshot();
  })
})