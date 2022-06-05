import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="general-information">
        {createFormElements(
          this.props.currentState,
          this.props.checkChange,
          "generalInformation"
        )}
      </div>
    );
  }
}

export default GeneralInformation;
