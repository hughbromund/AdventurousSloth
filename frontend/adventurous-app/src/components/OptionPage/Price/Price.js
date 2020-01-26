import React, {Component} from 'react';
import './Price.css';

class Price extends Component {

    sendCheapData = () => {
        this.props.choose('cheap');
    }

    sendExpensiveData = () => {
        this.props.choose('expensive');
    }

    goToNextPage = () => {
        this.props.select(3);
    }

    render() {
        return (
            <div className="wrapper" onClick={this.goToNextPage}>
                <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                <div className="leftDivPrice" onClick={this.sendCheapData}> 
                    <h1>{this.props.leftLabel}</h1>
                </div>
                <div className="rightDivPrice" onClick={this.sendExpensiveData}> 
                    <h1>{this.props.rightLabel}</h1>
                </div>
            </div>
        );
    }

}

export default Price;