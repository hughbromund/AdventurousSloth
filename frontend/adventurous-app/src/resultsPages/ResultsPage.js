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
const response = await fetch("http://localhost:5000/get/CS307");
const body = await response.json();
this.setState({attractionsData:body});

if (response.status !== 200) {
  throw Error(body.message) 
}
return body;
};

callHotelAPI = async () => {
const response = await fetch("http://localhost:5000/get/CS307");
const body = await response.json();
this.setState({hotelData:body});

if (response.status !== 200) {
  throw Error(body.message) 
}
return body;
};

callFlightAPI = async () => {
const response = await fetch("http://localhost:5000/get/CS307");
const body = await response.json();
this.setState({flightData:body});

if (response.status !== 200) {
  throw Error(body.message) 
}
return body;
};

  render() {
    
    console.log(this.state.hotelData);

    return(
      <div>
        <FlightPage></FlightPage>
        <HotelPage></HotelPage>
        <AttractionPage></AttractionPage>
        <FlightPage></FlightPage>
      </div>
      )
  }

}
export default ResultsPage