import React, { Component } from "react";

class PreviewHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="preview-header">
        <div>{this.props.data.name}</div>
        <div>{this.props.data.email}</div>
        <div>{this.props.data.phoneNumber}</div>
        <div>{this.props.data.country}</div>
      </div>
    );
  }
}

export default PreviewHeader;
