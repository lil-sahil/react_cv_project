import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, email, phoneNumber, country, educationLevel, schoolName } =
      this.props.currentState;
    return (
      <div id="preview-screen" className="container-col">
        <div id="preview-container">
          {/* Preview Header */}
          <div id="preview-header">
            <div id="main-title">CV Application</div>
          </div>

          {/* General Information */}
          <div id="preview-general-information">
            <div id="Written Information">
              <div>Name: {name}</div>
              <div>Email {email}</div>
              <div>Phone Number {phoneNumber}</div>
              <div>Country {country}</div>
            </div>

            <div id="image"></div>
          </div>

          {/* Educational Experience */}
          <div id="preview-educational-information">
            <div>Education Level: {educationLevel}</div>
            <div>School Name {schoolName}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
