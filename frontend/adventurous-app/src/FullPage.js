import React from "react";
import { Pager } from "react-bootstrap";

import ReactPageScroller from "./scroller";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";

import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
      </React.Fragment>
    );
  }
}
