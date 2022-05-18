import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as appRedux from '../Redux/App/App'
import MockAppComponent from '../__mocks__/MockAppComponent'
jest.mock('../API/currentWeatherData');
jest.spyOn(appRedux, 'updateInitialData')
  .mockImplementation(() => (dispatch) => {
    appRedux.routeCityData(dispatch);
  });

describe('Check for navbar elements availability', () => {
  test('Assert category section is rendered', () => {
    render(
      <MockAppComponent />
    );
    let category = screen.getByText("All");
    expect(category).toBeInTheDocument();
    category = screen.getByPlaceholderText(/search your city/i)
    expect(category).toBeInTheDocument();
  });

  test('Assert search area is rendered', () => {
    render(
      <MockAppComponent />
    );
    const searchArea = screen.getByPlaceholderText(/search your city/i)
    expect(searchArea).toBeInTheDocument();
  });

  test('Assert search Icon is rendered', () => {
    render(
      <MockAppComponent />
    );
    const searchIcon = screen.queryByTitle(/search icon/i)
    expect(searchIcon).toBeInTheDocument();
  });
});

describe('Check the content for the list of cities', () => {

  test('Should render initial minimum 10 Major cities', async () => {
    render(
      <MockAppComponent />
    );
    const listOfCities = await screen.findAllByTitle(/city-weather/i);
    expect(listOfCities.length >= 10).toBeTruthy();
  });
});