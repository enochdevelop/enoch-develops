import React from 'react'
import {
    Switch,
    Route, 
    Redirect,
    useLocation
  } from "react-router-dom";

import {AnimatePresence} from 'framer-motion'

//pages
import MainPage from "./mainpage";
import NotFound404 from "./NotFound";
import AboutMePage from "./aboutmepage";
import ArProjects from "./arprojects";
import HologramUi from "./hologramuipage";
import VR from "./vrmmorpgpage";
import ARGrab from "./argrabpage";
import Hogwarts from "./hogwartspage";
import PaperFootball from "./paperfootballpage";
import PortalDevice from "./portaldevicepage";
import SnowCannon from "./snowcannonpage";


const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFound404} />
          <Route exact path="/AboutMe" component={AboutMePage} />
          <Route exact path="/ArProjects" component={ArProjects} />
          <Route exact path="/HologramUi" component={HologramUi} />
          <Route exact path="/VR" component={VR} />
          <Route exact path="/ARGrab" component={ARGrab} />
          <Route exact path="/Hogwarts" component={Hogwarts} />
          <Route exact path="/PaperFootball" component={PaperFootball} />
          <Route exact path="/PortalDevice" component={PortalDevice} />
          <Route exact path="/SnowCannon" component={SnowCannon} />      
          <Redirect to="/404"/>
        </Switch>  
    </AnimatePresence>
  )
}

export default AnimatedRoutes
