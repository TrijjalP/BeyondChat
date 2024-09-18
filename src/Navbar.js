import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For the globe icon

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Hamburger Menu */}
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Title */}
          <h1 className="navbar-brand mb-0">CHATBOT Mind Map</h1>
  
          {/* Globe Icon with Dropdown */}
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-globe"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#region1">Region 1</a></li>
              <li><a className="dropdown-item" href="#region2">Region 2</a></li>
              <li><a className="dropdown-item" href="#region3">Region 3</a></li>
              <li><a className="dropdown-item" href="#region4">Region 4</a></li>
              <li><a className="dropdown-item" href="#region5">Region 5</a></li>
              <li><a className="dropdown-item" href="#region6">Region 6</a></li>
            </ul>
          </div>
        </div>
  
        {/* Collapsible Menu Items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
              
            <li className="nav-item">
              <a className="nav-link" href="#item1"><i class="bi bi-chat"></i>&nbsp;Explore Chats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#item2"><i class="bi bi-building"></i>&nbsp;Switch Organization</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#item3"><i class="bi bi-buildings"></i>&nbsp;Business Leads</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#item4"><i className="bi bi-map"></i>&nbsp;View Mind Map</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#item5"><i className="bi bi-people"></i>&nbsp;Manage Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#item6"><i className="bi bi-robot"></i>&nbsp;Configure Chatbot</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  