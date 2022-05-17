import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/configureStore'
import * as appRedux from './Redux/App/App'
jest.spyOn(appRedux, 'updateInitialData')
  .mockImplementation(() => (dispatch) => {
    return appRedux.routeCityData(dispatch);
  });

test('Render category react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let category = screen.getByText("All");
  expect(category).toBeInTheDocument();
});
