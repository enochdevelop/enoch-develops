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

import SnowCannonImage from "./assets/Pngs/snowdevicesphone.png";

import { Helmet, HelmetProvider } from 'react-helmet-async';

function SnowCannonPage() {

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
            <div className='header_snowcannon_bk_image'>
            </div>
            <div className='header_bk'>

            <div className='description_container'>
                    <div className='divider'>
                        <div className='center_divider'>
                            <div className='overview'>
                                <h3> Overview</h3>
                                <p className='section_text'> With winter just around the corner, wanted to design an AR experience for those not able to experience
                                the snowy wonders.<br /> <br /> Utilizing Hand Tracking, World Tracking, Environmental effects for the snow, and Gestures, <br /> <br />created
                                this project where users will be able to rotate and launch the snow cannon to their hearts desires. 
                               </p>
                            </div>
                        </div>
                    </div>

                    <div className='snow_divider_devices_image'>
                        <div className='semi-circle-three' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider_device_image'>
                            <img src={SnowCannonImage} alt="" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                        </div>
                    </div>

                    <div className='divider_end'>
                        <div className='semi-circle-two' style={{ backgroundColor: "#2D8479" }}></div>
                        <div className='center_divider'>
                            <Container>
                                <div className="screen-ratio">
                                    <iframe src='https://www.youtube.com/embed/-pzrDdw1gbI'
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


export default SnowCannonPage;
