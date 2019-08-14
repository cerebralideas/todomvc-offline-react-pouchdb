import React, { useState } from 'react';
import TodoTextInput from './todo-text-input';
import { deleteTodo, completeTodo } from '../events';

import { Todo } from '../interfaces';

interface Prop {
	todo: Todo;
	filter: string
}

let cssDestroyForm = {
		height: '0px'
	},
	cssDestroyText = {
		position: 'fixed' as 'fixed',
		top: '-100px'
	},
	cssDestroyEl = {
		textDecoration: 'none'
	},
	cssCompleteButton = {
		display: 'block',
		width: '100%',
		textAlign: 'left' as 'left'
	};

export default function TodoItem ({ todo, filter }: Prop) { // save

	let [ editing, flipEdit ] = useState(false),
		newTodo = false,
		element;

	if (editing) {
		element = (
			<TodoTextInput todo={ todo }
				editing={ editing }
				flipEdit={ flipEdit }
				newTodo={ newTodo }
				filter={ filter }
				placeholder="Leaving empty deletes todo!" />
		);
	} else {
		element = (
			<div className="view">
				<form id={ `completeForm_${todo._id}` }
					method="POST"
					action={ `/todos/${ todo._id }?type=COMPLETE_TODO&filter=${ filter }` }>
					<input id={ `completeInput_${todo._id}` }
						className="toggle"
						type="checkbox"
						checked={ todo.completed }
						onChange={ (event) => completeTodo(event, todo._id) } />
					<label htmlFor={ `completeInput_${todo._id}` }>
						<button type="submit"
							style={ cssCompleteButton }
							onClick={ (event) => completeTodo(event, todo._id) }
							onDoubleClick={ () => flipEdit(true) }>
							{todo.title}
						</button>
					</label>
				</form>
				<form id={ `deleteForm_${todo._id}` }
					method="POST"
					action={ `/todos/${ todo._id }?type=DELETE_TODO&filter=${ filter }` }
					style={ cssDestroyForm }>
					<button type="submit"
						style={ cssDestroyEl}
						className="destroy"
						onClick={ (event) => deleteTodo(event, todo._id) }>
						<span style={ cssDestroyText }>Delete Todo</span>
					</button>
				</form>
			</div>
		);
	}

	return (
		<li className={
			`todoItem
			${todo.completed ? 'completed' : ''}
			${editing ? 'editing' : ''}`
			}>
			{element}
		</li>
	);
}
