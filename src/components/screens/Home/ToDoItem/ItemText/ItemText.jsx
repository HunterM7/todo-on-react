import React, { useState } from 'react';
import style from './ItemText.module.css';

const ItemText = ({ isCompleted, text }) => {

	let status = isCompleted ? 'done' : 'active';

	// Changing the text depending on block width
	const [textState, setText] = useState(text);

	//TODO == Недоделанный функционал по добавлению троеточия в конце строки в зависимости от ширины блока

	const wrapperRef = React.useRef();

	React.useEffect(() => {
		window.addEventListener('resize', () => console.log(wrapperRef.current.offsetWidth));
	}, [])


	// let textValue = '';

	// if (text.length < 40) {
	// 	textValue = text;
	// } else {
	// 	textValue = text.substring(0, 40)
	// }


	return (
		<div
			className={style.wrapper}
			ref={wrapperRef}
		>
			<p
				id={style.text}
				className={`
					${style.text}
					${style[status]}
				`}
			>
				{textState}
			</p>
		</div>
		/* <p id={style.text} className={`
				${style.text}
				${style[status]}
			`}>
			{textValue}
		</p> */
	)
};

export default ItemText;