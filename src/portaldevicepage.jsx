import React from 'react';
import './Projects.css';
import './App.css';
import './Projectinformation.css';
import './bootstrap.min.css';
import './fixedheader.css';
import './popup.css';
import Contact from "./ContactMe";
import BackToProjects from './BackToProjects';
import AnimatedPage from './AnimatedPage';
import { Container } from 'react-bootstrap'

import PortalImage from "./assets/Pngs/portaldevicesphone.png";

import { Helmet, HelmetProvider } from 'react-helmet-async';

function PortalDevicePage() {

    return (
        <AnimatedPage>
        <HelmetProvider>
        <div className="project_information_app">
        <Helmet>
            <meta charSet="utf-8" />
            <title>EnochDevelops</title>
            <link rel="canonical" href="https://enochdevelops.com/" />
            <meta name="description" content="EnochDevelops" />
        </Helmet>
            <BackToProjects />
            <div className='header_portaldevice_bk_image'>
            </div>
            <div className='header_bk'>

                <div className='description_container'>
                    <div className='divider'>
                        <div className='center_divider'>
                            <div className='overview'>
                                <h3> Overview</h3>
                                <p className='section_text'>Taking the concept of the game Portal where players are able to utilize a gravity gun, designed this concept 
                                in AR incorporating multiplayer as the core component. <br /> <br />
                                This project enables players to be stationed in a shared space with the information being viewed on both devices in sync.  <br /> <br />
                                When the project is loaded up, Players are both given a gravity gun which allows them to pick up, throw and pass the box to each other almost like a game of hot potato. <br /> <br />
                                The Multiplayer functionality of this project was quite a challenge to implement but was worth the struggle. <br /> <br />
                                This project utilized functionalities such as world tracking, ray casting, physics, and network data transfer.</p>
                            </div>
                        </div>
                    </div>

                    <div className='portal_divider_devices_image'>
                        <div className='semi-circle-two' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider_device_image'>
                            <img src={PortalImage} alt="" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                        </div>
                    </div>

                    <div className='divider' >
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
                                                                <li>Utilize the concept of multiplayer in AR</li>
                                                                <li>Create a shared space where the data being sent is in sync</li>
                                                                <li>Showcase a connectivity use case for AR</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className='vertical_line'></span>
                                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" >
                                                        <div className="section_text_box_two">
                                                            <h3 className="section_header_two pa_wi">Result</h3>
                                                            <ul className="list">
                                                                <li>An interactive multiplayer test case experience</li>
                                                                <li>An AR Physics based experience</li>
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
                                    <iframe src='https://www.youtube.com/embed/JUeaYkG0IQo'
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
        </HelmetProvider>
        </AnimatedPage>
    );
}


export default PortalDevicePage;
