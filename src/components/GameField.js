import React, {Component} from 'react';
import Cube from "./Cube";

class GameField extends Component {
    constructor() {
        super();
        this.state = {cubes: []};
        for(let i = 0; i < 10; i++) {
            this.generateNewCube();
        }
        this.eachCube = this.eachCube.bind(this);
       // this.removeCube = this.removeCube.bind(this);
    }

    generateCubeStyle() {

        let colors = ['red', 'green', 'blue', 'yellow'];
        let top = Math.floor(Math.random()*450);
        let left = Math.floor(Math.random()*450);
        let size = 50;
        let color = colors[Math.floor(Math.random()*4)];
        let cubeStyle = {
            width: size+'px',
            height: size+'px',
            top: top+'px',
            left: left+'px',
            background: color,
            position: 'absolute',
        };

        return cubeStyle;

    }

    generateNewCube(){
        let newCubes = this.state.cubes;
        //let index = newCubes.length;
        let newCube = this.generateCubeStyle();
        newCubes.push(
           //<Cube style={this.generateCubeStyle()} index={index} removeCube={this.removeCube} />
            {style: newCube}
        );
        this.setState({cubes: newCubes});
    }

    randNewCubs = () => {
        let count = Math.floor(Math.random()*3);
        for (let i = 0; i < count; i++){
            this.generateNewCube();
        }
    }

    removeCube = (i) => {
       let newArray = this.state.cubes;
       newArray.splice(i,1);
       this.setState({cubes: newArray});
       this.randNewCubs();
    }

    eachCube(item, index){
     return (
         <Cube style={item.style} index={index} removeCube={this.removeCube} />
        );
    }

    render() {
        return (
            <div className='GameField'>
                {this.state.cubes.map(this.eachCube)}
            </div>
        )

    }
}

export default GameField;