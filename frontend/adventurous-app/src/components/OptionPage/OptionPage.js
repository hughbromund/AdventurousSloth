import React, {Component} from 'react';
import Temperature from './Temperature/Temperature';
import ActivityLevel from './ActivityLevel/ActivityLevel';
import Price from './Price/Price';
import ReactPageScroller from "../../scroller";
import './OptionPage.css';

class OptionPage extends Component {

    state = {
        temp: 'nothing',
        activity: 'nothing',
        price: 'nothing'
    };

    callbackTemp = (childData) => {
        this.setState({temp:childData})
    }

    callbackActivity = (childData) => {
        this.setState({activity:childData})
    }

    callbackPrice = (childData) => {
        this.setState({price:childData})
    }

    render() {
        return (
            <ReactPageScroller>
            <Temperature className='FullHeight' leftLabel="Hot" rightLabel="Cold" choose={this.callbackTemp}>
            </Temperature>
            <ActivityLevel className='FullHeight' leftLabel="Active" rightLabel="Relaxing" choose={this.callbackActivity}>
            </ActivityLevel>
            <Price className='FullHeight' leftLabel="Cheap" rightLabel="Expensive" choose={this.callbackPrice}>
            </Price>
          </ReactPageScroller>
        )
    }

}

export default OptionPage;
