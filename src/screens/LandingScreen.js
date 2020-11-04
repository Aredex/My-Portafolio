import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import Home from "./HomeScreen";

const LandingScreen = () => {
   return (
      <>
         {/* Main */}
         <section id="main">
            {/* Navigation */}
            <Navbar />

            <div>
               <Switch>
                  <Route exact path="/about">
                     <AboutScreen />
                  </Route>
                  <Route exact path="/contact">
                     <ContactScreen />
                  </Route>
                  <Route exact path="/">
                     <Home />
                  </Route>
               </Switch>
            </div>
         </section>
      </>
   );
};

export default LandingScreen;
