import React from 'react';
import logo from './logo.svg';
import LaunchPage from './components/launchPage/LaunchPage'
import './App.css';
import ResultsPage from './resultsPages/ResultsPage';
import OptionPage from './components/OptionPage/OptionPage';
import routes from './routes/routes';

import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import history from './routes/history';


function App() {
  return (f
    <Router history={history}>
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
}

export default App;
