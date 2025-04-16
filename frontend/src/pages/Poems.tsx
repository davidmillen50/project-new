import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';

const Poems: React.FC<{}> = () => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        <Card>
          <Details title="Poems" description="Some poems I have written" />
        </Card>
        <Card>
          <Details title="The Beetle" description="The beetle wanders slowly past, inspecting leaves lying in the low grass, iridescent shell shines in the sun, the beetle isn't one to run, on an instant it releases its wings, to see what nature elsewhere brings, it zips off into the air and out of sight, the next adventure is only a short flight." />
        </Card>
        <Card>
          <Details title="Sunlight" description="A morning's darkness broken by the distant star's power, onto the cold earth its rays shower, plants lean towards its light and warmth, gradually moving into its path, the heat is welcome and gladly received, and fresh air on this dewy morning breathed." />
        </Card>
        <Card>
          <Details title="Why am I here" description="Why is anyone here?,  There is not a purpose to existence I fear, how are we meant to our lives steer, hold onto what to you is dear, and don't be afraid to shed a tear, what we're meant to do in life is not clear." />
        </Card>
        Copyright David Millen 2025
      </div>
    </main>
  );
};

export default Poems;