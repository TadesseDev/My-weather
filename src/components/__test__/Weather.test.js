
import renderer from 'react-test-renderer'
import Weather from '../Weather'
import city from '../../__mocks__/city'
import MockRender from '../__mocks__/MockRender'
describe('Snapshot the check for the FilteredCities', () => {

  test('should match the snapshot', () => {
    const weatherSnap = renderer
      .create(
        MockRender(<Weather city={city} />)
      ).toJSON();
    expect(weatherSnap).toMatchSnapshot();
  })
})