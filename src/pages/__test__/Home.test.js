import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import MockRender from '../__mocks__/MockRender';
import Home from '../Home';

describe('Home page test', () => {
  test('Should display the error message', () => {
    render(MockRender(<Home />));
    const headings = screen.getAllByRole(/heading/i);
    expect(headings.length >= 3).toBeTruthy();
  });
});

describe('Snapshot check for the Home page', () => {
  test('should match the snapshot', () => {
    const homePageSnap = renderer
      .create(MockRender(<Home />)).toJSON();
    expect(homePageSnap).toMatchSnapshot();
  });
});
