import React, {Component} from 'react';
import './ActivityLevel.css';

class ActivityLevel extends Component {

    sendActiveData = () => {
        this.props.choose('active');
    }

    sendRelaxingData = () => {
        this.props.choose('relaxing');
    }

    render() {
        return (
            <div className="wrapper">
                <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
                <div className="leftDivActive" onClick={this.sendActiveData}> 
                    <h1>{this.props.leftLabel}</h1>
                </div>
                <div className="rightDivActive" onClick={this.sendRelaxingData}> 
                    <h1>{this.props.rightLabel}</h1>
                </div>
            </div>
        );
    }
}

export default ActivityLevel;