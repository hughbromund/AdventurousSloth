import React from "react";
import "./FlightPage.css";

const FlightPage = (props) => {
    const floatLeft = {float: 'left'}
    const floatRight = {float: 'right'}
    const color = {color: 'white'}
    const clearBoth = {style: 'both'}
    const backgroundStyle = {background: '#940a37', color: 'white'}
    const backgroundStyle2 = {background: 'white', color: 'black'}

    return(
        <div className="font">
            <div className="style">
                <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.js"></script>
                <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                <md-card>
                    <md-card-content style={backgroundStyle}>
                        <h1 className="h1" style={floatLeft}>
                            <b>Flight Details</b>
                            <span> | jetBlue</span>
                        </h1>
                        <h1 style={floatRight}>✈️</h1>
                    </md-card-content>
                    
                    <md-card-content style={backgroundStyle2}>
                        <md-card style={floatLeft}>
                            <md-card-content>
                                <b>🛫 Departure </b> at <b>12:25pm EST</b> on <b>21 April 2020</b> from<br />
                                <b>Indianapolis International Airport,</b> <i>IND</i><br/><br/>
                            
                                <b>🛬 Arrival </b> at <b>1:25pm CT</b> on <b>21 April 2020</b> in<br />
                                <b>Chicago O'Hare International Airport,</b> <i>ORD</i>
                            </md-card-content>
                        </md-card>
                        <md-card style={floatLeft}>
                            Flight Cost One Way: $317
                        </md-card>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    )
}

export default FlightPage