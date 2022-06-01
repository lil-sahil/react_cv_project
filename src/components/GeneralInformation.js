import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default GeneralInformation;
