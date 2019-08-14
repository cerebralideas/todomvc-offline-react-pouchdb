import db from '../state/store';

/** *******************************
 * Client & Server db Sync actions
 */
export function formSubmission(event, _id: string, state: string, flipEdit?): void {
	let title: string =
		event.currentTarget.id === `todoForm_${state}`
			? event.currentTarget.elements[`todoInput_${state}`].value
			: event.currentTarget.value;

	event.preventDefault();

	// If adding an empty todo, just return out.
	if (!_id && !title) {
		return;
	} else if (_id && title.length) {
		// Was this an edit?
		// Fire action on db
		db.get(_id).then((doc) => {
			db.put({
				...doc,
				title
			}).then((response) => {
				console.log('Todo has been updated');
				flipEdit(false);
			});
		});
	} else if (_id && !title) {
		// If provided id, but title is empty delete item
		// Fire action on db
		db.get(_id).then((doc) => {
			db.put({
				...doc,
				_deleted: true
			}).then((response) => {
				console.log('Todo has been deleted');
				flipEdit(false);
			});
		});
	} else {
		// This was a new item
		// Fire action on db
		db.put({
			_id: new Date().toJSON(),
			completed: false,
			title: title
		}).then((response) => {
			console.log('Todo has been saved');
		});
		event.currentTarget.elements[`todoInput_${state}`].value = '';
	}
}
export function completeTodo(event, _id: string): void {
	event.preventDefault();
	// Fire action on db
	db.get(_id).then((doc: any) => {
		db.put({
			...doc,
			completed: !doc.completed
		}).then((response) => {
			console.log('Todo has been completed');
		});
	});
}
export function deleteTodo(event, _id: string): void {
	event.preventDefault();
	// Fire action on db
	db.get(_id).then((doc) => {
		db.put({
			...doc,
			_deleted: true
		}).then((response) => {
			console.log('Todo has been deleted');
		});
	});
}
export function completeAll(event, todos): void {
	// Fire action on db
	const incompleteTodos = [];
	let hasIncompleteTodos = false;

	for (let i = 0; i < todos.length; i++) {
		if (todos[i].completed === false) {
			hasIncompleteTodos = true;
			break;
		}
	}
	for (let i = 0; i < todos.length; i++) {
		if (hasIncompleteTodos) {
			if (todos[i].completed === false) {
				let todo = {
					// spread properties to prevent mutation
					...todos[i],
					completed: !todos[i].completed
				};
				incompleteTodos.push(todo);
			}
		} else {
			let todo = {
				// spread properties to prevent mutation
				...todos[i],
				completed: false
			};
			incompleteTodos.push(todo);
		}
	}
	db.bulkDocs(incompleteTodos).then((response) => {
		console.log('Todos have been completed');
	});
}
export function clearCompleted(event, todos): void {
	// Fire action on db
	const clearedTodos = [];
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].completed === true) {
			let todo = {
				// spread properties to prevent mutation
				...todos[i],
				_deleted: true
			};
			clearedTodos.push(todo);
		}
	}
	db.bulkDocs(clearedTodos).then((response) => {
		console.log('Completed todos have been cleared');
	});
}
