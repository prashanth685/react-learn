import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greetparent = this.greetparent.bind(this);
  }
  greetparent() {
    alert(`hello ${this.state.parentName}`);
  }
  render() {
    return (
      <div>
        <Child />
      </div>
    );
  }
}

export default Parent;
