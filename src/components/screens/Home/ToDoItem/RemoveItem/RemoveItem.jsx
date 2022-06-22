import React from 'react';
import style from './RemoveItem.module.css';

const RemoveItem = ({ id, removeTodo }) => {

	return (
		<button
			className={style.btn}
			onClick={(e) => removeTodo(e, id)}
		></button>
	)
};

export default RemoveItem;