import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import TechBlog from './TechBlog';
import { techBlogs } from './content';

describe('Tech blog page', () => {
    test('renders all poems with their titles and descriptions', () => {
        render(<TechBlog props={techBlogs} />);

        techBlogs.forEach((topic) => {
            expect(screen.getByText(topic.title)).toBeInTheDocument();
            expect(screen.getByText(topic.description)).toBeInTheDocument();
        });
    });
})