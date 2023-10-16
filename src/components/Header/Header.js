import React from 'react';
import './Header.css';
import { Link} from 'react-scroll'; // Import the necessary components

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-name">
          <Link
            to="about" // The target element's name
            smooth={true} // Enable smooth scrolling
            duration={500} // Set the duration of the scroll animation
            offset={-80} // Adjust the offset to account for the fixed header
          >
            Jaichandra
          </Link>
        </h1>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <Link
            to="about" // Link to the "About" section
            smooth={true}
            duration={500}
            offset={-80}
            className="header-link"
          >
            About
          </Link>
          <Link
            to="projects" // Link to the "Projects" section
            smooth={true}
            duration={500}
            offset={-80}
            className="header-link"
          >
            Projects
          </Link>
          <Link
            to="contact" // Link to the "Contact" section
            smooth={true}
            duration={500}
            offset={-80}
            className="header-link"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
