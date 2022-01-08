import React from 'react';
import ReactDOM from 'react-dom';
import SudokuBoard from './sudokuBoard.js';
import ChooseComponent from './chooseComponent.js';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {sudoku:[],solvedSudoku:[],wrongMode:false,isPuzzle:false}
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.fetchPuzzle = this.fetchPuzzle.bind(this);
	}

	onChangeHandler(e,x,y){

		console.log(e,x,y);

		if (!("123456789".includes(e.target.value))){
			e.target.value = '';
		}

		this.value = e.target.value ? Number(e.target.value):0;

		console.log(x,y);

		this.setState((prevState) => {
					const newSudoku = prevState.sudoku.map(
								(object,position) =>{
									if (position == (y*9 + x)){
										let newObject = {original:object.original,wrong:object.wrong,value:this.value};
										console.log(newObject);
										return newObject;
									}
									else{
										return object;
									}

								});
					return {sudoku:newSudoku,wrongMode:false};
			});

	}

	async fetchPuzzle(e){

		let difficulty = e.target.value;

		const res = await fetch('getPuzzle/' + difficulty);

		const response  = await res.json();

		let sudoku = [];

		for(let i = 0;i < 9;i++){

			for(let j = 0;j < 9;j++){
				let isOriginal = true,isWrong = false;

				if (response.solvedSudoku[i][j] !== response.sudoku[i][j]){
					isOriginal = false;
					isWrong = true;

				}
				sudoku.push({original:isOriginal,wrong:isWrong,value:response.sudoku[i][j]});
			}
		}

		this.setState({sudoku:sudoku,solvedSudoku:response.solvedSudoku,isPuzzle:true});
	
	}


	render(){

		if (!this.state.isPuzzle){
			return (
				<ChooseComponent functionHandler = {this.fetchPuzzle}/>
			);
		}else{

			console.log(this.state.sudoku);
			return (
				<SudokuBoard onChangeHandler = {this.onChangeHandler} sudoku = {this.state.sudoku} wrongMode = {this.state.wrongMode}/>
			);
		}

	}
}


ReactDOM.render(<App/>,document.getElementById('root'));


