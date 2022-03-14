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
import DeleteConfirmed from "./components/SpotDeleteConfirmationModal/DeleteConfirmed";
import CreateConfirmed from "./components/SpotCreateForm/CreateConfirmed";

import UserAuthentication from "./components/UserAuthentication";
import UserProfile from "./components/UserProfile";

import PageNotFound from "./components/PageNotFound";

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
      <div className="site-body">
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <div className="site-gradient" />
              <div className="site-background">
                <SplashImage />
                <SpotDisplay />
                <SplashHost />
              </div>
            </Route>

            <Route exact path="/spots-delete-confirmation">
              <DeleteConfirmed />
            </Route>

            <Route exact path="/spots-create-confirmation">
              <CreateConfirmed />
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

            <Route path="/users/:userId">
              <UserProfile />
            </Route>


            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        )}

      </div>
      <Footer />
    </>
  );
}

export default App;
