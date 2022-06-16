import React from "react";
import './App.css';
import Header from "./Header";
import { Link } from "react-router-dom";



function MainPage() {

  return (
    <div className="app">
      <Header />
      <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="" href="# "> </a>

      <Link to="/AboutMe" className="Link">
        <div className="AboutMe">
          <p className="AboutMeParagragh">About Me</p>
        </div>
      </Link>

      <Link to="/ArProjects" className="Link">
        <div className="ProjectType">
          <p className="AboutMeParagragh">AR Projects</p>
        </div>
      </Link>

      <div className="content_container3">
        <div className="icons">
          <a className="snapchat" href="https://lensstudio.snapchat.com/creator/d6TqmX7QKsLE-FU_u9UXwQ" > </a>
          <a className="linkedin" href="https://www.linkedin.com/in/enoch-ajagbe/"> </a>
          <a className="instagram" href="https://www.instagram.com/enoch.dev/"> </a>
        </div>
        <div className="Email_Design_Container">
          <p className="Email_Design">enoch.develops@gmail.com</p>
        </div>
      </div>
    </div>
  );
}


export default MainPage;

