import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Preview from "./components/Preview";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // General Information
      name: "",
      email: "",
      phoneNumber: "",
      country: "",

      // Education Information
      schoolName: "",
      graduationDate: "",
      degree: "",

      // Work Information
      jobTitle: "",
      yearsOfExperience: "",
    };

    this.changeField = this.changeField.bind(this);
  }

  // Check for change of fields
  changeField(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-row">
        <div id="information-enter-screen">
          <GeneralInformation
            checkChange={this.changeField}
            currentState={this.state}
          ></GeneralInformation>

          <EducationExperience
            checkChange={this.changeField}
            currentState={this.state}
          ></EducationExperience>
        </div>

        <PracticalExperience
          checkChange={this.changeField}
          currentState={this.state}
        ></PracticalExperience>

        <div id="preview-screen" className="container-col">
          <Preview currentState={this.state}></Preview>
        </div>
      </div>
    );
  }
}

export default App;
