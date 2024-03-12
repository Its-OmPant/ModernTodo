import { createContext, useContext } from "react";

export const TodoContext = createContext({
	todos: [],
	addTodo: (todo) => {},
	updateTodo: (id, newTodo) => {},
	deleteTodo: (id) => {},
	toggleIsCompleted: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
	return useContext(TodoContext);
};
