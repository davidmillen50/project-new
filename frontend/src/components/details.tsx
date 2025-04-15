import React from 'react';

interface Props {
  description: string
}

const Details: React.FC<Props> = ({ description }) => {
  return (<div>
    <h1>Description</h1>
    <p>{description}</p>
  </div>
  )
};

export default Details;