import React, {Component} from 'react';

class Cube extends Component {
    constructor() {
        super();
        this.avatar = "some url!";

    }

    handler = () => {
        alert("it works");
        alert(this.avatar);
    }

    render() {
        return(
            (2 > this.props.number)? <div className='Cube' onClick={this.handler}>Cube # {this.props.number}</div>:
                                        <h1>Нету</h1>
        )
    }
}

export default Cube;