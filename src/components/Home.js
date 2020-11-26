// import { ReactComponent } from '*.svg';
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './radio-button.css';

import Select from 'react-select';
import './classDropdown.css'
import{class_names} from './classNames.js';

class StandingRadioButton extends React.Component {
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

class ClassDropdown extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          class1: "",
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

  selectChange = (val, name) => {
      this.setState({
          [name]: val
      });
  }

  render() {
      console.log(this.state);
      return(
          <div className = "container">
              <form className = "inside"> 
                  <Select
                      placeholder="Search for a class"
                      isMulti
                      options={class_names}
                      search
                      value={this.state.class1}
                      onChange={val => this.selectChange(val, "class1")}
                  />
              </form> 
          </div>
      );
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: "",
      selectedOption: ""
    };
  }

  render() {
    return (
      <div className="radio-buttons">
        <StandingRadioButton /><ClassDropdown />
      </div>
    );
  } 
}
export default Home