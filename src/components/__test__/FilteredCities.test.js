import renderer from 'react-test-renderer';
import FilteredCities from '../FilteredCities';
import MockRender from '../__mocks__/MockRender';

describe('Snapshot the check for the FilteredCities', () => {
  test('should match the snapshot', () => {
    const filteredCitySnap = renderer
      .create(
        MockRender(<FilteredCities filter="My cities" cities={[]} />),

      ).toJSON();
    expect(filteredCitySnap).toMatchSnapshot();
  });
});
