import React from 'react';
import './Sidebar.css'; // Make sure to add this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul className="sidebar-list">
          <li>
            <button className="sidebar-button">Home</button>
          </li>
          <li>
            <button className="sidebar-button">Add My Product</button>
          </li>
          <li>
            <button className="sidebar-button">Inventory</button>
          </li>
          <li>
            <button className="sidebar-button">Transactions</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
