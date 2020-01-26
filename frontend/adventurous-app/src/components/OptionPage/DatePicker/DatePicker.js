import React, {Component} from 'react';
import './DatePicker.css';
import Picker from 'react-date-picker';

class DatePicker extends Component {

    state = {
        departureDate: new Date(),
        arrivalDate: new Date()
    };

    sendDepartureData = () => {

        let day = this.state.departureDate.getDate();
        let month = this.state.departureDate.getMonth();
        let year = this.state.departureDate.getUTCFullYear();

        month = month + 1;

        let monthString = "" + month;
        if (month < 10) {
            monthString = "0" + month;
        }

        let dayString = "" + day;
        if (day < 10) {
            dayString = "0" + day;
        }

        this.props.chooseDepart(year + "-" + monthString + "-" + dayString);
    }

    sendArrivalData = () => {

        let day = this.state.arrivalDate.getDate();
        let month = this.state.arrivalDate.getMonth();
        let year = this.state.arrivalDate.getUTCFullYear();

        month = month + 1;
        
        let monthString = "" + month;
        if (month < 10) {
            monthString = "0" + month;
        }

        let dayString = "" + day;
        if (day < 10) {
            dayString = "0" + day;
        }

        this.props.chooseArrive(year + "-" + monthString + "-" + dayString);
    }

    goToNextPage = () => {

    }

    handleDeparture = date => {
        this.setState({ departureDate:date });
        this.sendDepartureData();
    }

    handleArrival = date => {
        this.setState({ arrivalDate:date });
        this.sendArrivalData();
    }

    render() {

        const startDate = this.startDate;

        return (
            <div className="wrapper">
                <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                <div className="leftDivDate"> 
                    <h1>{this.props.leftLabel}</h1>
                    <Picker className="picker" onChange={this.handleDeparture} value={this.state.departureDate} />
                </div>
                <div className="rightDivDate"> 
                    <h1>{this.props.rightLabel}</h1>
                    <Picker className="picker" onChange={this.handleArrival} value={this.state.arrivalDate} />
                </div>
            </div>
        );
    }
}

export default DatePicker;