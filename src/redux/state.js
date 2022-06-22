const todoBase = [
	{
		_id: 1,
		text: 'Finish the essay collaboration',
		isCompleted: false,
	},
	{
		_id: 2,
		text: 'Решить вопрос переполнения строки',
		isCompleted: false,
	},
	{
		_id: 3,
		text: 'Убрать возможность добавления пустой строки',
		isCompleted: false,
	},
	{
		_id: 4,
		text: 'Создать заглушку, когда нет ни одного дела',
		isCompleted: false,
	},
	{
		_id: 5,
		text: 'Разобраться с анимацией',
		isCompleted: false,
	},
	{
		_id: 6,
		text: 'Анимировать кнопку отправки',
		isCompleted: false,
	},
	{
		_id: 7,
		text: 'Создать градиент на границах контейнера с делами',
		isCompleted: true,
	},
]

window.state = todoBase;

export default todoBase;