import renderer from 'react-test-renderer'
import Navigation from '../Navigation'
import MockRender from '../__mocks__/MockRender'
describe('Snapshot the check for the FilteredCities', () => {

  test('should match the snapshot', () => {
    const navigationSnap = renderer
      .create(
        MockRender(<Navigation />)
      ).toJSON();
    expect(navigationSnap).toMatchSnapshot();
  })
})