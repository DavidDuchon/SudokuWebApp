import React from 'react';

export default class ButtonComponent extends React.Component{
	constructor(props){
		super(props);
		this.functionHandler = this.props.functionHandler.bind(this);
		this.text = this.props.text;
	}


	render(){

		return (
			<button value = {this.text} onClick = {this.functionHandler}>
				{this.text}
			</button>
		);

	}
}

