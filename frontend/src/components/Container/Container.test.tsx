import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from './Container';
import { describe, test, expect } from 'vitest';

describe('Container Component', () => {
  test('renders children correctly', () => {
    const childText = 'Test Child';
    render(
      <Container>
        <p>{childText}</p>
      </Container>
    );

    const childElement = screen.getByText(childText);
    expect(childElement).toBeInTheDocument();
  });

  test('applies the correct class name', () => {
    render(
      <Container>
        <p>Test</p>
      </Container>
    );

    const containerElement = screen.getByText('Test').parentElement;
    expect(containerElement).toHaveClass('container');
  });
});