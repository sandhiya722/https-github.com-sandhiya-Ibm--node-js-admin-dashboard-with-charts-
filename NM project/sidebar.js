// src/components/Sidebar.js
import React from 'react';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Items', path: '/items' },
    { label: 'Reports', path: '/reports' },
    { label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <SidebarMenu items={menuItems} />
    </aside>
  );
};

export default Sidebar;
