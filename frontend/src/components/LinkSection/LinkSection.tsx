import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    to: '/pictures',
    iconClass: 'bi bi-image fs-1 me-3',
    text: 'Pictures',
  },
  {
    to: '/poems',
    iconClass: 'bi bi-card-text fs-1 me-3',
    text: 'Poems',
  },
  {
    to: '/pedals',
    iconClass: 'bi bi-boombox fs-1 me-3',
    text: 'Pedals',
  },
];

const LinkSection: React.FC = () => {
  return (
    <div className="d-flex flex-column gap-3">
      {links.map((link, index) => (
        <Link
          key={index}
          className="shadow p-3 mb-5 bg-purple rounded link border border-dark"
          to={link.to}
        >
          <span className="d-flex justify-content-center align-items-center">
            <i className={link.iconClass}></i>
            <h1>{link.text}</h1>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default LinkSection;