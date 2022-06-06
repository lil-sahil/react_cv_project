import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Preview from "./components/Preview";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import "./index.css";
import { toHaveAccessibleName } from "@testing-library/jest-dom/dist/matchers";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // General Information
      generalInformation: [
        {
          name: "",
          email: "",
          phoneNumber: "",
          country: "",
          id: 1,
        },
      ],

      educationInformation: [
        {
          schoolName: "",
          graduationDate: "",
          degree: "",
          id: 1,
        },
      ],

      // Education Information

      // Work Information
      // jobTitle: "",
      // yearsOfExperience: "",
      // workEnteries: 1,
    };

    this.changeField = this.changeField.bind(this);
    this.addItems = this.addItems.bind(this);
  }

  // Check for change of fields
  changeField(e) {
    let informationBucket = e.target.parentNode.className;
    let elementId = parseInt(e.target.parentNode.parentNode.className);
    let informationType = e.target.className;

    this.setState((prevState) => {
      let filteredItem = prevState[`${informationBucket}`].filter(
        (item) => item.id === elementId
      );

      filteredItem[0][informationType] = e.target.value;

      return filteredItem;
    });
  }

  // Add items to state based on button id
  addItems(e) {
    // Education Experince
    if (e.target.id === "educationExperience") {
      this.setState((prevState) => {
        let items = prevState["educationInformation"];
        items.push({
          schoolName: "",
          graduationDate: "",
          degree: "",
        });

        let idNumber = 1;
        items = items.map((item) => {
          item.id = idNumber;
          idNumber++;

          return item;
        });
        return items;
      });
    }
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
            addExperience={this.addItems}
          ></EducationExperience>

          {/* <PracticalExperience
            checkChange={this.changeField}
            currentState={this.state}
          ></PracticalExperience> */}
        </div>

        <div id="preview-screen" className="container-col">
          <Preview currentState={this.state}></Preview>
        </div>
      </div>
    );
  }
}

export default App;
