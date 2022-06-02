import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  }

  createFormElements() {
    // console.log(this.props.currentState);
    for (let i in this.props.currentState) {
      console.log(i);
    }
  }

  // Create a method to render the label and input using the current state prop.

  render() {
    this.createFormElements();
    return (
      <div>
        <div>Enter CV Details in the forms below</div>

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
          <input
            type="text"
            id="educationLevel"
            onChange={this.props.checkChange}
          ></input>

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
