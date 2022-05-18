import { render, screen } from '@testing-library/react'
import Error from '../Error';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import store from '../../Redux/configureStore'
import { BrowserRouter } from 'react-router-dom';
import MockRender from '../__mocks__/MockRender'
describe('error page test', () => {
  test('Should display the error message', () => {
    render(
      MockRender(<Error />)
    );
    const error = screen.getByText(/error/i);
    expect(error).toBeInTheDocument();
  })
});