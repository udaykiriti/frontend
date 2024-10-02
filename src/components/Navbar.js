import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/user">User</Link>
      <Link to="/workshops">Workshops</Link>
    </nav>
  );
}

export default Navbar;
