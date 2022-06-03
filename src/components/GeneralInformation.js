import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  }

  // Try using Map?
  createFormElements() {
    // console.log(this.props.currentState);
    for (let info in this.props.currentState) {
      // Radio fields
      for (let typeInfo in this.props.currentState[info]) {
        if (typeInfo === "isRadio") {
          for (let radioField in this.props.currentState[info][typeInfo]) {
            <input type="radio" id={`${radioField}`}></input>;
          }
        }
      }
    }
  }

  // Create a method to render the label and input using the current state prop.

  render() {
    return (
      <div>
        <div>Enter CV Details in the forms below</div>
        {this.createFormElements()}
        <form id="general-information">
          <label>Name</label>
          <input
            type="text"
            id="name"
            onChange={this.props.checkChange}
          ></input>

          <label>Email</label>
          <input
            type="text"
            id="email"
            onChange={this.props.checkChange}
          ></input>

          <label>Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            onChange={this.props.checkChange}
          ></input>

          <label>Country</label>
          <input
            type="text"
            id="country"
            onChange={this.props.checkChange}
          ></input>
        </form>

        <form id="educational-experience">
          <label>Education Level</label>
          {/* <input
            type="radio"
            id="educationLevel"
            onChange={this.props.checkChange}
            value="University"
          ></input> */}

          <label>School Name</label>
          <input
            type="text"
            id="schoolName"
            onChange={this.props.checkChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
