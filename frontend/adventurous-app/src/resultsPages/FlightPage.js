import React from "react";
import "./FlightPage.css";

const FlightPage = (props) => {

    console.log(props)

    const departureTimeOrigin = props.flightObj['departureTimeOrigin']
    const departureTimeDestination = props.flightObj['departureTimeDestination']
    const arrivalTimeDestination = props.flightObj['arrivalTimeDestination']
    const arrivalTimeOrigin = props.flightObj['arrivalTimeOrigin']
    const price = props.flightObj['price']
    const carrierNameOrigin = props.flightObj['carrierNameOrigin']
    const carrierNameDestination = props.flightObj['carrierNameDestination']
    const bookingUrl = props.flightObj['bookingUrl']
    const departureAirport = props.flightObj['departureAirport']
    const arrivalAirport = props.flightObj['arrivalAirport']



    let carrierName = "";
    let origin = "";
    let dest = "";
    let departureTime = "";
    let arrivalTime = "";

    if (props.isReturn) {
        carrierName = carrierNameDestination;
        origin = arrivalAirport;
        dest = departureAirport;
        departureTime = departureTimeDestination;
        arrivalTime = arrivalTimeOrigin;
    } else {
        carrierName = carrierNameOrigin
        origin = departureAirport;
        dest = arrivalAirport;
        departureTime = departureTimeOrigin;
        arrivalTime = arrivalTimeDestination;
    }

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
                            <span> | {carrierName}</span>
                        </h1>
                        <h1 style={floatRight}>✈️</h1>
                    </md-card-content>
                    
                    <md-card-content style={backgroundStyle2}>
                        <md-card style={floatLeft}>
                            <md-card-content>
                                <b>🛫 Departure </b> at {departureTime} from<br />
                                    <b>{origin}</b><br/><br/>
                            
                                <b>🛬 Arrival </b> at {arrivalTime} in<br />
                                <b>{dest}</b> 
                            </md-card-content>
                        </md-card>
                        <md-card style={floatLeft}>
                            Flight Cost: ${price}
                            <a href={bookingUrl}>CLick Here to Purchase This Ticket</a>
                        </md-card>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    )
}

export default FlightPage