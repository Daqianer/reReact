import React from "react";
// 无状态功能性组件
const Navbar = ({ countersNum }) => {
  console.log("Nav - rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary">{countersNum}</span>
      </span>
    </nav>
  );
};

export default Navbar;
