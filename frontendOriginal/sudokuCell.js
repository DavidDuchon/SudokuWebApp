import React from 'react';

export default class SudokuCell extends React.Component{

	constructor(props){
		super(props);
		this.x = this.props.x;
		this.y = this.props.y;
		this.original = this.props.original;
		
		this.handleChange = this.props.onChangeHandler.bind(this);
	}

	render(){
		this.wrong = this.props.wrong;
		this.wrongMode = this.props.wrongMode;
		this.value = this.props.value;

		if (this.value == 0){
			this.value = '';
		}

		if(!this.original && this.wrong && this.wrongMode){
			this.className = 'sudokuCellWrong';
		}
		else{
			this.className = 'sudokuCell'
		}

		return (
			<div className = {this.className}>

				<input onChange = {(e) => this.handleChange(e,this.x,this.y)} type = 'text' maxLength = {1} value = {this.value} readOnly = {this.original}/>				
				
			</div>);
	}
}
