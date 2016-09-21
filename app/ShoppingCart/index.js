import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadProducts, addToCart, removeFromCart } from '../redux/shoppingCartActions'

export default class ShoppingCart extends React.Component {
	componentDidMount() {
		// call 'reactjs102.herokuapp.com/products'
		// axios, isomorphic-fetch, jquery.ajax
		// axios (data -> this.setState({ products: data}) )
		axios.get('https://reactjs102.herokuapp.com/products')
		.then( res => {
			// this.setState({ products: res.data })
			this.props.dispatch(loadProducts(res.data));
		});
	}

	handleAddToCart = (product) => {
		// this.setState({
		// 	cart: [...this.state.cart, product]
		// });
		this.props.dispatch(addToCart(product));
	}

	handleRemove = (index) => {
		// this.setState({
		// 	cart: this.state.cart.filter(
		// 		(item, itemIndex) => index !== itemIndex
		// 	)
		// })
		this.props.dispatch(removeFromCart(index));
	}

	render() {
		
		const shoppingCartStyle = {
			border: '1px solid black',
			height: 800,
			width: 400,
			position: 'fixed',
			top: 20,
			left: 750,
			zIndex: 10,
			backgroundColor: 'grey'
		};

		const products = this.props.products.map(
			product => (
				<div>
					<img src={product.image} width={100} />
					<button 
						onClick={() => this.handleAddToCart(product)}
					>
						Add To Cart 
					</button>
					<h3> { product.product } </h3>
					<p> ${ product.price } </p>
					<p> { product.description } </p>
				</div>
			)
		);

		const cartItems = this.props.cart.map(
			(item, index) => (
				<li>
					<span> { `${item.product} @ $${item.price}` } </span>
					<button onClick={() => this.handleRemove(index)}> Remove </button>
				</li>
			)
		);

		// const array = [1, 2, 3, 4];
		// const sum = array.reduce(
		// (prev, curr) => prev + curr
		//)
		// sum = 10;
		const totalPrice = this.props.cart.reduce(
			(prev, curr) => prev + curr.price, 0
		);

		return (
			<div>
				{/*<pre>{JSON.stringify(this.state, null, 2)}</pre>*/}
				<div>
					{this.props.products.length === 0 ? 'Loading...' : products }
				</div>
				<div style={shoppingCartStyle}>
					<h1> My shopping cart </h1>
					<ul>
						{cartItems}
						<p>Total: ${this.props.cart.length === 0 ? 0 : totalPrice}</p>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.shoppingCart.products,
		cart: state.shoppingCart.cart
	}
}

let ShoppingCartApp = connect(mapStateToProps)(ShoppingCart);
export default ShoppingCartApp;

