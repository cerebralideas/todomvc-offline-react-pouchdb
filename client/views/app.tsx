import React from 'react';
import { AppContext } from '../store/state-mgmt';
import Header from '../components/header';
import TodoListWrapper from '../components/todo-list';

export default function App({ state }) {

	return (
		<AppContext.Provider value={ state }>
			<div>
				<Header />
				<TodoListWrapper />
			</div>
		</AppContext.Provider>
	);
}
