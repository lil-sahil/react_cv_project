import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.currentState.generalInformation.isField);
    let { name, email, phoneNumber, country } =
      this.props.currentState.generalInformation.isField;
    let { schoolName, graduationDate, degree } =
      this.props.currentState.educationInformation.isField;
    let { jobTitle, yearsOfExperience } =
      this.props.currentState.workInformation.isField;

    console.log(name);
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
          <div>Education Level: {schoolName}</div>
          <div>School Name {graduationDate}</div>
          <div>School Name {degree}</div>
        </div>
      </div>
    );
  }
}

export default Preview;
