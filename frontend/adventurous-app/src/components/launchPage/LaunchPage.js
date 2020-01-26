import React from "react";
import "./LaunchPage.css";
import sloth from "./slothlogo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from '../../routes/history';

const LaunchPage = (props) => {

    return (
        <div className="background">
          <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
          <div className="title">Adventurous Sloth</div>
          <div className="imagediv">
            <img className="image" src={sloth}/>
          </div>
          <div className="outside">
            <button className="button" onClick={() => history.push('/options')}>START</button>
          </div>
        </div>
      );
}

export default LaunchPage;