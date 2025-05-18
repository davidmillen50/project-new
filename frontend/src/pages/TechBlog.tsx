import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';
import type { BlogPost } from './types';

interface BlogProps {
  props: BlogPost[];
}

const Poems: React.FC<BlogProps> = ({ props }) => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        {props.map((post, index) => (
          <Card key={index}>
            <Details title={post.title} description={post.description} />
            <p className="text-center">{post.body}</p>
          </Card>
        ))}
        David Millen 2025
      </div>
    </main>
  );
};

export default Poems;