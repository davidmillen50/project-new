import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { describe, test, expect } from 'vitest';

describe('Navbar Component', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders all navigation items', () => {
    render(<Navbar />);
    const navItems = [
      { href: "/", label: "Home" },
      { href: "/poems", label: "Poems" },
      { href: "/pictures", label: "Pictures" },
    ];

    navItems.forEach((item) => {
      const linkElement = screen.getByRole('link', { name: item.label });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.href);
    });
  });

  test('renders icons for each navigation item', () => {
    render(<Navbar />);
    const icons = ['bi-house', 'bi-card-text', 'bi-image'];

    icons.forEach((icon) => {
      const iconElement = document.querySelector(`.${icon}`);
      expect(iconElement).toBeInTheDocument();
    });
  });
});