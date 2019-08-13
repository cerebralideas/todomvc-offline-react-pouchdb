import { Todo } from '../interfaces';

export default function handleActions(state, action) {
	switch (action.type) {
		case 'ADD_TODO': {
			return [
				{
					id: state.reduce((maxId, todo): number => Math.max(todo.id, maxId), -1) + 1,
					completed: false,
					title: action.payload.title
				},
				...state
			];
		}
		case 'DELETE_TODO': {
			return state.filter((todo): boolean => todo.id !== action.payload.id);
		}
		case 'EDIT_TODO': {
			return state.map(
				(todo): Todo =>
					todo.id === action.payload.id ? Object.assign({}, todo, { title: action.payload.title }) : todo
			);
		}
		case 'COMPLETE_TODO': {
			return state.map(
				(todo): Todo =>
					todo.id === action.payload.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo
			);
		}
		case 'COMPLETE_ALL': {
			const areAllMarked = state.every((todo): boolean => todo.completed);
			return state.map(
				(todo): Todo =>
					Object.assign({}, todo, {
						completed: !areAllMarked
					})
			);
		}
		case 'CLEAR_COMPLETED': {
			return state.filter((todo): boolean => todo.completed === false);
		}
		default: {
			return [];
		}
	}
}
