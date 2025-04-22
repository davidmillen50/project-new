import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';
import Dragonfly from '../assets/dragonfly.jpg';
import Sea from '../assets/sea.jpg';
import Shadow from '../assets/shadow.jpg';


const Pictures: React.FC<{}> = () => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        {[
          { src: Dragonfly, alt: "Close-up of a dragonfly", title: "A dragonfly", description: "This close-up captures the intricate details of a dragonfly's wings and body." },
          { src: Sea, alt: "View of the sea with cliffs", title: "Cliffs and Sea", description: "A breathtaking view of the sea with rugged cliffs under a clear blue sky." },
          { src: Shadow, alt: "Shadow on grass", title: "Shadow on grass", description: "A shadow cast on lush green grass, evoking a sense of mystery and calm." },
        ].map((picture, index) => (
          <Card key={index}>
            <img src={picture.src} alt={picture.alt} className="img-fluid rounded border border-white shadow-sm" />
            <Details title={picture.title} description={picture.description} />
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Pictures;