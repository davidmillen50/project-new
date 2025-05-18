import React from 'react';
import Card from '../components/Card/Card';
import type { ProfileInfo } from './types';

interface ProfileProps {
  props: ProfileInfo;
}

const TechBlog: React.FC<ProfileProps> = ({ props }) => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        <Card>
          <h1 className="typewriter">{props.name}</h1>
          <h2>{props.title}</h2>
          <ul className="w-75 align-self-center fade-in-up">
            <li>{props.summaryOne}</li>
            <li>{props.summaryTwo}</li>
            <li>{props.summaryThree}</li>
            <li>{props.summaryFour}</li>
          </ul>
          <h3>Technologies</h3>
          <h4>Languages</h4>
          <p className="text-center fade-in-up">{props.languages}</p>
          <h4>libraries</h4>
          <p className="text-center fade-in-up">{props.libraries}</p>
          <h4>Testing Frameworks</h4>
          <p className="text-center fade-in-up">{props.testingFrameworks}</p>
          <h4>Databases</h4>
          <p className="text-center fade-in-up">{props.databases}</p>
          <h4>Other Technologies</h4>
          <p className="text-center fade-in-up">{props.otherTechnologies}</p>
        </Card>
        David Millen 2025
      </div>
    </main>
  );
};

export default TechBlog;