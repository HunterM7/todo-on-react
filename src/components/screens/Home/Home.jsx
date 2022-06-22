import React, { useState } from 'react';
import style from './Home.module.css';
import todoBase from '../../../redux/state';
import ToDoItem from './ToDoItem/ToDoItem';
import CreateField from './CreateField/CreateField';


const Home = () => {

	// Hook for state
	const [todo, setTodo] = useState(todoBase);

	// Changing state
	const changeTodo = (e, id) => {
		const copy = [...todo]
		const current = copy.find(el => el._id === id);
		current.isCompleted = !current.isCompleted;
		setTodo(copy)
	};

	// Removing item
	const removeTodo = (e, id) => {
		e.stopPropagation();
		setTodo([...todo].filter(el => el._id !== id));
	};

	// Render ToDo items
	const todoList = todo.map(el => {
		return (
			<li
				key={el._id}
				className={style.home__item}
			>
				<ToDoItem
					todo={el}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
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

				<div className={style.home__wrapper}>
					<ul className={style.home__list}>
						{todoList}
					</ul>
					<div className={style.home__bg}></div>
				</div>

				<div className={style.home__input}>
					<CreateField todo={todo} setTodo={setTodo} />
				</div>

			</div>
		</div>
	)
};

export default Home;