import React, { Component } from 'react';
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

class App extends Component {

  state = {
    temp: 'hot',
    activity: 'active',
    price: 'expensive',
    depart: '2020-01-26',
    arrive: '2020-01-26',
    currentPage: null,
    city: 'Chicago',
    airportCode: 'ORD-sky'
  };

  setFinalState = (finalTemp, finalActivity, finalPrice, finalDepart, finalArrive, finalAC, finalCity) => {
    this.setState({temp:finalTemp});
    this.setState({activity:finalActivity});
    this.setState({price:finalPrice});
    this.setState({depart:finalDepart});
    this.setState({arrive:finalArrive});
    this.setState({airportCode:finalAC});
    this.setState({city:finalCity});
    //console.log(this.state.data);
  }

  render() {
    return (
      <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <LaunchPage />
          </Route>
          <Route path="/options">
            <OptionPage setFinalState={this.setFinalState}/>
          </Route>
          <Route path="/results">
            <ResultsPage stateObj={this.state}/>
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}
export default App;

