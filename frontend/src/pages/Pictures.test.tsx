import { render, screen } from '@testing-library/react';
import Pictures from './Pictures';
import { describe, test, expect } from 'vitest';
import { pictures } from './content'

describe('Pictures Component', () => {
  test('renders the main element', () => {
    render(<Pictures props={pictures} />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('renders all cards with images and details', () => {
    render(<Pictures props={pictures}/>);

    const images = [
      { alt: "Close-up of a dragonfly (animation)", title: "A Dragonfly", description: "This close-up captures the intricate details of a dragonfly's wings and body." },
      { alt: "View of the sea with cliffs (animation)", title: "Cliffs and Sea", description: "A breathtaking view of the sea with rugged cliffs under a clear blue sky." },
      { alt: "Shadow on grass (animation)", title: "Shadow on grass", description: "A shadow cast on lush green grass, evoking a sense of mystery and calm." },
    ];

    images.forEach((image) => {
      const imgElement = screen.getByAltText(image.alt);
      expect(imgElement).toBeInTheDocument();
      expect(screen.getByText(image.title)).toBeInTheDocument();
      const descriptionParts = image.description.split(', ');
      descriptionParts.forEach((part) => {
        expect(screen.getByText(part, { exact: false })).toBeInTheDocument();
      });
    });
  });

  test('renders the correct number of cards', () => {
    render(<Pictures props={pictures}/>);
    const cards = screen.getAllByRole('img');
    expect(cards).toHaveLength(3);
  });

  test('applies the correct CSS classes to images', () => {
    render(<Pictures props={pictures}/>);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveClass('img-fluid', 'rounded', 'border', 'border-white', 'shadow', 'image-animation');
    });
  });
});