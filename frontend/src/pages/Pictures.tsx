import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';


const Pictures: React.FC<{}> = () => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        <Card>
          <Details title="Test Application" description="I made this with a view to learning React" />
        </Card>
        <Card>
        <Details title="Test Application" description="I made this with a view to learning React" />
        </Card>
        <Card>
          <Details title="Why am I here" description="Why is anyone here? I don't know." />
        </Card>
      </div>
    </main>
  );
};

export default Pictures;