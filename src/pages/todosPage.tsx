import React, { useState, useEffect } from 'react';
import { TodoFrom } from '../components/todoForm';
import { TodoList } from '../components/todoList';


import { ITodo } from '../interfaces';
declare var confirm: (question: string) => boolean


export const TodosPage: React.FC = () => {

	const [todos, setTodos] = useState<ITodo[]>([]);

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			title: title,
			id: Date.now(),
			complited: false
		}

		setTodos(prev => [newTodo, ...prev]);
	}


	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
		setTodos(saved)
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])


	const toggleHandler = (id: number) => {
		setTodos(prev => prev.map(todo => {
			if (todo.id === id) {
				todo.complited = !todo.complited;
			}
			return todo;
		}))
	}

	const removeHandler = (id: number) => {
		const access = confirm('Delete task?');
		if (access) setTodos(prev => prev.filter(todo => todo.id !== id));
	}


	return (
		<React.Fragment>
			<div className="row field-row">
				<TodoFrom onAdd={addHandler} />
			</div>

			<TodoList
				todos={todos}
				onToggle={toggleHandler}
				onRemove={removeHandler} />
		</React.Fragment>
	)
}