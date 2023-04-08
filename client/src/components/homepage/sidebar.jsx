// Sidebar.js

import React from 'react';
import './sidebar.css'; // Import the accompanying CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <ul className="sidebar-menu">
                <li className="sidebar-item">Home</li>
                <li className="sidebar-item">About</li>
                <li className="sidebar-item">Contact</li>
                <li className="sidebar-item">Blog</li>
            </ul>
        </div>
    );
};

export default Sidebar;
