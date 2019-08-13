import db from '../state/store';

/** *******************************
 * Client & Server db Sync actions
 */
export function formSubmission(event, _id: string, flipEdit?): void {
	let title: string =
		event.currentTarget.id === 'todoForm'
			? event.currentTarget.elements.todoInput.value
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
		event.currentTarget.elements.todoInput.value = '';
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
	return;
}
export function clearCompleted(event, todos): void {
	// Fire action on db
	return;
}
