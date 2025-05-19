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
    const firstCardDescription = screen.getByText(/I made this with TypeScript, React and Node Express/i);
    expect(firstCardDescription).toBeInTheDocument();
  
    const secondCardTitle = screen.getByText('What is here?');
    const secondCardDescriptionOne = screen.getByText(/My Profile and some other stuff/i);
    expect(secondCardTitle).toBeInTheDocument();
    expect(secondCardDescriptionOne).toBeInTheDocument();
  });
});