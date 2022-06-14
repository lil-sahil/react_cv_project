import React, { Component } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="technical-skills">
        <div id="skills-form">
          <input type="input" placeholder="Enter a Skill"></input>
          <button onClick={this.props.addSkills} className="add-btn-small">
            <IoMdAddCircle />
          </button>
        </div>

        <div id="added-skills">
          {this.props.currentState.technicalSkills.map((skill) => {
            return (
              <div className="skill">
                {skill}
                <button id={skill} onClick={this.props.deleteSkill}>
                  <ImCross />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
