// import { ReactComponent } from '*.svg';
import React from 'react';
import fire from './fire.js';
// Connection to backend
import axios from 'axios'
import Login from './Login.js'

// Components
import StandingRadioButton from './standing-radio-button'
import ClassDropdown from './classDropdown'
import dates from '../backend/JSON_Data/dates.json'
//import { response } from 'express';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const serverURL = 'http://localhost:5000';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "",
      selectedOption: "",
      results: "",
      resultsReceived: false,
      user: null
    };

    this.authListener = this.authListener.bind(this);
    this.saveClasses = this.saveClasses.bind(this);
    this.logout = this.logout.bind(this);

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
        [e.target.name]: e.target.value,
    });
  };

  
  selectChange = (val, name) => {
    this.setState({
        [name]: val,
        resultsReceived: false
    });
  }

  //Gets an array of times when classes fill up and stores in this.state.results
  //Note: the array is in the same order as the classes array in the state 
  //9999 means the class never fills up
  getClasses = async () => {
    return await axios.post(serverURL + '/classesData', {classes: this.state.classes})
    .then((response) => {
      this.setState({
        results: response.data,
        resultsReceived: true
      }, () => {
        console.log(`Rearranged classes returned: ${this.state.results}`)
      })
    })
    .catch((error)=> {
      console.log(error)
    });
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        var data = null;
        fire.firestore().collection('users').doc(this.state.user.email).get("classes")
        
        .then((doc)=> 
        {
          if (doc.exists){
            console.log(doc.data());
            data = doc.data();
            this.setState({
              classes: data.classes
             });
          } else {
            console.log("No such document!")
          }
        })
        .catch(function(error) 
        {
            console.log("Error getting document:", error)
        });

       
       
      } else {
        this.setState({ user: null, classes: ""});
      }
    })
  }

  saveClasses()
  {
    console.log(this.state.classes);

      fire.firestore().collection('users').doc(this.state.user.email).set({
        classes: this.state.classes
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
  }

  logout() {
    fire.auth().signOut();
  }

  render() {

    // convert JS Object of input classes into an array
    const gotResults = this.state.resultsReceived;
    const arrayOfClassObjects = this.state.classes;
    var arrayOfClasses = [];
    const fillUpDates = this.state.results;
    if(gotResults) {
      for(var i = 0; i < arrayOfClassObjects.length; i++) {
        var name = arrayOfClassObjects[i]["value"];
        if (fillUpDates[i] !== 9999) {
          name = name.concat("(fills up), ");
        } else {
          name = name.concat(", ");
        } 
        arrayOfClasses.push(name);
      }
    }


    return (
      <>
      <div className="radio-buttons">
        <div className="box">
          <p id="standing">Standing</p>
          <StandingRadioButton 
            onValueChange = {this.onValueChange}
            formSubmit = {this.formSubmit}
            parentState = {this.state.selectedOption}
          />
        </div>
        <ClassDropdown 
          handleChange = {this.handleChange}
          selectChange = {this.selectChange}
          classes = {this.state.classes}
        />
        <button onClick={() => this.getClasses()}>
          Click me
        </button>
        <p id="classes">First Pass: {arrayOfClasses}</p>

      </div>


      { this.state.user ? ( 
        <div>
        <button onClick = {()=> this.saveClasses()}>Save Classes </button>

        <p>You Are Logged In</p>
        <button onClick = {()=>this.logout()}>Logout</button>
        </div>) 

        : ( <Login /> ) }
      
       </>
    );
  } 
}
export default Home