import React from 'react';
import Details from '../components/Details/Details';
import type { BlogPost } from './types';

interface BlogProps {
  props: BlogPost[];
}

const TechBlog: React.FC<BlogProps> = ({ props }) => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        {props.map((post, index) => (
          <div className="p-3 text-dark" key={index}>
            <Details title={post.title} description={post.description} />
            <p className="w-50 mx-auto">{post.body}</p>
          </div>
        ))}
        David Millen 2025
      </div>
    </main>
  );
};

export default TechBlog;