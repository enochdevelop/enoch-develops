import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

//pages
import MainPage from "./mainpage";
import NotFound404 from "./NotFound";
import BoxBoisPage from "./boxboispage";
import SpookSmashPage from "./spooksmashpage";
import BottleFlipPage from "./bottleflippage";
import HotCoCoMoPage from "./hotcocomo";
import ShootYourShotPage from "./shotyourshotpage";
import UnwrappedPage from "./Unwrapped";
import AboutMePage from "./aboutmepage";
import ARTripPage from "./artrippage";
import ARUiPage from "./aruipage";



function App () {

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NotFound404} />
        <Route exact path="/BoxBois" component={BoxBoisPage} />
        <Route exact path="/SpookSmash" component={SpookSmashPage} />
        <Route exact path="/BottleFlip" component={BottleFlipPage} />
        <Route exact path="/HotCoCoMo" component={HotCoCoMoPage} />
        <Route exact path="/ShootYourShot" component={ShootYourShotPage} />
        <Route exact path="/Unwrapped" component={UnwrappedPage} />
        <Route exact path="/ARTrip" component={ARTripPage} />
        <Route exact path="/ARUi" component={ARUiPage} />
        <Route exact path="/AboutMe" component={AboutMePage} />
        <Redirect to="/404"/>
      </Switch>
    </Router>
  );
}   


export default App;

