import React from 'react';
import { AppContext } from '../store/state-mgmt';
import TodoItem from './todo-item';
import ToggleAll from './toggle-all';
import Footer from './footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/todo-filters';

import { State } from '../interfaces';

const TODO_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_ACTIVE]: (todo) => !todo.completed,
	[SHOW_COMPLETED]: (todo) => todo.completed
};

export function TodoList({ todos, filter }: State) {
	let filteredTodos = todos.filter(TODO_FILTERS[filter]);

	return (
		<section className="main">
			<ToggleAll />
			<ul className="todo-list">
				{filteredTodos.map(todo => (
					<TodoItem key={ todo.id } todo={ todo } filter={ filter } />
				))}
			</ul>
			<Footer />
		</section>
	);
}

export default function () {
	return (
		<AppContext.Consumer>
			{ ({ todos, filter }) => {
				return <TodoList todos={ todos } filter={ filter } />
			}}
		</AppContext.Consumer>
	)
}
