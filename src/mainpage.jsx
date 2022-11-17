import React from "react";
import './App.css';
import Header from "./Header";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import backgroundVideo from "./assets/BKImages/Drawing21.mp4"
import Menu from "./MenuButton";
import Contact from "./ContactMe";
import AnimatedPage from "./AnimatedPage";
import MainPageHeader from "./MainPageHeader";



function MainPage() {

  return (
    <AnimatedPage>
      <HelmetProvider>
        <div className="app">
          <Helmet>
            <meta charSet="utf-8" />
            <title>EnochDevelops</title>
            <link rel="canonical" href="https://enochdevelops.com/" />
            <meta name="description" content="EnochDevelops" />
          </Helmet>
          <video id="video" autoPlay loop muted playsInline >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Header />
          <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="" href="# "> </a>

          <div className="menu_resized" >
            <Menu />
          </div>
          <MainPageHeader />
          <Contact />
        </div>
      </HelmetProvider>
    </AnimatedPage>
  );
}


export default MainPage;

