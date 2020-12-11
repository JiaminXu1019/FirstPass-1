import React from 'react'

class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

    render () {
      return (
        <div>
          <div className="header">
            <div id="title">FirstPass</div>
            <div id="subtitle">For UCLA Students</div>
            <button onClick={()=>{
              return this.props.history.push('/feedback')}} 
              type="button" 
              class="btn">Feedback
            </button>   
          </div>
        </div>
      )
    }
  }

  export default MyHeader