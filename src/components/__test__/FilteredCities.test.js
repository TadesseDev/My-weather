import renderer from 'react-test-renderer'
import FilteredCities from '../FilteredCities'
describe('Snapshot the check for the FilteredCities', () => {

  test('should match the snapshot', () => {
    const filteredCitySnap = renderer
      .create(<FilteredCities filter="My cities" cities={[]} />).toJSON();
    expect(filteredCitySnap).toMatchSnapshot();
  })
})