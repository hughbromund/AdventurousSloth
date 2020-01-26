import React, { Component } from "react";
import "./ResultsPage.css";
import FlightPage from './FlightPage';
import HotelPage from './HotelPage';
import AttractionPage from './AttractionPage';

class ResultsPage extends Component {

  state = {
    attractionsData:[],
    flightData:[],
    hotelData:[],
  };


componentDidMount() {
  // Call our fetch function below once the component mounts
this.callAttractionsAPI()
  .catch(err => console.log(err));
this.callHotelAPI()
  .catch(err => console.log(err));
this.callFlightAPI()
  .catch(err => console.log(err));
}


callAttractionsAPI = async () => {
  console.log("http://localhost:5000/get/attractions/" + this.props.stateObj['city'])
  const response = await fetch("http://localhost:5000/get/attractions/" + this.props.stateObj['city']);
  const body = await response.json();
  this.setState({attractionsData:body});

if (response.status !== 200) {
  throw Error(body.message) 
}
return body;
};

callHotelAPI = async () => {
    console.log("http://localhost:5000/get/hotels/" + this.props.stateObj['city'] + "/" + this.props.stateObj['depart'])
    const response = await fetch("http://localhost:5000/get/hotels/" + this.props.stateObj['city'] + "/" + this.props.stateObj['depart']);
    const body = await response.json();
    this.setState({hotelData:body});

if (response.status !== 200) {
    throw Error(body.message) 
}
return body;
};

callFlightAPI = async () => {
  var response = null
  var body = null
    do {
    console.log("http://localhost:5000/get/flights/IND-sky/" + this.props.stateObj['airportCode'] + "/" + this.props.stateObj['depart'] + "/" + this.props.stateObj['arrive'])
    response = await fetch("http://localhost:5000/get/flights/IND-sky/" + this.props.stateObj['airportCode'] + "/" + this.props.stateObj['depart'] + "/" + this.props.stateObj['arrive']);
    body = await response.json();
    this.setState({flightData:body});
    if (Object.entries(body).length === 0 && body.constructor === Object) {
      console.log("EMPTY RETURN")
    }
    } while (Object.entries(body).length === 0 && body.constructor === Object)

if (response.status !== 200) {
  throw Error(body.message) 
}
return body;
};


  render() {
    
    console.log(this.state['flightData']);

    return(
      <div>
        <FlightPage flightObj={this.state['flightData']}></FlightPage>
        <HotelPage hotelObj={this.state['hotelData']}></HotelPage>
        <AttractionPage attractionsObj={this.state['attractionsData']}></AttractionPage>
        <FlightPage flightObj={this.state['flightData']}></FlightPage>
      </div>
      )
  }

}
export default ResultsPage