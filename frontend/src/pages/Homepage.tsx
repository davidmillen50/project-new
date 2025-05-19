import React from 'react';
import Card from '../components/Card/Card';

const Homepage: React.FC = () => {
  return (
    <main>
      <div className="d-flex flex-column gap-5 w-100 homepage-animation">
        <Card>
          <p> I made this with TypeScript, React and Node Express </p>
        </Card>
        <Card>
           <h2>What is here?</h2>
           <p> My Profile and some other stuff </p>
        </Card>
      </div>
    </main>
  );
};

export default Homepage;