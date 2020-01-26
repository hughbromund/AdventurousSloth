import React from "react";
import "./AttractionPage.css";

const AttractionPage = (props) => {
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
                    <span> | The Art Institute of Chicago</span>
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
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBfqxhwQIerlzGjy1e9iuaPykkUcWngI5A
                                &q=The Art Institute of Chicago Chicago, Illinois" allowfullscreen>
                        </iframe>
                    </div>
                </md-card>
                <md-card style={floatLeft}>
                            <div>
                                <b>The Art Institute of Chicago</b>
                            </div>
                            <div>
                                Rating: ⭐⭐⭐⭐⭐ <br/>
                            </div>
                            <div>
                                Description: See why the Art Institute of Chicago is the only museum in the world to be top-ranked by TripAdvisor four years in a row! Experience the greatest Impressionist collection outside Paris, and view contemporary masterpieces in the spectacular Modern Wing. Stand before classics like Nighthawks, and travel the globe through galleries devoted to the art of ancient Greece, Japan, Africa, and the Americas.
                            </div>
                        </md-card>
                </md-card-content>

        </md-card>
        </div>
        </div>
    )

}

export default AttractionPage