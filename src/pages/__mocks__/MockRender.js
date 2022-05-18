import { render, screen } from '@testing-library/react'
import Home from '../Home';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import store from '../../Redux/configureStore'
import { BrowserRouter } from 'react-router-dom';

export default (component) => (
  <Provider store={store}>
    <BrowserRouter>
      {component}
    </BrowserRouter>
  </Provider>
);