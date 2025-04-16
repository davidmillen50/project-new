import React from 'react';
import { Link } from 'react-router';

const LinkSection: React.FC<{}> = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <Link className="shadow p-3 mb-5 bg-sand rounded link" to="/pictures">
        <span className="d-flex justify-content-center align-items-center">
          <i className="bi bi-image fs-1 me-3"></i>
          <h1>Pictures</h1>
        </span>
      </Link>
      <Link className="shadow p-3 mb-5 bg-sand rounded link" to="/poems">
        <span className="d-flex justify-content-center align-items-center">
          <i className="bi bi-card-text fs-1 me-3"></i>
          <h1>Poems</h1>
        </span></Link>
      <Link className="shadow p-3 mb-5 bg-sand rounded link" to="/pedals">
        <span className="d-flex justify-content-center align-items-center">
          <i className="bi bi-boombox fs-1 me-3"></i>
          <h1>Pedals</h1>
        </span>
      </Link>
    </div >
  );
};

export default LinkSection;