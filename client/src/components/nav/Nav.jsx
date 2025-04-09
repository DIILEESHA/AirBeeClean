import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_left">
        {/* <img
          src="https://i.imgur.com/kyW2rwp.png"
          alt="airbee_logo"
          className="nav_logo"
        /> */}

        <ul className="nav_ul">
          <li className="nav_li">
            <Link className="a" to="/">
              Home
            </Link>
          </li>
          <Link className="a" to="/about">
            <li className="nav_li">About Us</li>
          </Link>
          <Link to="/pricing" className="a">
            <li className="nav_li">Prcing</li>
          </Link>
          <Link to="/service/regular-home-cleaning" className="a">
            <li className="nav_li">Services</li>
          </Link>
        </ul>
      </div>
      <div className="nav_left">
        <img
          src="https://i.imgur.com/kyW2rwp.png"
          alt="airbee_logo"
          className="nav_logo"
        />
      </div>
      <div className="nav_left">
        <ul className="nav_ul">
          <li className="nav_li">+122345647</li>
          <Link className="a" to="/contact">
            <li className="nav_li jkob">Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
