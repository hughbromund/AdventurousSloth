import React from "react";
import "./HotelPage.css";

const HotelPage = (props) => {
    const border = {border:'0'}
    const backgroundStyle = {background: '#940a37', color: 'white'}
    const backgroundStyle2 = {background: 'white', color: 'black'}
    const floatRight = {float: 'right'}
    const floatLeft = {float: 'left'}
    return(
        <div className="font">
            <div className="style">
                <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.js"></script>
                <md-card>
                    <md-card-content style={backgroundStyle}>
                    <h1 className="h1" style={floatLeft}>
                        <b>Hotel Details</b>
                        <span> | Conrad Indianapols</span>
                    </h1>
                    <h1 style={floatRight}>🏨</h1>
                    </md-card-content>
                    <md-card-content style={backgroundStyle2}>
                        <md-card style={floatLeft}>
                            <div >
                                <iframe
                                    width="450"
                                    height="450"
                                    frameborder="0" style={border}
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBfqxhwQIerlzGjy1e9iuaPykkUcWngI5A
                                        &q=Conrad Indianapolis, Indianapolis,IN" allowfullscreen>
                                </iframe>
                            </div>
                        </md-card>
                        <md-card style={floatLeft}>
                            <div>
                                <b>Conrad Indianapolis</b>
                            </div>
                            <div >
                                Price per Night: $85 - $120<br/>
                                Duration of Stay: 4 Days<br/>
                                Number of Beds: 2 🛏️<br/>
                                Rating: ⭐⭐⭐⭐⭐ <br/>
                            </div>
                        </md-card>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    )

}

export default HotelPage