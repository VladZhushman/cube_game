import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Scores extends Component {
    constructor() {
        super();


    }


    eachUser = (item, index) => {
        return(
            <TableRow>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{item.points}</TableRowColumn>
            </TableRow>
        );
    };

    render() {
        return (
            <div className="Stats">
            <Table w>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>#</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Points</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>

                {this.props.users.map(this.eachUser)}
                </TableBody>
            </Table>
            </div>

        );

    }
}

export default Scores;
