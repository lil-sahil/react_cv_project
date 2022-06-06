import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

export class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="work-Information">
        {createFormElements(
          this.props.currentState,
          this.props.checkChange,
          "workInformation"
        )}
      </div>
    );
  }
}

export default PracticalExperience;
