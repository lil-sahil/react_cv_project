import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

export class EducationExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="education-information">
        {createFormElements(
          this.props.currentState,
          this.props.checkChange,
          "educationInformation",
          this.props.deleteItems
        )}

        <button id="educationExperience" onClick={this.props.addExperience}>
          +
        </button>
      </div>
    );
  }
}

export default EducationExperience;
