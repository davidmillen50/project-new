import React from 'react';
import Card from '../components/Card/Card';
import type { ProfileInfo } from './types';

interface ProfileProps {
  props: ProfileInfo;
}

const Profile: React.FC<ProfileProps> = ({ props }) => {
  return (
    <main>
      <div className="d-flex flex-column gap-5">
        <Card>
          <h1 className="typewriter">{props.name}</h1>
        </Card>
        <Card>
          <h2>{props.title}</h2>
          <div className="w-75 align-self-center fade-in-up">
            <p>{props.summaryOne}</p>
            <p>{props.summaryTwo}</p>
            <p>{props.summaryThree}</p>
            <p>{props.summaryFour}</p>
            <p>{props.summaryFive}</p>
          </div>
        </Card>
        <Card>
          <h3>Technologies</h3>
          <table className="border table">
            <thead>
              <tr className="border">
                <th className="border bg-transparent" scope="col">Languages</th>
                <th className="border bg-transparent" scope="col">Libraries</th>
                <th className="border bg-transparent" scope="col">Testing Frameworks</th>
                <th className="border bg-transparent" scope="col">Databases</th>
                <th className="border bg-transparent" scope="col">Other Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="text-center border bg-transparent">{props.languages}</td>
                <td className="text-center border bg-transparent">{props.libraries}</td>
                <td className="text-center border bg-transparent">{props.testingFrameworks}</td>
                <td className="text-center border bg-transparent">{props.databases}</td>
                <td className="text-center border bg-transparent">{props.otherTechnologies}</td>
              </tr>
            </tbody>
          </table>
        </Card>
        David Millen 2025
      </div>
    </main>
  );
};

export default Profile;