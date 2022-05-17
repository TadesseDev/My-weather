import renderer from 'react-test-renderer';
import App from '../App';
import { Provider } from 'react-redux'
import store from '../Redux/configureStore'
import * as appRedux from '../Redux/App/App'
jest.spyOn(appRedux, 'updateInitialData')
  .mockImplementation(() => (dispatch) => {
    return appRedux.routeCityData(dispatch);
  });
describe('compare snapshot for the App', () => {
  test('Assert App matches its snapshot', () => {
    const appSnap = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
    expect(appSnap).toMatchSnapshot()
  });
})