import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';

const Homepage: React.FC = () => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        <Card>
          <Details title="Homepage" description="I made this with a view to learning React" />
        </Card>
        <Card>
          <Details title="What is here?" description="Some poems some photos.  Maybe some other stuff." />
        </Card>
      </div>
    </main>
  );
};

export default Homepage;