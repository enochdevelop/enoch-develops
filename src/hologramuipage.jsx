import React from 'react';
import './Projects.css';
import './App.css';
import './Projectinformation.css';
import './bootstrap.min.css';
import './fixedheader.css';
import './popup.css';
import hologramTrailImage from "./assets/Pngs/ar_ui_vid_scale.mp4";
import hologramTrailStartImage from "./assets/Pngs/ar_ui_vid_start.mp4";
import Contact from "./ContactMe";
import BackToProjects from './BackToProjects';
import AnimatedPage from './AnimatedPage';
import { Container } from 'react-bootstrap'

function HologramUiPage() {

    return (
        <AnimatedPage>
        <div className="project_information_app">
            <BackToProjects />
            <div className='header_hologram_bk_image'>
            </div>
            <div className='header_bk'>

                <div className='description_container'>
                    <div className='divider'>
                        <div className='center_divider'>       
                                <div className='overview'>
                                    <h3> Overview</h3>
                                    <p className='section_text'>Designed as an interactive AR experience where users can display their specified images, in this case, a portfolio on a marker. <br /> <br /> The marker functions as the catalyst for keeping the holographic position in check. Wherever the user moves their specified marker, the images displayed will move along with the marker retaining its position relative to the marker.<br /> <br /> Not only will the images be displayed as a hologram, but users can interact with it using their hands using positioning and gestures.
                                        <br /> <br /> Hand tracking has been a part of AR that has gradually begun to gain popularity and thus was a key component in this project. Using the data retrieved, certain interactions can be implemented.<br /> <br /> For this example, I decided to focus on position collisions and object scalability.
                                    </p>
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
                                                                <source src={hologramTrailStartImage} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                        <div className="section_text_box">
                                                            <h3 className="section_header pa_wi">Collision</h3>
                                                            <p>Position collision in this case was an interesting functionality. 
                                                            <br /> <br />  Using data grabbed from specific parts of the hand, like the thumb, to create interactions once something is withing proximity.
                                                            <br /> <br />  This functionality combined the use of both proximity data and data produced through ray casting </p>

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
                                                                <source src={hologramTrailImage} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                        <div className="section_text_box">
                                                            <h3 className="section_header pa_wi">Scalability</h3>
                                                            <p>With the data gathered from hand tracking, the calculations for when a pinch gesture occurs can now be used for making the selected image smaller or larger. </p>

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
                                                                <li>Use marker tracking to display holographic information</li>
                                                                <li>Use Hand tracking to create interactive interactions</li>
                                                                <li>Showcase a more interactive use case for AR</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className='vertical_line'></span>
                                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" >
                                                        <div className="section_text_box_two">
                                                            <h3 className="section_header_two pa_wi">Result</h3>
                                                            <ul className="list">
                                                                <li>An interactive experience where virtual information is interactable </li>
                                                                <li>Exposure to plausible use-cases for AR</li>
                                                                <li>Utilization of Marker, and Hand tracking</li>
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
                                    <iframe src='https://www.youtube.com/embed/kCffXlKoro0'
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


export default HologramUiPage;