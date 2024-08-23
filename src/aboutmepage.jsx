import React from 'react';
import './App.css';
import './About.css';
import './popup.css';
import BackToProjects from './MenuButton';
import AnimatedPage from './AnimatedPage';
import ProfilePic from "./assets/ProfileImages/personalpic2.png"
import { Helmet, HelmetProvider } from 'react-helmet-async';


function AboutMePage() {

  return (
    <AnimatedPage>
      <HelmetProvider>
        <div className="about_information_app">
        <Helmet>
                <meta charSet="utf-8" />
                <title>EnochDevelops</title>
                <link rel="canonical" href="https://enochdevelops.com/" />
                <meta name="description" content="EnochDevelops" />
              </Helmet>
          <BackToProjects />
          <div className='about_header_container'>
            <div className="about_content_container">
              <div className="my_pic">
                <img src={ProfilePic} alt=""></img>
              </div>
              <div className="about_me_text_container" style={{animation: 'slide .3s linear'}}>
                <p className="paragraph_descriptions_title"> HELLO, I'M ENOCH </p>
                <p className="paragraph_descriptions2"> I'm your friendly neighborhood Developer</p>
                <p className="about_me_paragraph_descriptions"> who is also an Adrenaline Junkie at heart. </p>
                <p className="paragraph_descriptions2"> I enjoy using technology </p>
                <p className="about_me_paragraph_descriptions"> to create fun, interactive, complex  </p>
                <p className="paragraph_descriptions2"> immersive experiences! </p>
              </div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </AnimatedPage>
  );
}

export default AboutMePage;
