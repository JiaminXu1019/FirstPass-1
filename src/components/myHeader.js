import React from 'react'

class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

    render () {
      return (
        <div>
          <div className="header">
          <div className="row">
              <div className="col-8">
                <div className='fp-logo'>
                  <div id="title">FirstPass</div>
                  <div id="subtitle">For UCLA Students</div>
                </div>
              </div>
              <div className="col-2">
                  <a class= "btn" id='btn1' href="/">
                    <p>
                      Home
                    </p>
                  </a>
              </div>
              <div className="col-2">
                  <a class= "btn" id='btn1' href="/feedback">
                    <p>
                      Feedback
                    </p>
                  </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default MyHeader