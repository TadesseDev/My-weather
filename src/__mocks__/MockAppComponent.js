import { Provider } from 'react-redux';
import App from '../App';
import store from '../Redux/configureStore';

const MockAppComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default MockAppComponent;
