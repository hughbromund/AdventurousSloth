import React, { Component } from "react";
import "./ResultsPage.css";
import FlightPage from './FlightPage';
import HotelPage from './HotelPage';
import AttractionPage from './AttractionPage';
import history from '../routes/history';

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
  var count = 0
    do {
      console.log("http://localhost:5000/get/flights/ORD-sky/" + this.props.stateObj['airportCode'] + "/" + this.props.stateObj['depart'] + "/" + this.props.stateObj['arrive'])
      response = await fetch("http://localhost:5000/get/flights/ORD-sky/" + this.props.stateObj['airportCode'] + "/" + this.props.stateObj['depart'] + "/" + this.props.stateObj['arrive']);
      body = await response.json();
      this.setState({flightData:body});
      if (Object.entries(body).length === 0 && body.constructor === Object) {
        console.log("EMPTY RETURN")
      }
      count = count + 1
      if (count >= 5) {
        console.log("http://localhost:5000/get/error")
        response = await fetch("http://localhost:5000/get/error");
        body = await response.json();
        this.setState({flightData:body});
        break
      }
      console.log("COUNT: " + count)
    } while (Object.entries(body).length === 0 && body.constructor === Object)

if (response.status !== 200) {
  throw Error(body.message) 
}
return body;
};

// {githubData.map((gh, i)=>(
//   <li key={i}>
//      {gh.title}
//   </li>
// ))}


  // tempFunc = () => {

  //   return (
  //     this.state.attractionsData.map((obj, i) => {
  //       <AttractionPage key={i} attractionsObj={obj}/>
  //     }
      
  //   ))

  // }

  //<AttractionPage attractionsObj={this.state['attractionsData']}></AttractionPage>

  render() {

    //var code = this.tempFunc();

    return(
      <div>
        <FlightPage isReturn = {false} flightObj={this.state['flightData']}></FlightPage>
        <HotelPage hotelObj={this.state['hotelData']}></HotelPage>
        {Object.keys(this.state.attractionsData).map((key) => (
          <AttractionPage attractionsObj={this.state.attractionsData[key]}/>
        ))}
        <FlightPage isReturn = {true} flightObj={this.state['flightData']}></FlightPage>
        <div className="homeFromResults" onClick={() => history.push('/')}>
                    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                    Home
        </div>
      </div>
      )
  }

}
export default ResultsPage