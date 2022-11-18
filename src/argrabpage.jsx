import React from 'react';
import './Projects.css';
import './App.css';
import './Projectinformation.css';
import './bootstrap.min.css';
import './fixedheader.css'
import './popup.css';
import Contact from "./ContactMe";
import AnimatedPage from './AnimatedPage';
import BackToProjects from './BackToProjects';
import { Container } from 'react-bootstrap'

import ARGrabImage from "./assets/Pngs/grabdevicesphone.png";

function ARGrabPage() {

    return (
    <AnimatedPage>
        <div className="project_information_app">
            <BackToProjects />
            <div className='header_argrab_bk_image'>
            </div>
            <div className='header_bk'>
            <div className='description_container'>
                    <div className='divider'>
                        <div className='center_divider'>
                            <div className='overview'>
                                <h3> Overview</h3>
                                <p className='section_text'>When thinking of AR, Hand Tracking seems to be one of the topics in question.
                                <br /> <br /> Due to this, decided to whip up some test examples for utilization of hand tracking. 
                                <br /> <br /> In this example, users will activate a variety of triggers using their hands. 
                                <br /> <br /> These triggers include, being able to grab objects with their hands, rotate the object around, and throw the object.
                                <br /> <br /> If thrown at a target, collision interactions are added as a bonus.
                               </p>
                            </div>
                        </div>
                    </div>

                    <div className='argrab_divider_devices_image'>
                        <div className='semi-circle-three' style={{ backgroundColor: "#416E9E" }}></div>
                        <div className='center_divider_device_image'>
                            <img src={ARGrabImage} alt="" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                        </div>
                    </div>


                    <div className='divider_end'>
                        <div className='semi-circle-two' style={{ backgroundColor: "#2D8479" }}></div>
                        <div className='center_divider'>
                            <Container>
                                <div className="screen-ratio">
                                    <iframe src='https://www.youtube.com/embed/5HpyiNAV0Nc'
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


export default ARGrabPage;