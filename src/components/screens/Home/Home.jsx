import React, { useState } from 'react';
import style from './Home.module.css';
import todoBase from '../../../redux/state';
import ToDoItem from './ToDoItem/ToDoItem';


const Home = () => {

	// Hook for state
	const [todo, setTodo] = useState(todoBase);

	const changeTodo = (id) => {
		const copy = [...todo]
		const current = copy.find(el => el._id === id);
		current.isCompleted = !current.isCompleted;
		setTodo(copy)
	};

	const todoList = todoBase.map(el => {
		return (
			<li key={el._id} className={style.home__item}>
				<ToDoItem todo={el} changeTodo={changeTodo} />
			</li>
		)
	})



	return (
		<div className={style.home}>
			<div className={`
				container
				${style.container}
			`}>

				<h1 className={style.home__title}>Список задач</h1>

				<ul className={style.home__list}>
					{todoList}
				</ul>

			</div>
		</div>
	)
};

export default Home;