import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders the Navbar component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders children passed to it', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});