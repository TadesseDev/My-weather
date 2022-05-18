
import Detail from '../Detail';
import '@testing-library/jest-dom';
import MockRender from '../__mocks__/MockRender'
import renderer from 'react-test-renderer'

describe('Snapshot check for the Detail page', () => {

  test('should match the snapshot', () => {
    const detailPageSnap = renderer
      .create(MockRender(<Detail />)).toJSON();
    expect(detailPageSnap).toMatchSnapshot();
  })
})