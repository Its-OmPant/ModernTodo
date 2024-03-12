import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../contexts";

function TodoContainer() {
	const { todos } = useTodo();
	return (
		<div
			id="todoContainer"
			className="w-[90%] h-[70vh] mx-auto my-4 overflow-y-scroll px-2">
			{todos.length > 0 ? (
				todos.map((t) => <TodoItem key={t.id} todo={t} />)
			) : (
				<h1 className="text-red-600 text-center text-xl">
					"Please Add some todos"
				</h1>
			)}
		</div>
	);
}

export default TodoContainer;
