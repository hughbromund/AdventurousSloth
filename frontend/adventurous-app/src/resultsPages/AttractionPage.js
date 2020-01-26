import React from "react";
import "./AttractionPage.css";

const AttractionPage = (props) => {

    console.log(props)

    const location = props.attractionsObj['location']
    const description = props.attractionsObj['desc']
    const name = props.attractionsObj['name']
    const rating = props.attractionsObj['rating']


    var google_key = "AIzaSyBfqxhwQIerlzGjy1e9iuaPykkUcWngI5A"
    var source = "https://www.google.com/maps/embed/v1/place?key=" + google_key + "&q=" + location

    var stars = ""
    if (rating >= 1) {
        stars = stars + "⭐"
    }
    if (rating >= 2) {
        stars = stars + "⭐"
    }
    if (rating >= 3) {
        stars = stars + "⭐"
    }
    if (rating >= 4) {
        stars = stars + "⭐"
    }
    if (rating >= 5) {
        stars = stars + "⭐"
    }

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
                    <b>Attraction Details</b>
                    <span> | {name}</span>
                </h1>
                <h1 style={floatRight}>🏟️</h1>
                </md-card-content>
                <md-card-content style={backgroundStyle2}>
                <md-card style={floatLeft}>
                    <div>
                        <iframe
                            width="450"
                            height="450"
                            frameborder="0" style={border}
                            src={source} allowfullscreen>
                        </iframe>
                    </div>
                </md-card>
                <md-card style={floatLeft}>
                            <div>
                                <b>{name}</b>
                            </div>
                            <div>
                                Rating: {stars} <br/>
                            </div>
                            <div>
                                Description: {description}
                            </div>
                        </md-card>
                </md-card-content>

        </md-card>
        </div>
        </div>
    )

}

export default AttractionPage