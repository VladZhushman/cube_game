import React, {Component} from 'react';
import Cube from "./Cube";
import Points from "./Points";
import Timer from "./Timer";

class GameField extends Component {
    constructor() {
        super();
        this.state = {cubes: [], value: 0};
        for(let i = 0; i < 10; i++) {
            this.generateNewCube();
        }
        this.eachCube = this.eachCube.bind(this);
       // this.removeCube = this.removeCube.bind(this);
    }

    colors = ['red', 'green', 'blue', 'yellow'];

    generateCubeStyle() {


        let top = Math.floor(Math.random()*450);
        let left = Math.floor(Math.random()*450);
        let size = 50;
        let color = this.colors[Math.floor(Math.random()*4)];

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
    };

    removeCube = (i) => {
       let newArray = this.state.cubes;

       let value = 0;
        switch(newArray[i].style.background){


            case 'red':  value = 2;
                break;
            case 'green': value = 4;
                break;
            case 'blue': value = 3;
                break;
            case 'yellow': value = 1;
                break;

        }

       newArray.splice(i,1);
       this.setState({cubes: newArray, value: value + this.state.value});
       this.randNewCubs();
    };

    eachCube(item, index){
        let value = 0;


        switch(item.style.background){


            case 'red':  value = 2;
                break;
            case 'green': value = 4;
                break;
            case 'blue': value = 3;
                break;
            case 'yellow': value = 1;
                break;

            }


        return (
         <Cube style={item.style} index={index} value={value} removeCube={this.removeCube} />
        );
    }

    render() {
        return (
            <div className='Game'>
            <Points value={this.state.value}/>
            <Timer result={this.state.value}/>
            <div className='GameField'>
                {this.state.cubes.map(this.eachCube)}
            </div>
            </div>
        )

    }
}

export default GameField;