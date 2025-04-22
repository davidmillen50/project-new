import React from 'react';
import './Navbar.css'; // Add the CSS styles here

const Navbar: React.FC<{}> = () => {
  return (
    <div className="d-flex justify-content-center align-items-center fixed-top p-1">
      <nav className="navbar navbar-expand navbar-light border border-dark rounded">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link fw-bold d-flex justify-content-center align-items-baseline rounded border shadow-sm" href="/">
                <i className="bi bi-house fs-5" />
                <span className="ms-2 align-items-middle">Home</span>
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link fw-bold d-flex justify-content-center align-items-baseline rounded border shadow-sm" href="/poems">
                <i className="bi bi-card-text fs-5" />
                <span className="ms-2">Poems</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold d-flex justify-content-center align-items-baseline rounded border shadow-sm" href="/pictures">
                <i className="bi bi-image fs-5" />
                <span className="ms-2">Pictures</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;