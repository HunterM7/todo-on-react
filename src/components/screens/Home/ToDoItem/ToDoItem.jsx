import React from 'react';
import style from './ToDoItem.module.css';
import Check from './Check/Check';
import ItemText from './ItemText/ItemText';

const ToDoItem = ({ todo, changeTodo }) => {
	return (
		<button
			className={style.card}
			onClick={() => changeTodo(todo._id)}
		>

			<div className={style.card__check}>
				<Check isCompleted={todo.isCompleted} />
			</div>

			<div className={style.card__text}>
				<ItemText text={todo.text} isCompleted={todo.isCompleted} />
			</div>

		</button>
	)
};

export default ToDoItem;