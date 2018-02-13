import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Info extends Component {

    constructor() {
        super();
        this.state = {open: false};
    }

    handleClose = () => {
        this.setState({open: false});
    };

    handleInfo = () => {
        this.setState({open: true});
    };

    actions = [
        <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleClose}
        />
    ];

    render() {
        return (

        <div>
            <FlatButton
            label="Game Info"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleInfo}
            />

            <Dialog
            title="Game info"
            actions={this.actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
                <h1>Rules</h1>
                <ul>
                    <li>Yellow cube = 1 point</li>
                    <li>Red cube = 2 points</li>
                    <li>Blue cube = 3 points</li>
                    <li>Green cube = 4 points</li>
                </ul>
            <br/>


        </Dialog>
       </div>
        );
    }
}

export default Info;