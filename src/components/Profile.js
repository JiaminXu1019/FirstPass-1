import React from 'react';

class Profile extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        console.log('props.classes: ' + this.props.classes)
        return (
            <div>
                <h1>HELLO WORLD :D</h1>
            </div>        
        )
    }
}

export default Profile