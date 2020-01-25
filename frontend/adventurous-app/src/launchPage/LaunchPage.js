import React from "react";
import "./LaunchPage.css";
import sloth from "./slothlogo.png";

const LaunchPage = (props) => {
    return (
        <div className="background">
          <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
          <div className="title">Adventurous Sloth</div>
          <div className="imagediv">
            <img className="image" src={sloth}/>
          </div>
          <div className="outside">
            <button className="button">START</button>
          </div>
        </div>
      );
}

export default LaunchPage;