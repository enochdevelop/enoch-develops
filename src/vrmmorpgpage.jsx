import React from 'react';
import './Projects.css';
import './App.css';
import './Projectinformation.css';
import './bootstrap.min.css';
import './fixedheader.css';
import './popup.css';
import ArrowShot from "./assets/Pngs/arrow_shot.mp4";
import ArrowBarrage from "./assets/Pngs/arrow_barrage.mp4";
import Weapons from "./assets/Pngs/weapons.mp4";
import Contact from "./ContactMe";
import BackToProjects from './BackToProjects';
import AnimatedPage from './AnimatedPage';
import { Container } from 'react-bootstrap'

function VRMMORPGPage() {

    return (
        <AnimatedPage>
        <div className="project_information_app">
            <BackToProjects />
            <div className='header_vrmmorpg_bk_image'>
            </div>
            <div className='header_bk'>

                <div className='description_container'>
                    <div className='divider'>
                        <div className='center_divider'>
                            <div className='overview'>
                                <h3> Overview</h3>
                                <p className='section_text'>Designing a fantasy-based world where players will be able to be fully immersed while enjoying the wonders it has to offer. Players will be able to explore new worlds, discover new weapons, and learn new skills along their journey.
                                <br /> <br /> The main focus of this project is to showcase the capabilities of VR due to the immersive skill set activation techniques and gestures.    These techniques and gestures will be implemented in a way that feels as natural as possible for players to activate.
                                <br /> <br /> For example, axe throwing in real life, the process for throwing an axe is to just grab the axe, follow the proper posture, and throw. 
                                <br /> <br />In Vr, this axe throwing will overlay certain skills and effects on top of it. For example, holding the axe overhead for a certain 
                                amount of seconds will activate a skill, or holding the axe a certain way for a certain amount of seconds and then throwing will activate another skill... etc
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='divider'>
                        <div className='semi-circle-two' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider'>
                            <div className="section_blog_main" >
                                <div className="section_container">
                                    <div className="row" >
                                        <div className="col-md-12" >
                                            <div className="our_video">
                                                <div className="row d_flex" style={{ textDecoration: "none", cursor: "default", color: "inherit" }}>
                                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                                        <div className="our_section_img">
                                                            <figure><video id="video_ui" autoPlay loop muted playsInline >
                                                                <source src={ArrowShot} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                        <div className="section_text_box">
                                                            <h3 className="section_header pa_wi">Projectile Test</h3>
                                                            <p>Using positioning data to detect when the arrow collides with something <br/> <br /> Checking prefab creation and destruction </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='divider'>
                        <div className='semi-circle' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider'>
                            <div className="section_blog_main" >
                                <div className="section_container">
                                    <div className="row" >
                                        <div className="col-md-12" >
                                            <div className="our_video">
                                                <div className="row d_flex" style={{ textDecoration: "none", cursor: "default", color: "inherit" }}>
                                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                                        <div className="our_section_img">
                                                            <figure><video id="video_ui" autoPlay loop muted playsInline >
                                                                <source src={ArrowBarrage} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                        <div className="section_text_box">
                                                            <h3 className="section_header pa_wi">Skills</h3>
                                                            <p>Figuring out new ways of interactive skill set activation. <br />  <br /> Using the arrows trajectory, distance accumulated and collision, an arrow barrage skill where arrows are raining from the sky is activated when conditions are met </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='divider'>
                        <div className='semi-circle-two' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider' >
                            <div className="section_blog_main" >
                                <div className="section_container">
                                    <div className="row" >
                                        <div className="col-md-12" >
                                            <div className="our_video">
                                                <div className="row d_flex" style={{ textDecoration: "none", cursor: "default", color: "inherit" }}>
                                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                                        <div className="our_section_img">
                                                            <figure><video id="video_ui" autoPlay loop muted playsInline >
                                                                <source src={Weapons} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                        <div className="section_text_box">
                                                            <h3 className="section_header pa_wi">Weapons Test</h3>
                                                            <p> basic functionality for objects grabbing, rotation, and releasing</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='divider_extra' >
                        <div className='semi-circle-three' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider' >
                            <div className="section_blog_main_result" >
                                <div className="section_container_result" >
                                    <div className="row" >
                                        <div className="col-md-12" >
                                            <div className="our_video">
                                                <div className="row d_flex" >
                                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="section_text_box_two">
                                                            <h3 className="section_header_two pa_wi">Objective</h3>
                                                            <ul className="list">
                                                                <li>Create a Fantasy World</li>
                                                                <li>Create new ways for immersive gameplay that reduces immersion breaking</li>
                                                                <li>Weapons Variety</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className='vertical_line'></span>
                                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" >
                                                        <div className="section_text_box_two">
                                                            <h3 className="section_header_two pa_wi">Result</h3>
                                                            <ul className="list">
                                                                <li>GamePlay Template created </li>
                                                                <li>Concepts for different classes and weapon skill sets </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='divider_end'>
                        <div className='semi-circle-two' style={{ backgroundColor: "#2D8479" }}></div>
                        <div className='center_divider'>
                            <Container>
                                <div className="screen-ratio">
                                    <iframe src='https://www.youtube.com/embed/n45ioVDB0Bg'
                                        frameBorder='0'
                                        allow='autoplay; encrypted-media'
                                        allowFullScreen
                                        title='video'
                                        width="100%" height="100%"
                                    />
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
            
        </div>
        </AnimatedPage>
    );
}


export default VRMMORPGPage;