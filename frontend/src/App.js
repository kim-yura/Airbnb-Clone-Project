import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashImage from './components/SplashImage';
import Footer from "./components/Footer";

import SpotDisplay from "./components/SpotDisplay";
import SpotDetail from "./components/SpotDetail";

import SplashHost from "./components/SplashHost";

import SpotCreate from "./components/SpotCreateForm";
import SpotEdit from "./components/SpotEditForm";

import UserAuthentication from "./components/UserAuthentication";
import DeleteConfirmed from "./components/SpotDeleteConfirmationModal/DeleteConfirmed";

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
      <div className="site-background">
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <div className="site-body">
                <SplashImage />
                <SpotDisplay />
                <SplashHost />
              </div>
            </Route>

            <Route exact path="/spots-delete-confirmation">
              <DeleteConfirmed />
            </Route>

            <Route path="/spots/new">
              <SpotCreate />
            </Route>


            <Route path="/spots/:spotId/edit">
              <SpotEdit />
            </Route>

            <Route path="/spots/:spotId">
              <SpotDetail />
            </Route>

            <Route path="/authentication">
              <UserAuthentication />
            </Route>


          </Switch>
        )}

      <Footer />
      </div>
    </>
  );
}

export default App;
