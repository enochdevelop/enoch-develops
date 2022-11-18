import React from 'react';
import './Projects.css';
import './App.css';
import './Projectinformation.css';
import './bootstrap.min.css';
import './fixedheader.css'
import './popup.css';
import Contact from "./ContactMe";
import BackToProjects from './BackToProjects';
import AnimatedPage from './AnimatedPage';
import { Container } from 'react-bootstrap'

import HogwartsImage from "./assets/Pngs/hogwartsdevicesphone.png";

function HogwartsPage() {

    return (
        <AnimatedPage>
        <div className="project_information_app">
            <BackToProjects />
            <div className='header_hogwarts_bk_image'>
            </div>
            <div className='header_bk'>

            <div className='description_container'>
                    <div className='divider'>
                        <div className='center_divider'>
                            <div className='overview'>
                                <h3> Overview</h3>
                                <p className='section_text'> With the development of the game "Hogwarts Legacy" being announced, the idea of what school to choose 
                                became quite the issue. <br /> <br /> 
                                Taking this into account, decided to design this AR experience where wizards will first be immersed in the world of 
                                Hogwarts legacy. With their device, wizards will be able to rotate around to experience a 360 views of the world. <br /> <br />
                                Wizards will also be presented with instructions and if followed properly, will reveal their destined school for the game.
                                <br /> <br /> 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='hogwarts_divider_devices_image'>
                        <div className='semi-circle-two' style={{ backgroundColor: "inherit" }}></div>
                        <div className='center_divider_device_image'>
                            <img src={HogwartsImage} alt="" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                        </div>
                    </div>

                    <div className='divider_end'>
                        <div className='semi-circle-two' style={{ backgroundColor: "#2D8479" }}></div>
                        <div className='center_divider'>
                            <Container>
                                <div className="screen-ratio">
                                    <iframe src='https://www.youtube.com/embed/rrxN1dzKwc8'
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


export default HogwartsPage;