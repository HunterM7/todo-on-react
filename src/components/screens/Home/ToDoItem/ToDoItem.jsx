import React from 'react';
import style from './ToDoItem.module.css';
import Check from './Check/Check';

const ToDoItem = ({ todo }) => {
	return (
		<div className={style.toDoItem}>

			<Check isCompleted={todo.isCompleted} />

			{todo.title}

		</div>
	)
};

export default ToDoItem;