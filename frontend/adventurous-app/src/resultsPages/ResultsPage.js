import React from "react";
import "./ResultsPage.css";
import FlightPage from './FlightPage';
import HotelPage from './HotelPage';
import AttractionPage from './AttractionPage';

const ResultsPage = (props) => {

    console.log(props)

    return(
    <div>
      <FlightPage></FlightPage>
      <HotelPage></HotelPage>
      <AttractionPage></AttractionPage>
      <FlightPage></FlightPage>
    </div>
    )
}
export default ResultsPage