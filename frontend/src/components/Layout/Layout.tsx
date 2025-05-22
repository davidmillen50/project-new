import React from 'react';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container p-0 m-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;