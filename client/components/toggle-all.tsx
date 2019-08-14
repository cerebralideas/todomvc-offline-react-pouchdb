import React from 'react';
import { AppContext } from '../state/state-mgmt';
import { completeAll } from '../events';

import { State, Todo } from '../interfaces';

interface Props {
	count: number;
	completed: number;
	todos: Todo[]
}

function ToggleAll({ count, completed, todos }: Props) {
	if (count > 0) {
		return (
			<>
				<input id="toggle-all"
						className="toggle-all"
						type="checkbox"
						checked={ completed === count }
						onChange={ event => completeAll(event, todos) }/>
				<label htmlFor="toggle-all">
					<span className="a11y-text">Complete All Todos</span>
				</label>
			</>
		);
	} else {
		return null;
	}
}

export default function () {
	return (
		<AppContext.Consumer>
			{({ todos }) => {
				const count = todos.length;
				const completed = todos.reduce((count, todo) => (
						todo.completed ? count + 1 : count
					),
					0
				);
				return <ToggleAll count={ count } completed={ completed } todos={ todos } />
			}}
		</AppContext.Consumer>
	);
}
