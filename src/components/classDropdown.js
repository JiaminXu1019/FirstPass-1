import React from 'react';
import SelectSearch from 'react-select-search';
import Select from 'react-select';
import './classDropdown.css'
import{class_names} from './classNames.js';



class ClassDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            class1: "",
            class2: "",
            class3: ""
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

export default ClassDropdown