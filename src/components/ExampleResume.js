import React, { Component } from "react";

export class ExampleResume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="example-resume-btn">
        <button onClick={this.props.showExample}> Sample Resume</button>
      </div>
    );
  }
}

export default ExampleResume;
