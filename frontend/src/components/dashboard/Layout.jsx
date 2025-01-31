import React from "react";
import Sidebar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#fef7f5]">
      <Sidebar /> {/* Sidebar included on all pages */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default Layout;
