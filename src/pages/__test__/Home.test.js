import { render, screen } from '@testing-library/react'
import Home from '../Home';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import store from '../../Redux/configureStore'
import { BrowserRouter } from 'react-router-dom';
import MockRender from '../__mocks__/MockRender'
describe('Home page test', () => {
  test('Should display the error message', () => {
    render(MockRender(<Home />));
    const headings = screen.getAllByRole(/heading/i);
    expect(headings.length >= 3).toBeTruthy();
  })

});