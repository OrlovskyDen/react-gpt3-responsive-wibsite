import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#what">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="wl__navbar">
      <div className="wl__navbar-links">
        <div className="wl__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="wl__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="wl__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="wl__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="wl__navbar-menu_container scale-up-center">
            <div className="wl__navbar-menu_container-links">
              <Menu />
              <div className="wl__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
