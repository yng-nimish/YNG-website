// Navbar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "About us",
    },
    {
      text: "Partners",
    },
    {
      text: "Technical Papers",
    },
    {
      text: "Applications",
    },
    {
      text: "Book",
    },
    {
      text: "Contact Us",
    },
    {
      text: "Login/Register",
    },
    {
      text: "Buy a Token",
    },
  ];

  return (
    <nav className="nav">
      {/*   <Link to="/" className="title">
        Website{" "}
      </Link>
      */}
      <div
        className="menu"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="navbar-links-container ">
        <ul className={openMenu ? "open" : ""}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/partners">partners</NavLink>
          </li>
          <li>
            <NavLink to="/technical_papers">Technical Papers</NavLink>
          </li>
          <li>
            <NavLink to="/applications">Applications</NavLink>
          </li>
          <li>
            <NavLink to="/book">Book</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login/Register</NavLink>
          </li>
          <li>
            <Link to="/purchase">
              <button className="primary-button">
                {"  "}
                <BsCart2 className="navbar-cart-icon" /> Get your SUN
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
