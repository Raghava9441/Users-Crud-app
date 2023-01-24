/* eslint-disable prettier/prettier */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from '../App';

describe('App', () => {
  it('render hello world', () => {
    // arrange
    render(<WrappedApp />);
    // act
    // expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
  it('Renders not found  if invalid path', () => {
    render(
      <MemoryRouter initialEntries={["/this-route-does-not-fond"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1
      })
    ).toHaveTextContent("NotFound")
  })
});
