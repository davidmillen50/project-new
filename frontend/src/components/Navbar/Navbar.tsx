import React from 'react';
import './Navbar.css'; // Add the CSS styles here

const Navbar: React.FC = () => {
  const navItems = [
    { href: "/", icon: "bi-house", label: "Home" },
    { href: "/poems", icon: "bi-card-text", label: "Poems" },
    { href: "/pictures", icon: "bi-image", label: "Pictures" },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center fixed-top p-1">
      <nav className="navbar navbar-expand navbar-light border border-dark rounded">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link fw-bold d-flex justify-content-center align-items-baseline rounded border shadow-sm"
                  href={item.href}
                >
                  <i className={`bi ${item.icon} fs-5`} />
                  <span className="ms-2 align-items-middle">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
