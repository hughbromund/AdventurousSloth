import React, {Component} from 'react';
import './Temperature.css';

class Temperature extends Component {

    sendHotData = () => {
        this.props.choose('hot');
    }

    sendColdData = () => {
        this.props.choose('cold');
    }

    render() {
        return (
            <div className="wrapper">
                <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                <div className="leftDivTemp" onClick={this.sendHotData}> 
                    <h1>{this.props.leftLabel}</h1>
                </div>
                <div className="rightDivTemp" onClick={this.sendColdData}> 
                    <h1>{this.props.rightLabel}</h1>
                </div>
            </div>
        );
    }
}

export default Temperature;