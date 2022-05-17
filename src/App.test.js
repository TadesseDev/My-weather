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

describe('Check for navbar elements availabelity', () => {
  test('Assert category section is rendered', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let category = screen.getByText("All");
    expect(category).toBeInTheDocument();
    category = screen.getByPlaceholderText(/search your city/i)
    expect(category).toBeInTheDocument();
  });

  test('Assert search area is rendered', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchArea = screen.getByPlaceholderText(/search your city/i)
    expect(searchArea).toBeInTheDocument();
  });

  test('Assert search Icon is rendered', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchIcon = screen.queryByTitle(/search icon/i)
    expect(searchIcon).toBeInTheDocument();
  });
})
