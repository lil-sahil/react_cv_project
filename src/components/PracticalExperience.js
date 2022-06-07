import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

export class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="work-information">
        {createFormElements(
          this.props.currentState,
          this.props.checkChange,
          "workInformation",
          this.props.deleteItems
        )}

        <button id="workExperience" onClick={this.props.addExperience}>
          +
        </button>
      </div>
    );
  }
}

export default PracticalExperience;
