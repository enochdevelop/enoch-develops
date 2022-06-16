import React from "react";
import './App.css';
import { Link } from "react-router-dom";

import HomeButtonLink from "./HomeButton";

function ArProjects() {

    return (
        <div className="projectapp">
            <HomeButtonLink />
            <div className="headerspace">
            </div>
            
            {/* <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="" href="# "> </a> */}

            <Link to="/AboutMe" className="Link">
                <div className="AboutMe">
                    <p className="AboutMeParagragh">About Me</p>
                </div>
            </Link>
            <div className="container">
                <div className="background">
                    <div className="spacer">


                        <div className="cannon">
                            <h3 className="text2">SnowCannon</h3>
                        </div>

                        <div className="aot" >
                            <h3 className="text2">AOT</h3>
                        </div>

                        <div className="ar_ui" >
                            <h3 className="text2">AR Ui</h3>
                        </div>

                        <div className="rumble">
                            <h3 className="text2">Rumble</h3>
                        </div>

                        <div className="bottle_flips" >
                            <h3 className="text2">AR Trip</h3>
                        </div>

                        <div className="transalv">
                            <h3 className="text2">Transalvania</h3>
                        </div>

                        <div className="unwrapped_bois">
                            <h3 className="text2">BoxBois Unwrapped</h3>
                        </div>


                        <div className="spook_smash">
                            <h3 className="text">SpookSmash</h3>
                        </div>


                        <div className="box_bois">
                            <h3 className="text2">BoxBois</h3>
                        </div>

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


export default ArProjects;

