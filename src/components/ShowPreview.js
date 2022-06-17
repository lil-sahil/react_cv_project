import React, { Component } from "react";

export class ShowPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      windowSize: window.innerWidth,
    };

    this.mapping = {
      true: "Edit",
      false: "See Preview",
    };

    this.checkWindowSize = this.checkWindowSize.bind(this);
  }

  // Add event listner on window resize when the component mounts.
  componentDidMount() {
    window.addEventListener("resize", this.checkWindowSize);
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

      document.querySelector("body").classList.remove("width-control");
    } else {
      this.setState({
        visible: true,
      });

      document.querySelector("#preview-screen").classList.remove("hide");
      document.querySelector("#information-enter-screen").classList.add("hide");
      document.querySelector("body").classList.add("width-control");
    }
  }

  // Check window size
  checkWindowSize() {
    this.setState({
      windowSize: window.innerWidth,
    });
  }

  render() {
    return this.state.windowSize <= 1500 ? (
      <div id="show-preview-btn">
        <button onClick={this.showPreview.bind(this)}>
          {this.mapping[this.state.visible]}
        </button>
      </div>
    ) : (
      <></>
    );
  }
}

export default ShowPreview;
