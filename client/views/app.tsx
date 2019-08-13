import React from 'react';
import { AppContext, useStateMgmt } from '../state/state-mgmt';
import Header from '../components/header';
import TodoListWrapper from '../components/todo-list';

export default function App({ initialData }) {

	let [ state ] = useStateMgmt(initialData);

	return (
		<AppContext.Provider value={ state }>
			<div>
				<Header />
				<TodoListWrapper />
			</div>
		</AppContext.Provider>
	);
}
