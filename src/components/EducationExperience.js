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
        <form>
          {createFormElements(
            this.props.currentState,
            this.props.checkChange,
            "educationInformation"
          )}
        </form>
      </div>
    );
  }
}

export default EducationExperience;
