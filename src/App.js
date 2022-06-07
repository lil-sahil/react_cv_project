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

      workInformation: [
        {
          jobTitle: "",
          yearsOfExperience: "",
          id: 1,
        },
      ],
    };

    this.changeField = this.changeField.bind(this);
    this.addItems = this.addItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
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
    // Determine which type of objec to add to state
    let bucket = e.target.id;
    console.log(bucket);
    let objectToAdd = {};
    if (bucket === "educationExperience") {
      objectToAdd = {
        schoolName: "",
        graduationDate: "",
        degree: "",
      };
      bucket = "educationInformation";
    } else if (bucket === "workExperience") {
      objectToAdd = {
        jobTitle: "",
        yearsOfExperience: "",
      };

      bucket = "workInformation";
    }

    // Set the state with the object
    this.setState(
      {
        [bucket]: this.state[bucket].concat(objectToAdd),
      },
      () => {
        let idNumber = 1;
        this.setState({
          [bucket]: this.state[bucket].map((item) => {
            item.id = idNumber;
            idNumber++;
            return item;
          }),
        });
      }
    );

    // Education Experience
    // if (e.target.id === "educationExperience") {
    //   this.setState(
    //     {
    //       educationInformation: this.state.educationInformation.concat({
    //         schoolName: "",
    //         graduationDate: "",
    //         degree: "",
    //       }),
    //     },
    //     () => {
    //       let idNumber = 1;
    //       this.setState({
    //         educationInformation: this.state.educationInformation.map(
    //           (item) => {
    //             item.id = idNumber;
    //             idNumber++;
    //             return item;
    //           }
    //         ),
    //       });
    //     }
    //   );
    // }

    // Work Information
    // if (e.target.id === "workExperience") {
    //   this.setState(
    //     {
    //       workInformation: this.state.workInformation.concat({
    //         jobTitle: "",
    //         yearsOfExperience: "",
    //       }),
    //     },
    //     () => {
    //       let idNumber = 1;
    //       this.setState({
    //         workInformation: this.state.workInformation.map((item) => {
    //           item.id = idNumber;
    //           idNumber++;
    //           return item;
    //         }),
    //       });
    //     }
    //   );
    // }
  }

  // Delete items based on id
  deleteItems(e) {
    let itemId = parseInt(e.target.parentNode.className);
    let informationBucket = e.target.nextSibling.className;

    this.setState({
      [informationBucket]: this.state[informationBucket].filter(
        (x) => x.id !== itemId
      ),
    });

    // this.setState(
    //   (prevState) => {
    //     let items = prevState[informationBucket];

    //     items = items.filter((x) => x.id !== itemId);
    //     console.log(prevState);
    //   },
    //   () => console.log(this.state)
    // );
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
            deleteItems={this.deleteItems}
          ></EducationExperience>

          <PracticalExperience
            checkChange={this.changeField}
            currentState={this.state}
            addExperience={this.addItems}
            deleteItems={this.deleteItems}
          ></PracticalExperience>
        </div>

        <div id="preview-screen" className="container-col">
          <Preview currentState={this.state}></Preview>
        </div>
      </div>
    );
  }
}

export default App;
