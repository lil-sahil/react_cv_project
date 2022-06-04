import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

export class EducationExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemNames = ["schoolName", "graduationDate", "degree"];
    return (
      <div id="education-information">
        <form>
          {createFormElements(
            this.props.currentState,
            this.props.checkChange,
            itemNames
          )}
        </form>

        <button id="educationExperience" onClick={this.props.addExperience}>
          +
        </button>
      </div>
    );
  }
}

export default EducationExperience;
