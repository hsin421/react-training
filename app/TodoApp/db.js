export const storedTodos = (callback) => {
	setTimeout(() => callback(
		['buy newspaper', 'buy meat']
	), 2000);
}