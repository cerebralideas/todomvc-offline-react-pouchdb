import React from 'react';
import { AppContext } from '../state/state-mgmt';
import TodoTextInput from './todo-text-input';

import { State } from '../interfaces';

function Header({ filter }: { filter: string }) {
	let newTodo = true,
		fakeTodo = {
			editing: false,
			title: ''
		};

	return (
		<header className="header">
			<h1>todos</h1>
			<TodoTextInput todo={ fakeTodo }
				newTodo={ newTodo }
				filter={filter}
				placeholder="What needs to be done?" />
		</header>
	);
}


export default function () {
	return (
		<AppContext.Consumer>
			{({ filter }) => {
				return (
					<Header filter={ filter } />
				);
			}}
		</AppContext.Consumer>
	)
}
