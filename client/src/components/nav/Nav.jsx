import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav">
      <div className="nav_left">
        <div className="mobile_logo">
          <img
            src="https://i.imgur.com/kyW2rwp.png"
            alt="airbee_logo"
            className="nav_logo cmn"
          />
        </div>

        <ul className="nav_ul">
          <li className="nav_li">
            <Link className="a" to="/">
              Home
            </Link>
          </li>
          <li className="nav_li">
            <Link className="a" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav_li">
            <Link className="a" to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="nav_li">
            <Link className="a" to="/service/regular-home-cleaning">
              Services
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav_left">
        <img
          src="https://i.imgur.com/kyW2rwp.png"
          alt="airbee_logo"
          className="nav_logo jl"
        />
      </div>

      <div className="nav_right">
        <ul className="nav_ul">
          <li className="nav_li">+122345647</li>
          <li className="nav_li jkob">
            <Link className="a" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hamburger_menu" onClick={toggleMenu}>
          {menuOpen ? (
            <IoMdClose className="uu" />
          ) : (
            <IoIosMenu className="uu" />
          )}
        </div>

        <div className={`nav_mobile_menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <div className="closer">
              <IoMdClose className="uu" onClick={toggleMenu} />
            </div>
            <li className="nav_mobile_li">
              <Link to="/" className="a" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link to="/about" className="a" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link
                to="/service/regular-home-cleaning"
                className="a"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link to="/pricing" className="a" onClick={closeMenu}>
                Pricing
              </Link>
            </li>
            <li className="nav_mobile_li">
              <Link to="/contact" className="a" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
