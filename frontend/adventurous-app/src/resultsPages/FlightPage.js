import React from "react";
import "./FlightPage.css";

const FlightPage = (props) => {
    const floatLeft = {float: 'left'}
    const floatRight = {float: 'right'}
    const color = {color: 'rgba(255, 255, 255, 0.5)'}
    const clearBoth = {style: 'both'}
    const backgroundStyle = {background: 'rgb(87, 31, 31)', color: 'white'}
    const backgroundStyle2 = {background: 'white', color: 'black'}

    return(
        <div>
            <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.js"></script>
            <md-card>
                <md-card-content style={backgroundStyle}>
                <p>
                    <b>Flight Details</b>
                    <span>| Qatar Airways (QR)</span>
                    <span style={floatRight}>QR859</span>
                </p>
                <h2>
                    <span style={floatLeft}>ICN</span>
                    <span style={floatRight}><span style={color}>➔</span> DOH</span>
                </h2>
                <p style={clearBoth}>
                    <span style={floatLeft}>Incheon International Airport</span>
                    <span style={floatRight}>Hamad International Airport</span>
                </p>
                </md-card-content>
                <md-card-content style={backgroundStyle2}>
                Departure: 21 Apr 2015 00:25 (GMT+09:00)<br />
                Arrival: 21 Apr 2015 13:35 (GMT+09:00)
            </md-card-content>
        </md-card>



        </div>
    )
}

export default FlightPage