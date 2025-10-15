import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ajay",
    };
    console.log("Lifecycle A construtor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Life cycle A get derivedStatefromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle a did mount");
  }
  render() {
    console.log("Lifecycle A render");
    return (
      <>
        <div>LifeCycleA</div>;
        <div>
          <LifeCycleB />
        </div>
      </>
    );
  }
}

export default LifeCycleA;
