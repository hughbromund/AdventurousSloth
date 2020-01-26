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
    data:[],
    temp: 'hot',
    activity: 'active',
    price: 'expensive',
    depart: '2020-01-26',
    arrive: '2020-01-26',
    currentPage: null
  };

componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .catch(err => console.log(err));
}


callBackendAPI = async () => {
  const response = await fetch("http://localhost:5000/get/CS307");
  const body = await response.json();
  this.setState({data:body});


  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

  setFinalState = (finalTemp, finalActivity, finalPrice, finalDepart, finalArrive) => {
    this.setState({temp:finalTemp});
    this.setState({activity:finalActivity});
    this.setState({price:finalPrice});
    this.setState({depart:finalDepart});
    this.setState({arrive:finalArrive});
    //console.log(this.state.data);
  }

  render() {
    console.log(this.state)
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

