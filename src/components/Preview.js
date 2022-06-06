import React, { Component } from "react";

// Utils
import { createPreviewElements } from "../utils/createPreviewElements";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="preview-container">
        {/* Preview Header */}
        <div id="preview-header">
          <div id="main-title">CV Application</div>
        </div>

        {/* General Information */}
        <div id="preview-general-information">
          {createPreviewElements(this.props.currentState, "generalInformation")}

          <div id="image"></div>
        </div>

        {/* Educational Experience */}
        <div id="preview-educational-information">
          {createPreviewElements(
            this.props.currentState,
            "educationInformation"
          )}
        </div>

        {/* Work Experience */}
        <div id="preview-work-information">
          {createPreviewElements(this.props.currentState, "workInformation")}
        </div>
      </div>
    );
  }
}

export default Preview;
