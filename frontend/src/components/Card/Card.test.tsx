import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import Card from './Card.tsx';
import { sum } from './sum.ts'

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

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})