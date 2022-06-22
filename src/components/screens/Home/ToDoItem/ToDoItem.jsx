import React from 'react';
import style from './ToDoItem.module.css';
import Check from './Check/Check';
import ItemText from './ItemText/ItemText';
import RemoveItem from './RemoveItem/RemoveItem';

const ToDoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div
			className={style.card}
			onClick={(e) => changeTodo(e, todo._id)}
		>

			<div className={style.card__check}>
				<Check isCompleted={todo.isCompleted} />
			</div>

			<div className={style.card__text}>
				<ItemText text={todo.text} isCompleted={todo.isCompleted} />
			</div>

			<div className={style.card__remove}>
				<RemoveItem id={todo._id} removeTodo={removeTodo} />
			</div>

		</div>
	)
};

export default ToDoItem;