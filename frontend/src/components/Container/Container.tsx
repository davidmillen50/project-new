import React from 'react';

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="container p-0 m-0">
      {children}
    </div>
  );
};

export default Container;