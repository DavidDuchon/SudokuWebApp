import React from 'react';
import SudokuCell from './sudokuCell.js';

export default class SudokuBoard extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.props.onChangeHandler.bind(this);
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
			{this.board}
			</div>);
	}

}
