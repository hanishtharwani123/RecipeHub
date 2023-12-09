import React from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const contact = () => {
  return (
    <>
      <div id="contact" className="contact">
        <div className="contact_box">
          <div className="box1">
            <h1 className="query">Send us a message</h1>
            <form
              action="https://formsubmit.co/hanish.tharwani2021@vitbhopal.ac.in"
              method="POST"
              className="cards"
            >
              <div className="fly">
                <label className="head_name">Name</label>
                <input type="text" name="name" className="inputs" />
              </div>

              <div className="fly">
                <label className="head_name">Email</label>
                <input type="email" name="email" className="inputs" />
              </div>

              <div className="fly">
                <label className="head_name">Message</label>
                <textarea
                  name="Message"
                  id=""
                  cols="30"
                  rows="10"
                  className="text"
                ></textarea>
              </div>
              <button className="send">Send Message</button>
            </form>
          </div>
          <div className="box2">
            <h1 className="contact_us">Contact us </h1>
            <p className="we">
              We're open for any suggestion or just to have a chat
            </p>

            <div className="touch">
              <div className="cat1">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <div className="add">
                  <h1 className="address">Address:</h1>
                  <p className="west">
                    Sector 11, Udaipur 313002, Rajasthan India
                  </p>
                </div>
              </div>
              <div className="cat1">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="add">
                  <h1 className="address">Phone:</h1>
                  <p className="west">+91 9024308901</p>
                </div>
              </div>
              <div className="cat1">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div className="add">
                  <h1 className="address">Email:</h1>
                  <p className="west">hanishtharwani283@gmail.com</p>
                </div>
              </div>
              <div className="cat1">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                <div className="add">
                  <h1 className="address">Website:</h1>
                  <Link
                    href="https://my-portfolio-website-three-delta.vercel.app/"
                    className="west"
                  >
                    My Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
