import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Preview from "./components/Preview";
import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInformation: {
        isRadio: {},

        isField: {
          name: "",
          email: "",
          phoneNumber: "",
          country: "",
        },
      },
      educationInformation: {
        isRadio: {
          educationLevel: "",
          degree: "",
        },
        isField: {
          schoolName: "",
          graduationDate: "",
        },
      },
      workInformation: {
        isRadio: {},
        isField: {
          jobTitle: "",
          yearsOfExperience: "",
        },
      },
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
        <GeneralInformation
          checkChange={this.changeField}
          currentState={this.state}
        ></GeneralInformation>
        <Preview currentState={this.state}></Preview>
      </div>
    );
  }
}

export default App;
