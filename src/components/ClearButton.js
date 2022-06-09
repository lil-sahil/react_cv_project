import React, { Component } from "react";

class ClearButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.clear}>Deletes</button>;
  }
}

export default ClearButton;
