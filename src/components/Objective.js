import React, { Component } from "react";

class Objective extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="objectiveInformation">
        <textarea
          onChange={this.props.checkChange}
          placeholder="Objective"
        ></textarea>
      </div>
    );
  }
}

export default Objective;
