import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button>click</button>
      </div>
    );
  }
}

export default EventBind;
