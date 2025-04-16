import React from 'react';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-100'>
        <Navbar />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Layout;