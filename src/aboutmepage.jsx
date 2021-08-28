import React from 'react';
import './App.css';
import './BoxBois.css';
import './unwrapped.css';

import HomeButtonLink from "./HomeButton";



function AboutMePage() {
  
  return (
    <div className="AboutMe-app">
      <HomeButtonLink />
      <div className="content_container2">
        <div className="MyPic">

        </div>
        <div >
          <p className="paragraph_descriptions_title"> HELLO, I'M ENOCH </p>
          <p className="paragraph_descriptions2"> I'm your friendly neighborhood Developer</p>
          <p className="aboutme_paragraph_descriptions"> whose also an Artist, and </p>
          <p className="paragraph_descriptions2"> an Adrenaline Junkie at heart.</p>
          <p className="aboutme_paragraph_descriptions"> I enjoy using technology </p>
          <p className="paragraph_descriptions2"> to create fun, interactive, complex  </p>
          <p className="aboutme_paragraph_descriptions"> immersive experiences! </p>
 
        </div>

      </div>
    </div>
  );
}

export default AboutMePage;