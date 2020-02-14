import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
	todos: ITodo[],
	onToggle(id: number): void,
	onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

	if(!todos.length) return <p className="center">Пока дел нет</p>

	const removeHandler = (event: React.MouseEvent, id: number) => {
		event.preventDefault();
		onRemove(id);
	}

	return (
		<ul>
			{todos.map(todo => {
				const classes = ['todo'];
				if(todo.complited) classes.push('complited')

				return (
					<li className={classes.join(' ')} key={todo.id}>
						<label>
							<input type="checkbox" checked={todo.complited} onChange={() => onToggle(todo.id)}/>
							<span>{todo.title}</span>
							<span className="material-icons red-text" onClick={(event) => removeHandler(event, todo.id)}>delete</span>
						</label>
					</li>
				)
			})}
		</ul>
	)
}