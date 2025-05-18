import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';

const Homepage: React.FC = () => {
  return (
    <main>
      <div className="d-flex flex-column gap-5 w-100 homepage-animation">
        <Card>
          <Details title="Homepage" description="I made this with TypeScript, React and Node Express" />
        </Card>
        <Card>
          <Details title="What is here?" description="My Profile and some other stuff" />
        </Card>
      </div>
    </main>
  );
};

export default Homepage;