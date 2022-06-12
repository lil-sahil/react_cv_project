import React, { Component } from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

// Utils
import { createPreviewElements } from "../utils/createPreviewElements";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="preview-container" className="container-row">
        {/* Preview Sidebar */}
        <div id="preview-sidebar">
          {/* Preview General */}
          <div id="preview-general">
            <div className="name font-color">
              {this.props.currentState.generalInformation[0].name.toUpperCase()}
            </div>
            <div className="prof-designation">
              {
                this.props.currentState.generalInformation[0]
                  .proffessionalDesignation
              }
            </div>
            <div className="phone">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              {this.props.currentState.generalInformation[0].phoneNumber}
            </div>
            <div className="email">
              <div className="info-icon">
                <FaEnvelope />
              </div>

              {this.props.currentState.generalInformation[0].email}
            </div>
            <div className="git-hub">
              <div className="info-icon">
                <FaGithub />
              </div>

              {this.props.currentState.generalInformation[0].gitHub}
            </div>
          </div>

          {/* Preview Skills */}
          <div id="preview-skills">
            <div className="preview-sidebar-heading">
              <span>Technical Skills</span>
            </div>
            <div id="skills">
              {this.props.currentState.technicalSkills.map((skill) => {
                return <div className="skill">{skill}</div>;
              })}
            </div>
          </div>
          {/* Preview Education */}
          <div id="preview-education">
            <div className="preview-sidebar-heading">
              <span>Education</span>
            </div>

            <div id="education">
              {this.props.currentState.educationInformation.map((edu) => {
                return (
                  <div className="education-entry">
                    {edu.degree}, {edu.degreeDescription}
                    <br></br>
                    {edu.schoolName}
                    <br></br>
                    {edu.attendDates} | {edu.city}, {edu.stateProvince},{" "}
                    {edu.country}
                    <br></br>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div id="preview-main">
          {/* Preview Objective */}
          <div id="preview-objective">
            <div className="preview-main-heading">
              <span className="preview-heading-color">Obj</span>ective
            </div>

            <div id="objective-entry">
              {this.props.currentState.objectiveInformation}
            </div>
          </div>
          {/* Preview Work Experience */}
          <div id="preview-work-experience">
            <div className="preview-main-heading">
              <span className="preview-heading-color">Work</span> Experience
            </div>
          </div>

          {/* Preview Projects */}
          <div id="preview-project-experience">
            <div className="preview-main-heading">
              <span className="preview-heading-color">Project</span> Experience
            </div>
          </div>
        </div>

        {/* General Information */}
        {/* Skills */}
        {/* Education */}

        {/* Preview Main */}
        {/* Preview Objective */}
        {/* Preview Work Experience */}
        {/* Preview Project Experience */}

        {/* Preview Header */}
        {/* <div id="preview-header">
          <div id="main-title">CV Application</div>
        </div> */}

        {/* General Information */}
        {/* <div id="preview-general-information">
          {createPreviewElements(this.props.currentState, "generalInformation")}

          <div id="image"></div>
        </div> */}

        {/* Educational Experience */}
        {/* <div id="preview-educational-information">
          {createPreviewElements(
            this.props.currentState,
            "educationInformation"
          )}
        </div> */}

        {/* Work Experience */}
        {/* <div id="preview-work-information">
          {createPreviewElements(this.props.currentState, "workInformation")}
        </div> */}
      </div>
    );
  }
}

export default Preview;
