export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product) => {
	return {
		type: ADD_TO_CART,
		payload: { product }
	}
}
export const loadProducts = (products) => {
	return {
		type: LOAD_PRODUCTS,
		payload: { products }
	};
}

export const removeFromCart = (index) => {
	return {
		type: REMOVE_FROM_CART,
		payload: { index }
	};
}