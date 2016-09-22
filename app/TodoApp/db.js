export const storedTodos = (callback) => {
	setTimeout(() => callback(
		['buy newspaper', 'buy meat']
	), 2000);
}

export const saveTodo = (cb) => {
	setTimeout(() => {
		if (Math.random(1) < 0.5) {
			cb({ message: 'Todo saved successfully'});
		} else {
			cb({ error: true, message: 'Todo failed to save'})
		}
	}, 1000);
} 