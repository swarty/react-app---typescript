import React, { useRef } from 'react';

interface ITodoFormProps {
	onAdd(title: string): void
}


export const TodoFrom: React.FC<ITodoFormProps> = (props) => {
	// const [title, setTitle] = useState<string>('');

	const ref = useRef<HTMLInputElement>(null);

	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value);
	// }


	const keyPressHandler = (event: React.KeyboardEvent) => {
		if(event.key === 'Enter') {
			props.onAdd(ref.current!.value);
			ref.current!.value= '';
		// 	setTitle('');
		}
	}

	return (
		<div className="input-field">
			<input 
				ref={ref}
				// onChange={changeHandler}
				onKeyPress={keyPressHandler}
				// value={title} 
				placeholder="text" type="text" id="task"/>
			<label htmlFor="task">Yout task name:</label>
		</div>
	)
}