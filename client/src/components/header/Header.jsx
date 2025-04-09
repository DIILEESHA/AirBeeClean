import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="headr_img_container">
        <div className="header_img">
          <img
            src="https://i.imgur.com/8wtxdd9.jpeg"
            alt="header_img"
            className="img_header"
          />
        </div>
        <div className="header_card">
          
          <h2 className="header_title">
            Looking for domestic cleaning company?
          </h2>
          <div className="master_card">
            <p className="header_para">
              For top-quality home cleaning in Cambridge, trust{" "}
              <b
                style={{
                  color: "#faedcd",
                  margin: "0px 2px 0px 4px",
                  textShadow: "1px 1px 1px #333",
                }}
              >
                AirBeeClean
              </b>
              . We deliver reliable, professional services, from regular cleans
              to deep and end-of-tenancy cleaning—ensuring every space is
              spotless. 🐝✨
            </p>

            <div className="star">
              <img
                src="https://i.imgur.com/GbpDMNo.png"
                alt="5stars"
                className="star_icon"
              />
              <h2 className="st">91% of clients recommend our service</h2>
            </div>

            <div className="btn_section">
              <button className="header_btn">Book your cleaner online</button>
              {/* <button className="header_btn">Enquire about our service</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
