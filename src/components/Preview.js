import React, { Component } from "react";

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
          <div id="Written Information">
            <div>
              Name: {this.props.currentState.generalInformation[0].name}
            </div>
            <div>Email </div>
            <div>Phone Number </div>
            <div>Country </div>
          </div>

          <div id="image"></div>
        </div>

        {/* Educational Experience */}
        <div id="preview-educational-information">
          <div>School Name: </div>
          <div>Graduation Date: </div>
          <div>Degree </div>
        </div>

        {/* Work Experience */}
        <div id="preview-work-information">
          <div>Job Title: </div>
          <div>Years of Experience: </div>
        </div>
      </div>
    );
  }
}

export default Preview;
