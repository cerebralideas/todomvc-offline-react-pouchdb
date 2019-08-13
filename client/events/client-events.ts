import superagent from 'superagent';
import * as actions from '../actions';

/** *******************************
 * Client & Server Sync actions
 */
export function formSubmission(event, id: number, flipEdit?): void {
	let title: string =
		event.currentTarget.id === 'todoForm'
			? event.currentTarget.elements.todoInput.value
			: event.currentTarget.value;

	event.preventDefault();

	// If adding an empty todo, just return out.
	if (!id && !title) {
		return;
	} else if (id && title.length) {
		// Was this an edit?
		// Fire action on server
		return;
	} else if (id && !title) {
		// If provided id, but title is empty delete item
		// Fire action on server
		return;
	} else {
		// This was a new item
		// Fire action on server
		return;
		// event.currentTarget.elements.todoInput.value = '';
	}
}
export function completeTodo(event, id: number): void {
	event.preventDefault();
	// Fire action on server
	return;
}
export function completeAll(): void {
	// Fire action on server
	return;
}
export function clearCompleted(): void {
	// Fire action on server
	return;
}
export function deleteTodo(event, id: number): void {
	event.preventDefault();
	// Fire action on server
	return;
}
