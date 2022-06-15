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
          value={this.props.currentState.objectiveInformation}
        ></textarea>
      </div>
    );
  }
}

export default Objective;
