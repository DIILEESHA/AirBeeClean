import React from "react";
import "./footer.css";
import { IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foos">
        <div className="footer_top_line">
          <img
            src="https://i.imgur.com/kyW2rwp.png"
            alt="logo"
            className="footer_imgyu"
          />
        </div>

        <div className="footer_grid">
          <div className="footer_sub_grid">
            <h2 className="expert">Our experts are available 24/7:</h2>
            {/* <div className="line"></div> */}
            <ul className="footer_ul">
              <li className="footer_li">
                <a
                  className="a"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  href="mailto:airbeeclean@gmail.com"
                >
                  <IoMail />
                  airbeeclean@gmail.com
                </a>
              </li>

              <li className="footer_li">
                <a
                  className="a"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  href="tel:07958025970"
                >
                  <BsTelephoneFill />
                  07958025970
                </a>
              </li>

              <li className="footer_li">
                <IoMdHome />
                Cambridge, UK
              </li>
            </ul>
          </div>
          <div className="footer_sub_grid">
            <h2 className="expert">Services</h2>

            <ul className="footer_ul">
              <Link className="a" to="/service/regular-home-cleaning">
                <li className="footer_li">Regular Home Cleaning</li>
              </Link>
              <Link className="a" to="/service/deep-cleaning">
                <li className="footer_li">Deep Cleaning Service</li>
              </Link>
              <Link className="a" to="/service/airbnb-cleaning">
                <li className="footer_li">
                  Airbnb & Short-Stay Cleaning Service
                </li>
              </Link>
              <Link className="a" to="/service/end-of-tenancy-cleaning">
                <li className="footer_li"> End of Tenancy Cleaning Service</li>
              </Link>
              <Link className="a" to="/service/office-cleaning">
                <li className="footer_li">
                  {" "}
                  Office & Commercial Cleaning Service
                </li>
              </Link>
            </ul>
          </div>{" "}
          <div className="footer_sub_grid">
            <h2 className="expert">Quick Links</h2>

            <ul className="footer_ul">
              <Link className="a" to="/">
                <li className="footer_li">Home</li>
              </Link>

              <Link className="a" to="/about">
                <li className="footer_li">About Us</li>
              </Link>

              <Link className="a" to="/pricing">
                <li className="footer_li">Pricing</li>
              </Link>

              <Link className="a" to="/service/regular-home-cleaning">
                <li className="footer_li">Services</li>
              </Link>

              <Link className="a" to="/contact">
                <li className="footer_li">Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="dddd">
        Copyright ©2025 AirBee Clean®. All Rights Reserved.
      </h2>
    </div>
  );
};

export default Footer;
