import React, {Component} from 'react';

class Points extends Component{

    render() {

        return (
        <div className='Points'>
            <div>Points {this.props.value}</div>

        </div>
        );

    }
}

export default Points;