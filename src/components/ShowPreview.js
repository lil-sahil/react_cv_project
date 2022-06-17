import React, { Component } from "react";

export class ShowPreview extends Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };

    this.mapping = {
      true: "Edit",
      false: "See Preview",
    };
  }

  showPreview() {
    if (this.state.visible === true) {
      this.setState({
        visible: false,
      });

      document.querySelector("#preview-screen").classList.add("hide");

      document
        .querySelector("#information-enter-screen")
        .classList.remove("hide");
    } else {
      this.setState({
        visible: true,
      });

      document.querySelector("#preview-screen").classList.remove("hide");
      document.querySelector("#information-enter-screen").classList.add("hide");
    }
  }

  render() {
    return (
      <div id="show-preview-btn">
        <button onClick={this.showPreview.bind(this)}>
          {this.mapping[this.state.visible]}
        </button>
      </div>
    );
  }
}

export default ShowPreview;
