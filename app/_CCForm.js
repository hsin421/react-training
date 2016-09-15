
import React from 'react';
import { MyInput } from './main.js';

type State = {
	cardNumber: string,
	expYear: string,
	zipcode: string,
	isInvalid: boolean
};

type Props = {
	// handleSubmit: Function
	handleSubmit: (argument: State) => void
};

export default class CreditCardForm extends React.Component {
	props: Props;
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			cardNumber: '',
			expYear: '',
			zipcode: '',
			isInvalid: false
		};
	}

	handleCCNumberInput = (event: { target: { value: string}}) => {
		this.setState({ cardNumber: event.target.value });
	}

	handleExpYearInput = (event: { target: { value: string}}) => {
		this.setState({ expYear: event.target.value });
	}

	handleZipcodeInput = (event: { target: { value: string}}) => {
		this.setState({ zipcode: event.target.value });
	}

	handleSubmit = () => {
		const { cardNumber } = this.state;
		if (cardNumber.length < 14 || cardNumber.length > 16 ) {
			this.setState({ isInvalid: true })
		} else {
			this.props.handleSubmit(this.state)
		}
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state)}
				<MyInput 
					label="Credit card number"
					handleInput={this.handleCCNumberInput}
				/>
				<MyInput 
					label="Expiration Year"
					handleInput={this.handleExpYearInput}
				/>
				<MyInput 
					label="Zipcode"
					handleInput={this.handleZipcodeInput}
				/>
				{this.state.isInvalid && <p style={{color: 'red'}}>Your input is invalid </p>}
				<button onClick={this.handleSubmit}> Submit </button>
			</div>
		);
	}
}
