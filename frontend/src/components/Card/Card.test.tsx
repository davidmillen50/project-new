import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import Card from './Card.tsx';

describe('Card component', () => {
  test('renders children correctly', () => {
    const childrenText = 'Hello, World!';
    render(
      <Card>
        <p>{childrenText}</p>
      </Card>
    );
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
});