import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

export class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemNames = ["jobTitle", "yearsOfExperience"];
    return (
      <div id="work-information">
        <form>
          {createFormElements(
            this.props.currentState,
            this.props.checkChange,
            itemNames
          )}
        </form>
      </div>
    );
  }
}

export default PracticalExperience;
