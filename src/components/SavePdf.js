import React, { Component } from "react";

export class SavePdf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="save-to-pdf">
        <button onClick={this.props.savePdf}>Export to PDF</button>
      </div>
    );
  }
}

export default SavePdf;
