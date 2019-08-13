import React, { useEffect, useState } from 'react';
import db from './store';

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

export function useStateMgmt(state) {
	const [todos, updateTodos] = useState(state.todos);
	const [filter, updateFilter] = useState(state.filter);

	useEffect(() => {
		const changes = db
			.changes({
				live: true,
				// eslint-disable-next-line
				include_docs: true,
				since: 'now',
				timeout: false
			})
			.on('change', (change) => {
				updateTodos((todos) => {
					return handleTodoChange(todos, change);
				});
			});

		return () => changes.cancel();
	});

	return [{ todos, filter }];
}

export const AppContext = React.createContext({ todos: [], filter: 'show_all' });
