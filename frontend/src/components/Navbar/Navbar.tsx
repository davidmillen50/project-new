import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { href: "/", icon: "bi-house", label: "Home" },
    { href: "/profile", icon: "bi-person", label: "Profile" },
    { href: "/poems", icon: "bi-card-text", label: "Poems" },
    { href: "/pictures", icon: "bi-image", label: "Pictures" },
    { href: "/tech-blog", icon: "bi-journal-text", label: "Tech Blog" },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center fixed-top p-1">
      <nav className="navbar navbar-expand navbar-light border border-dark rounded">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navItems.map((item, index) => (
              <li className="px-2 nav-item" key={index}>
                <a
                  className="nav-link fw-bold d-flex justify-content-center align-items-baseline rounded border border-dark shadow-sm"
                  href={item.href}
                >
                  <i className={`bi ${item.icon} fs-1 fs-md-3`} />
                  <span className="ms-2 align-self-center text-nowrap d-none d-md-inline">{item.label}</span>
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
