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
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }


  callBackendAPI = async () => {
    const response = await fetch("http://localhost:5000/get/attractions/indianapolis");
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <LaunchPage />
          </Route>
          <Route path="/options">
            <OptionPage />
          </Route>
          <Route path="/results">
            <ResultsPage />
          </Route>
        </Switch>
      </Router>

    );
  }
}
export default App;

