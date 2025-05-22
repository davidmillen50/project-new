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
      { href: "/tech-blog", label: "Tech Blog" },
    ];

    navItems.forEach((item) => {
      const linkElement = screen.getByRole('link', { name: item.label });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.href);
    });
  });
});