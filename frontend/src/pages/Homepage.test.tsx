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
    const firstCardTitle = screen.getByText('Homepage');
    const firstCardDescription = screen.getByText('I made this with a view to learning React');
    expect(firstCardTitle).toBeInTheDocument();
    expect(firstCardDescription).toBeInTheDocument();
  
    const secondCardTitle = screen.getByText('What is here?');
    const secondCardDescriptionOne = screen.getByText(/Some poems some photos./i);
    const secondCardDescriptionTwo = screen.getByText(/Maybe some other stuff./i);
    expect(secondCardTitle).toBeInTheDocument();
    expect(secondCardDescriptionOne).toBeInTheDocument();
    expect(secondCardDescriptionTwo).toBeInTheDocument();
  });
});