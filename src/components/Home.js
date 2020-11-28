// import { ReactComponent } from '*.svg';
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './radio-button.css';

import Select from 'react-select';
import './classDropdown.css'
import{class_names} from './classNames.js';

class ClassDropdown extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          classes: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.selectChange = this.selectChange.bind(this);
  }

  handleChange = e => {
      this.setState({  //
          [e.target.name]: e.target.value
      });
  };

  selectChange = (val, name) => {
      this.setState({  
          [name]: val
      });
  }

  render() {
      //var selectChange = this.props.selectChange;
      return(
          <div className = "container">
              <form className = "inside"> 
                  <Select
                      placeholder="Search for a class"
                      isMulti
                      options={class_names}
                      search
                      value={this.state.class1}
                      //onChange={val1 => this.selectChange(val1, "classes") }
                      onChange={val => this.props.selectChange(val, "classes")}   ////////
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
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }
  //standingRadioButton Functions
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }
  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }
  //classDropdown Functions
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
    return (
      <div className="radio-buttons">
        <StandingRadioButton 
          onValueChange = {this.onValueChange}
          formSubmit = {this.formSubmit}
          parentState = {this.state.selectedOption}
        />
        <ClassDropdown 
          handleChange = {this.handleChange}
          selectChange = {this.selectChange}
          classes = {this.state.classes}
        />
      </div>
    );
  } 
}
export default Home