import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import './checkbox.css'

const cboxes = [ " Freshman", " Sophomore", " Junior", " Senior" ];

// The app consists of check-boxes and a compnent that renders
// depending on the value of the check-boxes
class Checkboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: {}
    };
  }

  handleChange(key, event) {
    let s=this.state.check;
    s[key]=event.target.checked;
    this.setState({check: s});
  }

  // Renders all of the check-boxes
  renderChecks() {
    return cboxes.map(
      k =>
	<Form.Check
      type='checkbox'
      label={k}
      onChange={this.handleChange.bind(this, k)}
      key={k}
	/> );
  }

  render() {
    return (
	<div className="standing-container">
	<div className="standing">Class Standing</div>
	{this.renderChecks() }

	</div>
    );
  }
}

export default Checkboxes;