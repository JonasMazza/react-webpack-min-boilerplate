import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  test('should match snapshot', () => {
    const app = renderer.create(<App />);
    expect(app).toMatchSnapshot();
  });
});