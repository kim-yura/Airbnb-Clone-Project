import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashImage from './components/SplashImage';
import Footer from "./components/Footer";

import SpotDisplay from "./components/SpotDisplay";
import SpotDetail from "./components/SpotDetail";

import './index.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <div className="site-background">
              <div className="site-body">
                <SplashImage />
              </div>
              <SpotDisplay />
              <Footer />
            </div>
          </Route>

          <Route path="/spots/:spotId">
            <SpotDetail />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
