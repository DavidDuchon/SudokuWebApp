import React from 'react';
import SudokuCell from './sudokuCell.js';
import ButtonComponent from './buttonComponent.js';

export default class SudokuBoard extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.props.onChangeHandler.bind(this);
		this.solveHandler = this.props.solveHandler.bind(this);
		this.checkHandler = this.props.checkHandler.bind(this);
		this.newSudokuHandler = this.props.newSudokuHandler.bind(this);
	}


	render(){

		this.wrongMode = this.props.wrongMode;

		this.board = []


		for (let i = 0;i < 9;i++){

			for (let j = 0;j < 9;j++){
				let currentCell = this.props.sudoku[i*9 + j];

				this.board.push(<SudokuCell x = {j} y = {i} onChangeHandler = {this.handleChange} value = {currentCell.value} original = {currentCell.original} wrong = {currentCell.wrong} wrongMode = {this.wrongMode} />);
			}
		}

		return (
			<div className = 'sudokuBoard'>
				<div className = 'board'>
					{this.board}
				</div>
				
				<div className = 'buttons'>

					<ButtonComponent functionHandler = {this.solveHandler} text = 'Solve'/>
					<ButtonComponent functionHandler = {this.checkHandler} text = 'Check'/>
					<ButtonComponent functionHandler = {this.newSudokuHandler} text = 'New Puzzle'/>
				
				</div>
			</div>);
	}

}
