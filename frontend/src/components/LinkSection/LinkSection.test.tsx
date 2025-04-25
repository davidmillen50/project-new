import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LinkSection from './LinkSection';
import { describe, test, expect } from 'vitest';

describe('LinkSection Component', () => {
  test('renders all links with correct text and icons', () => {
    render(
      <BrowserRouter>
        <LinkSection />
      </BrowserRouter>
    );

    const links = [
      { text: 'Pictures', iconClass: 'bi bi-image fs-1 me-3' },
      { text: 'Poems', iconClass: 'bi bi-card-text fs-1 me-3' },
      { text: 'Pedals', iconClass: 'bi bi-boombox fs-1 me-3' },
    ];

    links.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();

      const iconElement = linkElement.closest('span')?.querySelector('i');
      expect(iconElement).toHaveClass(link.iconClass);
    });
  });

  test('renders links with correct "to" attributes', () => {
    render(
      <BrowserRouter>
        <LinkSection />
      </BrowserRouter>
    );

    const links = [
      { text: 'Pictures', to: '/pictures' },
      { text: 'Poems', to: '/poems' },
      { text: 'Pedals', to: '/pedals' },
    ];

    links.forEach((link) => {
      const linkElement = screen.getByRole('link', { name: link.text }); // Match by text content
      expect(linkElement).toHaveAttribute('href', link.to);
    });
  });
});