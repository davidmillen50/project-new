import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';
import type { Picture } from './types';

interface PicturesProps {
  props: Picture[];
}

const Pictures: React.FC<PicturesProps> = ({ props }) => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        {props.map((picture, index) => (
          <Card key={index}>
            <img src={picture.src} alt={picture.alt} className="img-fluid rounded border border-white shadow animation" />
            <Details title={picture.title} description={picture.description} />
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Pictures;