export interface Todo {
	title: string;
	completed?: boolean;
	_id?: string;
	_rev?: string;
}
export interface State {
	todos: Todo[];
	filter?: string;
}
export interface Doc {
	_id: string;
	_rev: string;
	todos: Todo[];
}
