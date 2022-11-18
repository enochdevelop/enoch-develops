import React from 'react';
import './Projects.css';
import './App.css';
import './Projectinformation.css';
import './bootstrap.min.css';
import './fixedheader.css'
import Contact from "./ContactMe";
import BackToProjects from './BackToProjects';
import AnimatedPage from './AnimatedPage';
import { Container } from 'react-bootstrap'

import PaperFootballImage from "./assets/Pngs/footballdevicesphone.png";

function PaperFootballPage() {

    return (
        <AnimatedPage>
        <div className="project_information_app" >
            <BackToProjects />
            <div className='header_paperfootball_bk_image' >
            </div>
            <div className='header_bk'>

            <div className='description_container'>
                    <div className='divider'>
                        <div className='center_divider'>
                            <div className='overview'>
                                <h3> Overview</h3>
                                <p className='section_text'> Remember the times in High School where students were always playing with paper football? 
                                <br /> <br />For those who still participate in the art of paper football,
                                as well as, those who want to relieve those moments, then this AR experience was designed with you in mind.
                                <br /> <br />Not only does this AR project prevent the use of wasted paper to make a paper football, 
                                but players will also be able to keep track of their scores.
                                <br /> <br />This project was another showcase for the use case of AR using Hand Tracking, World Tracking, and Persistent Data.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='divider_devices_image'>
                        <div className='semi-circle-two' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider_device_image'>
                            <img src={PaperFootballImage} alt="" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                        </div>
                    </div>

                    <div className='divider_end'>
                        <div className='semi-circle-two' style={{ backgroundColor: "#2D8479" }}></div>
                        <div className='center_divider'>
                            <Container>
                                
                                <div className="screen-ratio">
                                    <iframe src='https://www.youtube.com/embed/vf1UEUdOKYY'
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


export default PaperFootballPage;