import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Points extends Component{

    render() {
        let str = 'Points: '+ this.props.value;
        return (
        <div className='Points'>
            <TextField
                disabled={true}
                hintText={str}
                underlineShow={false}
            /><br />
        </div>
        );

    }
}

export default Points;