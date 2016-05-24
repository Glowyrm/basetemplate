function getId(todos) {
	return todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) +1
}

let todoReducer = function(todos = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [{
					text: action.text,
					completed: false,
					id: getId(todos)
				}, ...todos]
		case 'COMPLETE_TODO': 
			return todos.map((todo) => {
					return todo.id === action.id ? 
						Object.assign({}, todo, {completed: !todo.completed}) : todo
				})
		case 'DELETE_TODO':
			return todos.filter((todo) => {
					return todo.id !== action.id //filters when false, so if the ID matches it will evaluate to true and filter out of results
				})
		default:  
			return todos;
	}
}

export default todoReducer