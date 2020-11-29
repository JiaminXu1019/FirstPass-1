import React, { Component } from "react";
import './radio-button.css';

class StandingRadioButton extends React.Component {
  constructor(props) {
    super(props);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.props.parentState)
  }

  render() {
    return (
    <div className = "radio-container">
      <form id = "form" onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Freshman"
              checked={this.props.parentState === "Freshman"}
              onChange={this.props.onValueChange}
            />
            Freshman
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Sophomore"
              checked={this.props.parentState === "Sophomore"}
              onChange={this.props.onValueChange}
            />
            Sophomore
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Junior"
              checked={this.props.parentState === "Junior"}
              onChange={this.props.onValueChange}
            />
            Junior
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Senior"
              checked={this.props.parentState === "Senior"}
              onChange={this.props.onValueChange}
            />
            Senior
          </label>
        </div>

        {/* <div className="selected">
          Selected option is : {this.props.parentState.selectedOption}
        </div>  */}
      </form>
        </div>
    );
  }
}

export default StandingRadioButton;