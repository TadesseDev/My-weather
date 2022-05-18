import renderer from 'react-test-renderer';
import MockAppComponent from '../__mocks__/MockAppComponent';
import * as appRedux from '../Redux/App/App';

jest.spyOn(appRedux, 'updateInitialData')
  .mockImplementation(() => (dispatch) => appRedux.routeCityData(dispatch));
describe('compare snapshot for the App', () => {
  test('Assert App matches its snapshot', () => {
    const appSnap = renderer.create(
      <MockAppComponent />,
    ).toJSON();
    expect(appSnap).toMatchSnapshot();
  });
});
