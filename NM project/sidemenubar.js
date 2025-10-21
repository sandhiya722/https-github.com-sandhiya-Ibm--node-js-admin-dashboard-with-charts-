// src/components/SidebarMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ items }) => {
  return (
    <ul className="sidebar-menu">
      {items.map((it, idx) => (
        <li key={idx}>
          <Link to={it.path}>{it.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;
