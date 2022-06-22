import React, { useState } from 'react';
import style from './CreateField.module.css';

const CreateField = ({ todo, setTodo }) => {

	// State
	const [text, setText] = useState('');

	// Adding item
	const addTodo = (text) => {
		setTodo([
			{
				_id: `${todo.length + 1}`,
				text,
				isCompleted: false,
			},
			...todo,
		]);
		setText('')
	};

	return (
		<div className={style.create}>
			<input
				type="text"
				placeholder='Add a task'
				className={style.create__input}
				value={text}
				onChange={e => setText(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && addTodo(text)}
			/>
			<button
				className={style.create__btn}
				onClick={() => addTodo(text)}
			>
				<div className={style.btn__bg}></div>
			</button>
		</div>
	)
};

export default CreateField;