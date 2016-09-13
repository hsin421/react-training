import React from 'react';
import { render } from 'react-dom';

// const App = ({ heading }) => React.createElement(
// 	'h1', {className: heading}, 'Hello Universe'
// );

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			heading: 'hehe',
			isH2Clicked: false,
			h1FontSize: 30
		};
	}

	handleChangingColor = () => {
		this.setState( 
			{
				isH2Clicked: !this.state.isH2Clicked
			} 
		);
	}

	handleDecreaseFontSize = () => {
		this.setState({
			h1FontSize: this.state.h1FontSize - 1
		});
	}

	render() {

		const myStyle = {
			backgroundColor: this.state.isH2Clicked ? 'green' : 'red',
			color: 'white',
			counterFontSize: { fontSize: 40 }
		};

		return (
			<div>
				<h1 
					style={ {fontSize: this.state.h1FontSize} }
					onMouseOver={this.handleDecreaseFontSize}
				>
					Hello World 
				</h1>
				<h2 
					style={myStyle}
					onClick={this.handleChangingColor}
				> 
					Hello React 
				</h2>
				<h3> My counter </h3>
				<div style={myStyle.counterFontSize}>
					<button> + </button> 
					<span> 0 </span>
					<button> - </button>
				</div>
			</div>
		);
	}
}

render(React.createElement(App, {heading: 'AMEX'}), document.getElementById('app'));
