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
      <div className="container">
        <div className="background">
          <div className="spacer">

            <Link to="/ARUi" className="link">
              <div className="ar_ui" >
                <video onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
                  <source src="assets\ar_intro_ui.gif" type="video/gif"></source>
                </video>   
                <h3 className="text2">AR Ui</h3>
              </div>
            </Link>
          <Link to="/ARTrip" className="link">
              <div className="bottle_flips" >
                <h3 className="text2">AR Trip</h3>
              </div>
            </Link>
            <Link to="/Unwrapped" className="link">
              <div className="unwrapped_bois">
                <h3 className="text2">BoxBois Unwrapped</h3>
              </div>
            </Link>
            <Link to="/SpookSmash" className="link">
              <div className="spook_smash">
                <h3 className="text">SpookSmash</h3>
              </div>
            </Link>
            <Link to="/BoxBois" className="link">
              <div className="box_bois">
                <h3 className="text2">BoxBois</h3>
              </div>
            </Link>
            <Link to="/HotCoCoMo" className="link">
              <div className="hot_coco">
                <h3 className="text">Hot Coco Mo</h3>
              </div>
            </Link>
            <Link to="/ShootYourShot" className="link">
              <div className="b_ball" >
                <h3 className="text2">Shoot Your Shot</h3>
              </div>
            </Link>

            {/* <div className="files">
                <h3 className="text">name</h3>
            </div> */}
          </div>

          <div className="MoreLenses">
            <a href="https://lensstudio.snapchat.com/creator/d6TqmX7QKsLE-FU_u9UXwQ"> More..</a>
          </div>
        </div>
      </div>

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

