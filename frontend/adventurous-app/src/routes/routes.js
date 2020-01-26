import React from 'react';

/**
 * Import all page components here
 */
import App from '../App';
import LaunchPage from '../components/launchPage/LaunchPage';
import OptionPage from '../components/OptionPage/OptionPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Router>
    <Switch>
      <Route exact path="/">
        <LaunchPage />
      </Route>
      <Route path="/options">
        <OptionPage />
      </Route>
    </Switch>
  </Router>
);