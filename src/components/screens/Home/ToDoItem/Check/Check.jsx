import React from 'react';
import style from './Check.module.css';

const Check = ({ isCompleted }) => {

	let status = isCompleted ? 'active' : '';

	return (
		<div className={`
			${style.checkbox}
			${style[status]}
		`}>

			<div className={style.mark}></div>

		</div>
	)
};

export default Check;