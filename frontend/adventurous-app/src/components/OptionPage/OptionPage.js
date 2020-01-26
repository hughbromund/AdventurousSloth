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
        currentPage: null
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
