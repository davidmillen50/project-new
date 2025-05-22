import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';
import { describe, test, expect } from 'vitest';

describe('Homepage', () => {
  test('renders the main element', () => {
    render(<Homepage />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('renders two Card components with Details', () => {
    render(<Homepage />);
    const firstCardDescription = screen.getByText(/Welcome to my portfolio site/i);
    expect(firstCardDescription).toBeInTheDocument();

    const secondCardDescriptionOne = screen.getByText(/I am a software engineer with over 3 years experience./i);
    expect(secondCardDescriptionOne).toBeInTheDocument();
  });
});