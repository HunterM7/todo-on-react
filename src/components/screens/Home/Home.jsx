import React from 'react';
import style from './Home.module.css';
import todoBase from '../../../redux/state';
import ToDoItem from './ToDoItem/ToDoItem';

const todoList = todoBase.map(el => {
	return (
		<li key={el._id} className={style.home__item}>
			<ToDoItem todo={el} />
		</li>
	)
})

const Home = () => {
	return (
		<div className={style.home}>
			<ul className={style.home__list}>
				{todoList}
			</ul>
		</div>
	)
};

export default Home;