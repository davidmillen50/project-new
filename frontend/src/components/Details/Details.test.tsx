import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import Details from './Details';

describe('Details Component', () => {
  test('renders the title correctly', () => {
    render(<Details title="Test Title" description="Part1,Part2,Part3" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the description correctly with line breaks', () => {
    render(<Details title="Test Title" description="Part1,Part2,Part3" />);
    const descriptionElement = screen.getByText((_, element) => {
      const hasText = (node: Element) => node.textContent === 'Part1Part2Part3';
      const nodeHasText = element ? hasText(element) : false;
      const childrenDontHaveText = Array.from(element?.children || []).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the correct number of line breaks in the description', () => {
    render(<Details title="Test Title" description="Part1,Part2,Part3" />);
    const lineBreaks = screen.getAllByText('', { selector: 'br' });
    expect(lineBreaks).toHaveLength(3);
  });
});