import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import SignupForm from "./components/SignupFormModal/SignupForm";
import Navigation from "./components/Navigation";
import SplashImage from './components/SplashImage';
import Footer from "./components/Footer";
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
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path exact="/">
            <div className="site-background">
              <div className="site-body">
                <SplashImage />
              </div>
              <Footer />
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
