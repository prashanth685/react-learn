import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifeCycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ajay",
    };
    console.log("LifeCycle C construtor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle C get derivedStatefromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycle C did mount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle ");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle getsnap");
    return null;
  }
  componentDidUpdate() {
    console.log("Lifecycle c ");
  }
  changestate = () => {
    this.setState({
      name: "cyan",
    });
  };
  render() {
    console.log("LifeCycle C render");
    return (
      <>
        <div>LifeCycleC</div>;
        <div>
          <button onClick={this.changestate}>change state</button>
        </div>
      </>
    );
  }
}

export default LifeCycleC;
