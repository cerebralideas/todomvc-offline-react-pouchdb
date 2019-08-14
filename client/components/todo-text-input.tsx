import React from 'react';
import { formSubmission } from '../events';

import { Todo } from '../interfaces';

interface Props {
	placeholder: string;
	filter: string;
	editing?: boolean;
	flipEdit?: (boolean) => void;
	todo?: Todo;
	newTodo?: boolean;
}

function TodoTextInput({
		editing,
		newTodo,
		placeholder,
		todo,
		flipEdit,
		filter
	}: Props) {
		let editingClass = editing ? 'edit' : '';
		let newClass = newTodo ? 'new-todo' : '';

		function saveChange(event, id) {
			if (editing) {
				formSubmission(event, id, ( editingClass || newClass ), flipEdit);
			}
		}

		return (
			<form id={ `todoForm_${ editing ? 'edit' : 'new' }` }
				method='POST'
				action={ `/todos?=filter=${filter ? filter : '' }`}
				onSubmit={
					(event) => formSubmission(event, todo && todo._id, ( editing ? 'edit' : 'new' ), flipEdit)
				}>
				<label htmlFor={ `todoInput_${ editing ? 'edit' : 'new' }` }
					className="a11y-text">
					Add new todo:
				</label>
				<input id={ `todoInput_${ editing ? 'edit' : 'new' }` }
					className={ editingClass || newClass }
					name='title'
					type='text'
					placeholder={ placeholder }
					defaultValue={ todo.title }
					autoFocus={ editing }
					onBlur={ (event) => saveChange(event, todo._id) } />
			</form>
		);
	}

export default TodoTextInput;
