import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import TechBlog from './TechBlog';

describe('Tech blog page', () => {
    test('renders all poems with their titles and descriptions', () => {
        const topics = [
            { title: "Promises", description: "Some info on promises" },
            { title: "Asynchronous JavaScript", description: "A summary of async JavaScript" },
            { title: "Higher Order Functions", description: "Some info on HOFs" },
            { title: "Pure Functions", description: "Some info on pure functions" },
            { title: "Hoisting", description: "Some info on hoisting" },
            { title: "Let vs Const vs Var", description: "Some info on variables" },
        ];
        render(<TechBlog />);

        topics.forEach((topic) => {
            expect(screen.getByText(topic.title)).toBeInTheDocument();
            expect(screen.getByText(topic.description)).toBeInTheDocument();
        });
    });
})