import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Redux/configureStore';

const MockRender = (component) => (
  <Provider store={store}>
    <BrowserRouter>
      {component}
    </BrowserRouter>
  </Provider>
);

export default MockRender;
