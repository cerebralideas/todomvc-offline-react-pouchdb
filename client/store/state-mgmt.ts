import React, { useEffect, useState } from 'react';
import db from './store';

export function useStateMgmt(state) {
	const [todos, updateTodos] = useState(state.todos);
	const [filter, updateFilter] = useState(state.filter);

	useEffect(() => {
		db.changes().on('change', (change) => {
			console.log(change);
		});
	});

	return [{ todos, filter }];
}

export const AppContext = React.createContext({ todos: [], filter: 'show_all' });
