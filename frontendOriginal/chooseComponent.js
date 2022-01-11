import React from 'react';
import ButtonComponent from './buttonComponent.js';

export default class ChooseComponent extends React.Component{
	constructor(props){
		super(props);
		this.functionHandler = this.props.functionHandler.bind(this);
	}

	render(){

		let difficulties = ['Easy','Medium','Hard'];
		let buttons = [];

		for(let i = 0;i < 3;i++){
			buttons.push(<ButtonComponent functionHandler = {this.functionHandler} text = {difficulties[i]}/>);
		}

		return (
			<div>
				<p> Choose difficulty </p>
				<div className = 'choose'>
					
					{buttons}
				</div>
			</div>
		);
	}


}
