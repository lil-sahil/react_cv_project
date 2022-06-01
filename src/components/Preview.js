import React, { Component } from "react";
import PreviewHeader from "./PreviewHeader";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div id="preview-screen">
        <PreviewHeader data={this.props.currentState}></PreviewHeader>
        {/* {this.props.currentState.name}
        {this.props.currentState.email} */}
      </div>
    );
  }
}

export default Preview;
