import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as appRedux from '../Redux/App/App'
import MockAppComponent from '../__mocks__/RenderAppWithProvider'
jest.mock('logger')
jest.spyOn(appRedux, 'updateInitialData')
  .mockImplementation(() => (dispatch) => {
    return appRedux.routeCityData(dispatch);
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

  test('Should render initial on first load', async () => {
    render(
      <MockAppComponent />
    );
    const listOfCities = await screen.findAllByTestId(/city-weather/i, { timeout: 50000 });
    console.log("list of cities are", listOfCities.length);
    expect(listOfCities.length >= 10).toBeTruthy();
  });
});