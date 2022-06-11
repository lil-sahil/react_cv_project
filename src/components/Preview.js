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
      <div id="preview-container">
        {/* Preview Sidebar */}
        <div id="preview-sidebar">
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

          <div id="preview-skills"></div>

          <div id="preview-education"></div>
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
