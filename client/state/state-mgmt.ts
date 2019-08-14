import React, { useEffect, useState } from 'react';
import db from './store';
import { delayAndBatch, handleTodoChange } from './utilities';

export function useStateMgmt(state) {
	const [todos, updateTodos] = useState(state.todos);
	const [filter, updateFilter] = useState(state.filter);

	let handleBatch = delayAndBatch(updateTodos, todos);

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
				console.log(change);
				handleBatch(handleTodoChange, change);
			});

		return () => changes.cancel();
	});

	return [{ todos, filter }];
}

export const AppContext = React.createContext({ todos: [], filter: 'show_all' });
