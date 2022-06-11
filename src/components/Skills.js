import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="technical-skills">
        <div id="skills-form">
          <input type="input"></input>
          <button onClick={this.props.addSkills}>Add</button>
        </div>

        <div id="added-skills">
          {this.props.currentState.technicalSkills.map((skill) => {
            return (
              <div className="skill">
                {skill}
                <button id={skill} onClick={this.props.deleteSkill}>
                  x
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
