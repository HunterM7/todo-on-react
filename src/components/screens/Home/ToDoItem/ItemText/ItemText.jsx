import React from 'react';
import style from './ItemText.module.css';

const ItemText = ({ isCompleted, text }) => {

	let status = isCompleted ? 'done' : 'active';

	return (
		<p className={`
			${style.text}
			${style[status]}
		`}>
			{text}
		</p>
	)
};

export default ItemText;