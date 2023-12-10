import React, { useEffect } from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can change the duration as per your requirement
    });
  }, []);

  return (
    <>
      <div id="contact" className="contact" data-aos="fade-up">
        <div className="contact_box" data-aos="fade-up">
          <div className="box1" data-aos="fade-up">
            <h1 className="query" data-aos="fade-up">
              Send us a message
            </h1>
            <form
              action="https://formsubmit.co/hanish.tharwani2021@vitbhopal.ac.in"
              method="POST"
              className="cards"
              data-aos="fade-up"
            >
              <div className="fly" data-aos="fade-up">
                <label className="head_name" data-aos="fade-up">
                  Name
                </label>
                <input type="text" name="name" className="inputs" />
              </div>

              <div className="fly" data-aos="fade-up">
                <label className="head_name" data-aos="fade-up">
                  Email
                </label>
                <input type="email" name="email" className="inputs" />
              </div>

              <div className="fly" data-aos="fade-up">
                <label className="head_name" data-aos="fade-up">
                  Message
                </label>
                <textarea
                  name="Message"
                  id=""
                  cols="30"
                  rows="10"
                  className="text"
                  data-aos="fade-up"
                ></textarea>
              </div>
              <button className="send" data-aos="fade-up">
                Send Message
              </button>
            </form>
          </div>
          <div className="box2" data-aos="fade-up">
            <h1 className="contact_us" data-aos="fade-up">
              Contact us
            </h1>
            <p className="we" data-aos="fade-up">
              We're open for any suggestion or just to have a chat
            </p>

            <div className="touch" data-aos="fade-up">
              <div className="cat1" data-aos="fade-up">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <div className="add">
                  <h1 className="address" data-aos="fade-up">
                    Address:
                  </h1>
                  <p className="west" data-aos="fade-up">
                    Sector 11, Udaipur 313002, Rajasthan India
                  </p>
                </div>
              </div>
              <div className="cat1" data-aos="fade-up">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="add">
                  <h1 className="address" data-aos="fade-up">
                    Phone:
                  </h1>
                  <p className="west" data-aos="fade-up">
                    +91 9024308901
                  </p>
                </div>
              </div>
              <div className="cat1" data-aos="fade-up">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div className="add">
                  <h1 className="address" data-aos="fade-up">
                    Email:
                  </h1>
                  <p className="west" data-aos="fade-up">
                    hanishtharwani283@gmail.com
                  </p>
                </div>
              </div>
              <div className="cat1" data-aos="fade-up">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                <div className="add">
                  <h1 className="address" data-aos="fade-up">
                    Website:
                  </h1>
                  <Link
                    to="https://my-portfolio-website-three-delta.vercel.app/"
                    className="west"
                    data-aos="fade-up"
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

export default Contact;
