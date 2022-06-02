import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, email, phoneNumber, country } = this.props.currentState;
    return (
      <div id="preview-screen">
        {/* Preview Header */}
        <div id="preview-header">
          <div id="main-title">CV Application</div>
        </div>

        {/* General Information */}
        <div id="general-information">
          <div>{name}</div>
          <div>{email}</div>
          <div>{phoneNumber}</div>
          <div>{country}</div>
        </div>
      </div>
    );
  }
}

export default Preview;
