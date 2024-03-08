import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-text">
            THE <span className="navbar-text-span">PRODUCT</span> PLATFORM
          </div>

          <div className="navbar-navigation">
            <div className="nav-box">
              <span className="nav-box-text">Learn</span>{" "}
              <span>
                {" "}
                <img
                  className="nav-arrow-image"
                  src="/images/arrow-down.png"
                  alt=""
                />{" "}
              </span>{" "}
            </div>
            <div className="nav-box">
              {" "}
              <span className="nav-box-text">Practice</span>{" "}
              <span>
                <img
                  className="nav-arrow-image"
                  src="/images/arrow-down.png"
                  alt=""
                />{" "}
              </span>
            </div>

            <div className="nav-box mob-nav">
              <img
                className="nav-profile-image"
                src="/images/nav-profile.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
