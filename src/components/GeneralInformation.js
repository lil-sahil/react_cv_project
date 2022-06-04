import React, { Component } from "react";

// utils
import { createFormElements } from "../utils/createFormElements";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemNames = ["name", "email", "phoneNumber", "country"];
    return (
      <div id="general-information">
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

export default GeneralInformation;
