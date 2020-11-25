import React, { Component } from "react";
import './radio-button.css';

class QuarterRadioButton extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
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
      <form id="form" onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Fall"
              checked={this.state.selectedOption === "Fall"}
              onChange={this.onValueChange}
            />
            Fall
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Winter"
              checked={this.state.selectedOption === "Winter"}
              onChange={this.onValueChange}
            />
            Winter
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Spring"
              checked={this.state.selectedOption === "Spring"}
              onChange={this.onValueChange}
            />
            Spring
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Summer"
              checked={this.state.selectedOption === "Summer"}
              onChange={this.onValueChange}
            />
            Summer
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

export default QuarterRadioButton;