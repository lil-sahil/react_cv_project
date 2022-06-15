import React, { Component } from "react";
import { GrClearOption } from "react-icons/gr";

class ClearButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.clear} className="reset-btn">
        <GrClearOption />
      </button>
    );
  }
}

export default ClearButton;
