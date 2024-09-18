import React from 'react';
import './Tabs.css'; // External CSS for styling tabs

function Tabs() {
  return (
    <div className="tabs-container">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link1 tab-1" href="#">Add Data</a>
        </li>
        <li className="nav-item">
          <a className="nav-link1 tab-2" href="#">Data Training Statius</a>
        </li>
        <li className="nav-item">
          <a className="nav-link1 tab-3" href="#">Truths</a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
