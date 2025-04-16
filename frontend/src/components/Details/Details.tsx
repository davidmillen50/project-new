import React from 'react';

interface Props {
  title: string
  description: string
}

const Details: React.FC<Props> = ({ title, description }) => {
  return (<div>
    <h1>{title}</h1>
    <p>{description.split(',').map((part, index) => (
      <React.Fragment key={index}>
        {part}
        <br />
      </React.Fragment>
    ))}</p>
  </div>
  )
};

export default Details;