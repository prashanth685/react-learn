import React, { Component } from "react";
import RegularC from "./RegularC";
import Pure from "./Pure";
import Memo from "./Memo";

export class ParentC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ajay",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "ajay",
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        ParentC
        <RegularC name={this.state.name} />
        <Pure name={this.state.name} />
        <Memo name={this.state.name} />
      </div>
    );
  }
}

export default ParentC;
