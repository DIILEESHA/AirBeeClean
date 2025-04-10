import React from "react";
import "./contact.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | AirBeeClean – Cambridge Cleaning Services</title>
        <meta
          name="description"
          content="Get in touch with AirBeeClean for professional and eco-friendly cleaning services in Cambridge. Fill out our quick contact form to book a service."
        />
        <meta
          name="keywords"
          content="Cambridge cleaning, contact AirBeeClean, cleaning services, eco-friendly cleaners, booking cleaning Cambridge"
        />
        <meta name="author" content="AirBeeClean Team" />
        {/* <link rel="canonical" href="https://your-website-url.com/contact" /> */}
      </Helmet>
      <div className="mahos dawos">
        <h2 className="header_titles mahada">Contact AirBeeClean</h2>
      </div>
      <div className="lokesh">
        <h2 className="loka">Let's Get Started</h2>
        <div className="line"></div>
        <p className="loke_p">
          Let us know what you need—we’ll take care of the rest! Fill out the
          form below to schedule your cleaning.
        </p>
        <form action="" className="contact_form">
          <h2 className="contact">Contact Information</h2>
          <div className="line"></div>

          <div className="form_grid">
            <div className="form_sub">
              <input
                type="text"
                className="form_input"
                placeholder="First Name:"
              />
            </div>
            <div className="form_sub">
              <input
                type="text"
                className="form_input"
                placeholder="Last Name:"
              />
            </div>

            <div className="form_sub one">
              <input type="text" className="form_input" placeholder="Address" />
            </div>

            <div className="form_sub one">
              <input
                type="tel"
                className="form_input"
                placeholder="Phone Number"
              />
            </div>

            <div className="form_sub one">
              <select className="form_input" defaultValue="">
                <option value="" disabled>
                  Select Type of Service
                </option>
                <option value="regular">Regular Home Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="airbnb">Airbnb & Short-Stay Cleaning</option>
                <option value="end">End of Tenancy Cleaning</option>
                <option value="office">Office & Commercial Cleaning</option>
              </select>
            </div>

            <div className="form_sub one">
              <input
                type="datetime-local"
                className="form_input"
                placeholder="Preferred Date & Time"
              />
            </div>

            <div className="form_sub one">
              <textarea
                className="form_input"
                rows="4"
                placeholder="Special Notes (e.g. pets, parking, specific requests)"
              ></textarea>
              <div className="rty">
                <button className="cosa">confirm Info</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
