import React, {Component} from 'react';
import Temperature from './Temperature/Temperature';
import ActivityLevel from './ActivityLevel/ActivityLevel';
import Price from './Price/Price';
import ReactPageScroller from "../../scroller";
import './OptionPage.css';
import history from '../../routes/history';
import DatePicker from './DatePicker/DatePicker';

class OptionPage extends Component {

    state = {
        temp: 'hot',
        activity: 'active',
        price: 'expensive',
        depart: null,
        arrive: null,
        currentPage: null,
        destination: null
    };

    callbackTemp = (childData) => {
        this.setState({temp:childData});
    }

    callbackActivity = (childData) => {
        this.setState({activity:childData});
    }

    callbackPrice = (childData) => {
        this.setState({price:childData});
    }

    callBackDeparture = (childData) => {
        this.setState({depart:childData});
    }

    callBackArrival = (childData) => {
        this.setState({arrive:childData});
    }

    handlePageChange = (number) => {
        this.setState({ currentPage: number });
    }

    calculateCity = () => {
        var city = null
        var airportCode = null
        if (this.state.temp === "hot") {
            if (this.state.activity === "active") {
                if (this.state.price === "expensive") {
                    console.log("HOT + ACTIVE + EXPENSIVE")
                    city = "Los Angeles, California"
                    airportCode = "LAX-sky"
                } else if (this.state.price === "cheap") {
                    console.log("HOT + ACTIVE + CHEAP")
                    city = "Grand Canyon Village, Arizona"
                    airportCode = "PHX-sky"
                }
            } else if (this.state.activity === "relaxing") {
                if (this.state.price === "expensive") {
                    console.log("HOT + RELAXING + EXPENSIVE")
                    city = "Oahu, Hawaii"
                    airportCode = "HNL-sky"
                } else if (this.state.price === "cheap") {
                    console.log("HOT + RELAXING + CHEAP")
                    city = "Santo Domingo, Dominican Republic"
                    airportCode = "PUJ-sky"
                }
            }
        } else if (this.state.temp === "cold") {
            if (this.state.activity === "active") {
                if (this.state.price === "expensive") {
                    console.log("COLD + ACTIVE + EXPENSIVE")
                    city = "Denver, Colorado"
                    airportCode = "DEN-sky" 
                } else if (this.state.price === "cheap") {
                    console.log("COLD + ACTIVE + CHEAP")
                    city = "Pierre, South Dakota"
                    airportCode = "PIR-sky"
                }
            } else if (this.state.activity === "relaxing") {
                if (this.state.price === "expensive") {
                    console.log("COLD + RELAXING + EXPENSIVE")
                    city = "Reykjavik, Iceland"
                    airportCode = "RKV-sky"
                } else if (this.state.price === "cheap") {
                    console.log("COLD + RELAXING + CHEAP")
                    city = "Quebec, Canada"
                    airportCode = "YQB-sky"
                }
            }
        }
        console.log(city)
        console.log(airportCode)
    }

    render() {
        this.calculateCity()
        return (
            <div>
                <ReactPageScroller pageOnChange={this.handlePageChange}
                customPageNumber={this.state.currentPage}>
                    <Temperature className='FullHeight' leftLabel="Hot" select={this.handlePageChange}
                                rightLabel="Cold" choose={this.callbackTemp}>
                    </Temperature>
                    <ActivityLevel className='FullHeight' leftLabel="Active" select={this.handlePageChange}
                                rightLabel="Relaxing" choose={this.callbackActivity}>
                    </ActivityLevel>
                    <Price className='FullHeight' leftLabel="Cheap" select={this.handlePageChange}
                                rightLabel="Expensive" choose={this.callbackPrice}>
                    </Price>
                    <DatePicker className='FullHeight' leftLabel="Depart" select={this.handlePageChange}
                                rightLabel="Arrive" chooseDepart={this.callBackDeparture} chooseArrive={this.callBackArrival}>
                    </DatePicker>
                </ReactPageScroller>
                <div className="homeButton" onClick={() => history.push('/')}>
                    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                    Home
                </div>
                <div className="resultsButton" onClick={() => history.push('/results')}>
                    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                    Results
                </div>
            </div>
        )
    }

}

export default OptionPage;
