import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Scores from "./Scores";
import Info from "./info";



class Timer extends Component {
    constructor() {
        super();

        let us = localStorage.users ? JSON.parse(localStorage.users) : [];
        this.state = {time: 60, open: false, isEnd: false, users: us};
    }

    addUser = () => {

        let oldUsersList = this.state.users;
        oldUsersList.push(
            {
                name: this.state.textFieldValue,
                points: this.props.result,
            }
        );

        oldUsersList.sort((a, b) => {
            return b.points - a.points;
        });

        localStorage['users'] = JSON.stringify(oldUsersList);

        this.setState({users: oldUsersList});

    };



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
        //give info into scores and block click for field
        this.addUser();
        this.setState({isEnd: true});
        let elem = document.getElementById('gamefield');
        elem.className = 'GameField disabled';

    };

    handleNewGame = () => {
      this.props.resetHandler();
      this.setState({time: 60});

        let elem = document.getElementById('gamefield');
        elem.className = 'GameField disabled';
        clearInterval(this.timerId);
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
        let elem = document.getElementById('gamefield');
        elem.className = 'GameField disabled';
        clearInterval(this.timerId);

    };

    startTimer = () => {
        this.timerId = setInterval(this.increment, 1000);
        let elem = document.getElementById('gamefield');
        elem.className = 'GameField';
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

                   <div className='one'>
                       <Info />
                   </div>

                   <div className='two'>
                   <RaisedButton
                       label="New Game"
                       primary={true}
                       onClick={this.handleNewGame}
                   />
                   </div>
                   <RaisedButton
                       label="Start"
                       primary={true}
                       onClick={this.startTimer}
                       className='three'
                   />
                   <RaisedButton
                       label="Stop"
                       primary={true}
                       onClick={this.stopTimer}
                       className='four'
                   />

                   <TextField
                       disabled={true}
                       hintText={str}
                       underlineShow={false}
                       className='five'
                   />

                   <Scores users={this.state.users} />


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