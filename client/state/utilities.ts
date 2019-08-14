export function handleTodoChange(todos, change) {
	let index = -1;
	for (let i = 0; i < todos.length; i++) {
		if (todos[i]._id === change.doc._id) {
			index = i;
			break;
		}
	}
	if (index === -1) {
		return [change.doc, ...todos];
	} else if (change.deleted) {
		return [...todos.slice(0, index), ...todos.slice(index + 1)];
	} else {
		return [...todos.slice(0, index), change.doc, ...todos.slice(index + 1)];
	}
}

export function delayAndBatch(dispatch, todos) {
	let timer;
	let tempTodos = todos;
	return (fn, change) => {
		tempTodos = fn(tempTodos, change);
		clearTimeout(timer);
		timer = setTimeout(() => {
			dispatch(tempTodos);
		}, 100);
	};
}
