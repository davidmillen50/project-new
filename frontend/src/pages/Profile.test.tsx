import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import type { ProfileInfo } from './types';
import { vi, describe, it, expect } from 'vitest';

// Mock Card component
vi.mock('../components/Card/Card', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="card">{children}</div>,
}));

const mockProfile: ProfileInfo = {
  name: 'John Doe',
  title: 'Software Engineer',
  summaryOne: 'Experienced in frontend development.',
  summaryTwo: 'Skilled in React and TypeScript.',
  summaryThree: 'Enjoys problem solving.',
  summaryFour: 'Team player and quick learner.',
  summaryFive: 'Passionate about technology.',
  languages: 'JavaScript, TypeScript, Python',
  libraries: 'React, Redux, Zustand',
  testingFrameworks: 'Vitest, Jest, Testing Library',
  databases: 'PostgreSQL, MongoDB',
  otherTechnologies: 'Docker, AWS, Git',
};

describe('Profile', () => {
  it('renders the profile name and title', () => {
    render(<Profile props={mockProfile} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(mockProfile.name);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(mockProfile.title);
  });

  it('renders all summary list items', () => {
    render(<Profile props={mockProfile} />);
    expect(screen.getByText(mockProfile.summaryOne)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.summaryTwo)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.summaryThree)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.summaryFour)).toBeInTheDocument();
  });

  it('renders all technology sections', () => {
    render(<Profile props={mockProfile} />);
    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText(mockProfile.languages)).toBeInTheDocument();
    expect(screen.getByText('Libraries')).toBeInTheDocument();
    expect(screen.getByText(mockProfile.libraries)).toBeInTheDocument();
    expect(screen.getByText('Testing Frameworks')).toBeInTheDocument();
    expect(screen.getByText(mockProfile.testingFrameworks)).toBeInTheDocument();
    expect(screen.getByText('Databases')).toBeInTheDocument();
    expect(screen.getByText(mockProfile.databases)).toBeInTheDocument();
    expect(screen.getByText('Other Technologies')).toBeInTheDocument();
    expect(screen.getByText(mockProfile.otherTechnologies)).toBeInTheDocument();
  });

  it('renders the footer text', () => {
    render(<Profile props={mockProfile} />);
    expect(screen.getByText(/David Millen 2025/)).toBeInTheDocument();
  });
});