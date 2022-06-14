import React, { Component } from "react";
import { GrPowerReset } from "react-icons/gr";

class ClearButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.clear} className="reset-btn">
        Reset <GrPowerReset />
      </button>
    );
  }
}

export default ClearButton;
