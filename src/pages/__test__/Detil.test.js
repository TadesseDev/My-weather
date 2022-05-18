import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import MockRender from '../__mocks__/MockRender';
import Detail from '../Detail';

describe('Snapshot check for the Detail page', () => {
  test('should match the snapshot', () => {
    const detailPageSnap = renderer
      .create(MockRender(<Detail />)).toJSON();
    expect(detailPageSnap).toMatchSnapshot();
  });
});
