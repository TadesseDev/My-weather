import { render, screen } from '@testing-library/react'
import Error from '../Error';
import { Provider } from 'react-redux'
import store from '../../Redux/configureStore'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
describe('error page test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Error />
      </Provider>
    </BrowserRouter>);
  test('Should display the error message', () => {

  })
});