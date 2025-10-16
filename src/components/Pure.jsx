import React, { PureComponent } from "react";

class Pure extends PureComponent {
  render() {
    return <div>Pure components {this.props.name}</div>;
  }
}

export default Pure;
