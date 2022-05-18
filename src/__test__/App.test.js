import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as appRedux from '../Redux/App/App'
import MockAppComponent from '../__mocks__/MockAppComponent'
jest.mock('../API/currentWeatherData');
jest.mock('../API/name-to-coordinate');
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

describe('Integration test for the search bar', () => {

  test('Should search city, and respond with city data', async () => {
    render(
      <MockAppComponent />
    );
    const searchIcon = screen.queryByTitle(/search icon/i)
    const searchArea = screen.getByPlaceholderText(/search your city/i)
    expect(searchArea).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    fireEvent.change(searchArea, { target: { value: "Mexico City" } });
    expect(searchArea.value).toBe("Mexico City");
    fireEvent.click(searchIcon);
    expect(searchArea.value).toBe("");
    const searchPage = await screen.findByText('Mexico City');
    expect(searchPage).toBeInTheDocument();

  });
});