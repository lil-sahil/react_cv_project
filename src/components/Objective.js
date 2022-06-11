import React, { Component } from "react";

class Objective extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="objectiveInformation">
        <label>Objective</label>
        <input onChange={this.props.checkChange}></input>
      </div>
    );
  }
}

export default Objective;
