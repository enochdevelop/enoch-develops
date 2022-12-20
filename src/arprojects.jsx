import React from "react";
import './Projects.css';
import './App.css';
import './bootstrap.min.css';
import './popup.css';
import AnimatedPage from "./AnimatedPage";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";
import holographImage from "./assets/ProjectImagesResized/holographicuicompress.jpg";
import hogwartsImage from "./assets/ProjectImagesResized/hogwartshousecompress.jpg";
import portaldeviceImage from "./assets/ProjectImagesResized/portaldevicecompress.jpg";
import pillowpunchImage from "./assets/ProjectImagesResized/pillowpunch.png";
import snowdayImage from "./assets/ProjectImagesResized/snowdaycompress.jpg";
import argrabImage from "./assets/ProjectImagesResized/argrabcompress.jpg";
import vrmmorpgImage from "./assets/ProjectImagesResized/vrmmorpgcompress.jpg";
import spooksmashImage from "./assets/ProjectImagesResized/spookysmashcompress.jpg";
import paperfootballImage from "./assets/ProjectImagesResized/paperfootballcompress.jpg";

import Contact from "./ContactMe";
import BackToMainPage from "./BackToMainpage";


function ArProjects() {

    return (
        <AnimatedPage>
        <HelmetProvider>
            <div className="project_app">
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
                    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"></link>

                    <link rel="stylesheet" href="./"></link>
                </Helmet>

                <BackToMainPage />
                <div className="header_space">
                </div>


                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row" >
                            <div className="col-md-12" >
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="/HologramUi" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={holographImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">HOLOGRAPHIC UI</h3>
                                                <p className="project_font">Designed an interactive business card where you can view your portfolio as an hologram. Using Hand Tracking, you can interact with the images </p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar, Hand Tracking, Marker Tracking </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="/VR" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={vrmmorpgImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">VR MMORPG</h3>
                                                <p className="project_font">Ever wanted to experience an MMORPG based game, but in real life? well now you can with this experimental VR Experience </p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Unity, VR, Oculus Quest </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="/PortalDevice" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={portaldeviceImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">MULTIPLAYER: PORTAL DEVICE</h3>
                                                <p className="project_font">Designed a social AR that utilized the  functionalities of multiplayer where players will be connected within a shared space using multiple different devices </p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar, Multiplayer </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="/Hogwarts" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={hogwartsImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">HOGWARTS HOUSE</h3>
                                                <p className="project_font">Inspired by the Harry Potter franchise, designed an immersive experience for the curious minded individuals who cant wait to know what their school for the coming Harry Potter game will be <br/><br/> <b>Views: 522.9K</b></p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar. Entertainment, Option Selection, Social Experiment </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="https://devpost.com/software/pillow-punch?ref_content=contribution-prompt&ref_feature=engagement&ref_medium=email&utm_campaign=contribution-prompt&utm_content=contribution_reminder&utm_medium=email&utm_source=transactional#app-team" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={pillowpunchImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">PILLOW PUNCH</h3>
                                                <p className="project_font"> Collaborated with <a tag={Link} href="https://www.linkedin.com/in/alex-bradt/" target="_blank"  rel="noopener noreferrer"> <b>Alex Bradt </b> </a> and <a tag={Link} href="https://www.linkedin.com/in/phillip-walton-2669a62/" target="_blank"  rel="noopener noreferrer"> <b>Phill Walton </b> </a> to develop a Pillow Fight Multiplayer Experience where players can now smack each other with virtual pillows</p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar, Multiplayer, Entertainment, Co-Op </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="/ARGrab" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={argrabImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">AR FUNCTION: GRAB</h3>
                                                <p className="project_font">Using hand tracking in AR, users can grab, rotate, and throw objects</p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar, Social Experiment, Experimental Features, Hand Tracking</h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="/PaperFootball" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={paperfootballImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">PAPER FOOTBALL</h3>
                                                <p className="project_font">Remember back in the days where students would rip-out pages of their notebook to make paper football's? well now instead of wasting paper, you can play this virtual paper football game <br/><br/> <b>Views: 353.5K</b></p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar, Entertainment, Game </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="/SnowCannon" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={snowdayImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">SNOW CANNON</h3>
                                                <p className="project_font"> For the snowy festivities, taking <a tag={Link} href="https://lens.snapchat.com/f89ae852e2784484a88bc25e6194351f" target="_blank"  rel="noopener noreferrer"> <b>Alex Bradt Snowball Cannon</b> </a>, using hand gestures and triggers, added some AR interaction to rotate and fire the cannon</p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar, Entertainment, Hand Tracking </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog_main" style={{animation: 'slide .3s linear'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_two_box">
                                    <a className="row d_flex" tag={Link} href="https://lensesforsnap.com/spook-smash-snapchat-lens-filter/" target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_img">
                                                <figure><img className="img_content" src={spooksmashImage} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="our_text_box">
                                                <h3 className="awesome pa_wi">SPOOK SMASH</h3>
                                                <p className="project_font">For a "SPOOKTACULAR" Halloween, collaborated with <a tag={Link} href="https://www.linkedin.com/in/alex-bradt/" target="_blank"  rel="noopener noreferrer"> <b>Alex Bradt </b> </a> and <a tag={Link} href="https://www.linkedin.com/in/noah-huelsman/" target="_blank"  rel="noopener noreferrer"> <b> Noah Huelsman </b></a>to create an Ar interactive game where you can use your hands and defend from creatures of the night </p>
                                                <div className="post_box padding_bottom1">
                                                    <h4 className="flot_left1">Social Ar, Game, Hand Tracking </h4>
                                                    <ul className="like">

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
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


export default ArProjects;

