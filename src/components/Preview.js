import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      name,
      email,
      phoneNumber,
      country,
      schoolName,
      graduationDate,
      degree,
      jobTitle,
      yearsOfExperience,
    } = this.props.currentState;

    return (
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
          <div>School Name: {schoolName}</div>
          <div>Graduation Date: {graduationDate}</div>
          <div>Degree {degree}</div>
        </div>
      </div>
    );
  }
}

export default Preview;
