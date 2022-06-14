import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

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
          className="educationInformation add-btn-large"
          onClick={this.props.addExperience}
        >
          <FaPlus />
        </button>
      </div>
    );
  }
}

export default EducationExperience;
