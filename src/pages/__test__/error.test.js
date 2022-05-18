import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import MockRender from '../__mocks__/MockRender';
import Error from '../Error';

describe('error page test', () => {
  test('Should display the error message', () => {
    render(
      MockRender(<Error />),
    );
    const error = screen.getByText(/error/i);
    expect(error).toBeInTheDocument();
  });
});

describe('Snapshot the check for the Error page', () => {
  test('should match the snapshot', () => {
    const errorPageSnap = renderer
      .create(MockRender(<Error />)).toJSON();
    expect(errorPageSnap).toMatchSnapshot();
  });
});
