import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/tech-blog", label: "Tech Blog" },
  ];

  return (
    <div className="d-flex justify-content-end fixed-top pe-3 bg-white">
      <nav className="navbar-expand navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navItems.map((item, index) => (
              <li className="px-2 nav-item" key={index}>
                <a
                  className="nav-link fw-bold d-flex justify-content-center align-items-baseline underline"
                  href={item.href}
                >
                  <span className="ms-2 align-content-middle text-nowrap d-none d-md-inline">{item.label}</span>
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
