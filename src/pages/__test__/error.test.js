import { render, screen } from '@testing-library/react'
import Error from '../Error';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import store from '../../Redux/configureStore'
import { BrowserRouter } from 'react-router-dom';
describe('error page test', () => {
  test('Should display the error message', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      </Provider>);
    const error = screen.getByText(/error/i);
    console.log(error)
    expect(error).toBeInTheDocument();
  })
});