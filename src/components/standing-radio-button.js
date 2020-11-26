import React, { Component } from "react";
import './radio-button.css';

class StandingRadioButton extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
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
              checked={this.state.selectedOption === "Freshman"}
              onChange={this.onValueChange}
            />
            Freshman
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Sophomore"
              checked={this.state.selectedOption === "Sophomore"}
              onChange={this.onValueChange}
            />
            Sophomore
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Junior"
              checked={this.state.selectedOption === "Junior"}
              onChange={this.onValueChange}
            />
            Junior
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Senior"
              checked={this.state.selectedOption === "Senior"}
              onChange={this.onValueChange}
            />
            Senior
          </label>
        </div>
        {/* <div className="selected">
          Selected option is : {this.state.selectedOption}
        </div> */}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
        </div>
    );
  }
}

export default StandingRadioButton;