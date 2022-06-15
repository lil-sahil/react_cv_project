import React, { Component } from "react";
import { AiOutlineClear } from "react-icons/ai";

class ClearButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.clear} className="reset-btn">
        <AiOutlineClear />
      </button>
    );
  }
}

export default ClearButton;
