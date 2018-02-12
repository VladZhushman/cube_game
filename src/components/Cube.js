import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Cube extends Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
    }
    handler(){
        this.props.removeCube(this.props.index);
    }

    render() {
        return(
             <div className='Cube' style={this.props.style} onClick={this.handler}>

                 </div>

        )
    }
}

export default Cube;