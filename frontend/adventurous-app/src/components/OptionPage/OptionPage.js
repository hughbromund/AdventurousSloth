import React, {Component} from 'react';
import Temperature from './Temperature/Temperature';
import ActivityLevel from './ActivityLevel/ActivityLevel';
import Price from './Price/Price';
import ReactPageScroller from "../../scroller";
import './OptionPage.css';
import history from '../../routes/history';
import DatePicker from './DatePicker/DatePicker';

class OptionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: 'hot',
            activity: 'active',
            price: 'expensive',
            depart: '2020-01-26',
            arrive: '2020-01-26',
            currentPage: null,
            cityState: 'Chicago',
            AC: 'ORD-sky'
        };
    }


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

    handleResults = () => {
        // this.calculateCity();

        let rand_int = Math.floor(Math.random() * 1);

        let city = '';
        let airportCode = '';
        if (this.state.temp === "hot") {
            if (this.state.activity === "active") {
                if (this.state.price === "expensive") {
                    if (rand_int === 0) {
                        city = 'Los+Angeles';
                        airportCode = "LAX-sky"
                    } else {
                        city = 'Orlando'
                        airportCode = 'MCO-sky'
                    }
                } else if (this.state.price === "cheap") {
                    //console.log("HOT + ACTIVE + CHEAP")
                    if (rand_int === 0) {
                        city = "GrandCanyonVillage,Arizona"
                        airportCode = "PHX-sky"
                    } else {
                        city = "Austin"
                        airportCode = 'AUS-sky'
                    }
                }
            } else if (this.state.activity === "relaxing") {
                if (this.state.price === "expensive") {
                    //console.log("HOT + RELAXING + EXPENSIVE")
                    if (rand_int === 0) {
                        city = "aruba"
                        airportCode = "AUA-sky"
                    } else {
                        city = 'Miami'
                        airportCode = 'MIA-sky'
                    }
                } else if (this.state.price === "cheap") {
                    //console.log("HOT + RELAXING + CHEAP")
                    if (rand_int == 0) {
                        city = "DominicanRepublic"
                        airportCode = "PUJ-sky"
                    } else {
                        city = 'Houston'
                        airportCode = 'IAH-sky'
                    }
                }
            }
        } else if (this.state.temp === "cold") {
            if (this.state.activity === "active") {
                if (this.state.price === "expensive") {
                    //console.log("COLD + ACTIVE + EXPENSIVE")
                    if (rand_int === 0) {
                        city = "Denver,Colorado"
                        airportCode = "DEN-sky" 
                    } else {
                        city = 'Tokyo'
                        airportCode = 'HND-sky'
                    }
                } else if (this.state.price === "cheap") {
                    //console.log("COLD + ACTIVE + CHEAP")
                    if (rand_int == 0) {
                        city = "Montreal"
                        airportCode = "YUL-sky"
                    } else {
                        city = 'Boston'
                        airportCode = 'BOS-sky'
                    }
                }
            } else if (this.state.activity === "relaxing") {
                if (this.state.price === "expensive") {
                    //console.log("COLD + RELAXING + EXPENSIVE")
                    if (rand_int === 0) {
                        city = "Stockholm"
                        airportCode = "ARN-sky"
                    } else {
                        city = 'Toronto'
                        airportCode = 'YYZ-sky'
                    }
                } else if (this.state.price === "cheap") {
                    //console.log("COLD + RELAXING + CHEAP")
                    if (rand_int === 0) {
                        city = "Quebec,Canada"
                        airportCode = "YQB-sky"
                    } else {
                        city = 'Seattle'
                        airportCode = 'SEA-sky'
                    }
                }
            }
        }

        this.props.setFinalState(this.state.temp, this.state.activity, this.state.price, 
                                this.state.depart, this.state.arrive, airportCode, city);
        //console.log("H: " + this.state.depart);
        history.push('/results');
    }

    render() {
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
                                rightLabel="Arrive" chooseDepart={this.callBackDeparture} 
                                chooseArrive={this.callBackArrival}>
                    </DatePicker>
                </ReactPageScroller>
                <div className="homeButton" onClick={() => history.push('/')}>
                    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                    Home
                </div>
                <div className="resultsButton" onClick={this.handleResults}>
                    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                    Results
                </div>
            </div>
        );
    }

}

export default OptionPage;
