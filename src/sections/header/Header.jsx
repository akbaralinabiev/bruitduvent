import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./header.css";
import "./style.scss";
import "./custom.js";
import { video } from "./import";

const Menu = () => {
  return (
    <>
      <div className="nav-links-mobile">
            <ul>
              <li>
                <a href="#home">home</a>
                <a href="#explore">explore</a>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
    </>
  );
};

const Home = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div id="home">
      <div className="wrapper">
        <div className="navbar">
          <div className="logo">
            <a href="#home"><h2>bruitduvent</h2></a>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#home">home</a>
                <a href="#explore">explore</a>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-menu"> 
            {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
          </div>
        </div>
        
        
        <div className="container">
          <div className="center-content">
          <video autoPlay loop muted src={video}></video>
            <div className="dark-layer"></div>
            <div className="story">
              <h1 class="mast__title mast__text js-spanize">The Artistic Journey of Duven Georgia Anasko</h1> 
              <hr class="sep"/>
              <p class="mast__text js-spanize">
              In the heart of a bustling city,
              where the rhythm of life is fast-paced and inspiring, 
              resides a visionary fashion designer, Duven.  
              </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

