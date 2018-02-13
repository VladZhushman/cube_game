import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';




class Timer extends Component {
    constructor() {
        super();
        this.state = {time: 60, open: false};
    }

    increment = () => {
        if(this.state.time !== 0) {
            this.setState({time: this.state.time - 1});
        } else {
          this.stopTimer();
          this.setState({open: true});

        }

    };

    handleSubmit = () => {
        this.setState({open: false});

    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleTextFieldChange =(e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    };

    stopTimer = () => {
        clearInterval(this.timerId);

    };

    startTimer = () => {
        this.timerId = setInterval(this.increment, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
        />,
        <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleSubmit}
        />,
    ];

    render() {

       let str = 'Time left: ' + this.state.time;

           return (
               <div className='Timer'>

                   <RaisedButton label="Start" primary={true} onClick={this.startTimer}/>
                   <RaisedButton label="Stop" primary={true} onClick={this.stopTimer}/>
                   <TextField
                       disabled={true}
                       hintText={str}
                       underlineShow={false}
                   /><br/>

                   <Dialog
                       title="Dialog With Actions"
                       actions={this.actions}
                       modal={false}
                       open={this.state.open}
                       onRequestClose={this.handleClose}
                   >
                       Your's score = {this.props.result}
                       <br/>
                       <TextField
                           hintText='Input your name'
                           onChange={this.handleTextFieldChange}
                       /><br/>

                   </Dialog>

               </div>
           );
       }

}

export default Timer;