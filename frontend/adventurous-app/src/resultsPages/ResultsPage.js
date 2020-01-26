import React, { Component } from "react";
import "./ResultsPage.css";
import FlightPage from './FlightPage';
import HotelPage from './HotelPage';
import AttractionPage from './AttractionPage';

class ResultsPage extends Component {

  state = {
    data: []
  };

  render() {
    
    console.log(this.props);

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