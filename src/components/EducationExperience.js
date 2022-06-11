import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

export class EducationExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="educationInformation">
        {createFormElements(
          this.props.currentState,
          this.props.checkChange,
          "educationInformation",
          this.props.deleteItems
        )}

        <button
          className="educationInformation"
          onClick={this.props.addExperience}
        >
          +
        </button>
      </div>
    );
  }
}

export default EducationExperience;
