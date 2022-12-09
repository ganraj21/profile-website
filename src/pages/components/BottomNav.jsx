import React from "react";
import "./BottomNav.css";
import SocialMediaLinks from "./SocialMediaLinks";
import my_navbar_data from "../assets/NavData";
import { HashLink } from "react-router-hash-link";
import personal_info_data from "../assets/AboutIn";

function BottomNav() {
  return (
    <>
      <div className="bottom_nav_container">
        <div className="bottom_nav_section">
          <div className="bot_nav_left">
            <div className="bot_left_header">
              <h3>Ganraj21 | Portfolio</h3>
            </div>
            <div className="bot_middle_info">
              <p className="basic_info">
                Need any help with your projects? contact me at the places
                mentioned below. I will try to get back to you as fast as I can.
              </p>
              <p className="f_info">Follow me for more such Projects.</p>
            </div>
            <div className="bot_btn">
              <button className="bot_git_btn" target="_blank">
                <a href="https://github.com/ganraj21">
                  <span> ⭐</span> Star Me on Github
                </a>
              </button>
            </div>
          </div>
          <div className="bot_nav_middle">
            <div className="bot_middle_header">
              <h3>Quick Links</h3>
            </div>
            <div className="bot_nav">
              {my_navbar_data.map((data, index) => {
                return (
                  <>
                    <HashLink key={index} to={data.nav_link}>
                      <i class="fa-solid fa-angles-right"></i>
                      <p> {data.navbar_name}</p>
                    </HashLink>
                  </>
                );
              })}
            </div>
          </div>
          <div className="bot_nav_right">
            <div className="bot_right_header">
              <h3>Contact Info</h3>
            </div>
            <div className="bot_contact_info">
              {personal_info_data.map((data, index) => {
                return (
                  <div key={index}>
                    {data.section_two.map((e, index) => {
                      return <p key={index}>{e.data_value}</p>;
                    })}
                  </div>
                );
              })}
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;