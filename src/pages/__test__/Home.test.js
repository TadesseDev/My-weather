import { render, screen } from '@testing-library/react'
import Home from '../Home';
import '@testing-library/jest-dom';
import MockRender from '../__mocks__/MockRender'
import renderer from 'react-test-renderer'
describe('Home page test', () => {
  test('Should display the error message', () => {
    render(MockRender(<Home />));
    const headings = screen.getAllByRole(/heading/i);
    expect(headings.length >= 3).toBeTruthy();
  })
});


describe('Snapshot check for the Home page', () => {

  test('should match the snapshot', () => {
    const homePageSnap = renderer
      .create(MockRender(<Home />)).toJSON();
    expect(homePageSnap).toMatchSnapshot();
  })
})