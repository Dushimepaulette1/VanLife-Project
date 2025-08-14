import React from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/images/User circle.png";
export function Header() {
  const focusStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? focusStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? focusStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? focusStyle : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={userIcon} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
