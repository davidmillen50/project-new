import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Poem } from './types.ts';
import Poems from './Poems';

describe('Poems Page', () => {
  test('renders all poems with their titles and descriptions', () => {
    const poems = [
      { title: "Poems", description: "Some poems I have written" },
      { title: "The Beetle", description: "The beetle wanders slowly past" },
      { title: "Sunlight", description: "A morning's darkness broken by the distant star's power" },
      { title: "Why am I here", description: "Why is anyone here?" },
    ];
    render(<Poems props={poems} />);

    poems.forEach((poem: Poem) => {
      expect(screen.getByText(poem.title)).toBeInTheDocument();
      expect(screen.getByText(poem.description)).toBeInTheDocument();
    });
  });
})