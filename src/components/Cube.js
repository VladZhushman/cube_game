import React, {Component} from 'react';

class Cube extends Component {
    constructor() {
        super();


    }

    handler = () => {
        alert("it works");

    }

    render() {
        return(
            (2 > this.props.number)? <div className='Cube' onClick={this.handler}>Cube # {this.props.number}</div>:
                                        <h1>Нету</h1>
        )
    }
}

export default Cube;