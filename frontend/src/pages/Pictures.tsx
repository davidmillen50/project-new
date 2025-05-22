import React from 'react';
import Details from '../components/Details/Details';
import type { Picture } from './types';

interface PicturesProps {
  props: Picture[];
}

const Pictures: React.FC<PicturesProps> = ({ props }) => {
  return (
    <main>
      <div className="row g-5">
        {props.map((picture, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div key={index}>
              <img src={picture.src} alt={picture.alt} className="img-fluid rounded border border-white shadow image-animation" />
              <Details title={picture.title} description={picture.description} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pictures;