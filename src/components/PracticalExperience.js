import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

// utils
import { createFormElements } from "../utils/createFormElements";

export class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.bucket}>
        {createFormElements(
          this.props.currentState,
          this.props.checkChange,
          this.props.bucket,
          this.props.deleteItems,
          this.props.addDescription,
          this.props.deleteDescription
        )}

        <button
          className={`${this.props.bucket} add-btn-large`}
          onClick={this.props.addExperience}
        >
          <FaPlus />
        </button>
      </div>
    );
  }
}

export default PracticalExperience;
