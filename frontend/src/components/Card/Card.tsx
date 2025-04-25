import React from 'react';

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children}) => {
  return (
    <article className="card">
      {children}
    </article>
  );
};

export default Card;