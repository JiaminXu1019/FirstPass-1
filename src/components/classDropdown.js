import React from 'react';
// import SelectSearch from 'react-select-search';
import Select from 'react-select';
import './classDropdown.css'
import{class_names} from './classNames.js';

class ClassDropdown extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        //var selectChange = this.props.selectChange;
        return(
            <div className = "dropdown-container">
                <form className = "inside"> 
                    <Select
                        placeholder="Search for a class"
                        isMulti
                        options={class_names}
                        search
                        value={this.props.classes}
                        onChange={val => this.props.selectChange(val, "classes")}
                    />
                </form> 
            </div>
        );
      }
  }

export default ClassDropdown