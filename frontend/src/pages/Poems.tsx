import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';
import type { Poem } from './types';

interface PoemProps {
  props: Poem[];
}

const Poems: React.FC<PoemProps> = ({ props }) => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        {props.map((poem, index) => (
          <Card key={index}>
            <Details title={poem.title} description={poem.description} />
          </Card>
        ))}
        Copyright David Millen 2025
      </div>
    </main>
  );
};

export default Poems;