import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
	const [title, setTitle] = useState("");

	const { addTodo } = useTodo();

	const add = (e) => {
		e.preventDefault();

		if (!title) {
			alert("Please Write Something before submitting");
			return;
		} else {
			addTodo({
				title,
				isCompleted: false,
			});
		}

		setTitle("");
	};

	return (
		<form
			onSubmit={add}
			id="todoForm"
			className="w-[90%] mx-auto my-4 md:mt-10 rounded-md overflow-hidden flex">
			<input
				type="text"
				className="w-[80%] px-4 py-3 outline-none bg-slate-100 placeholder:text-gray-700"
				placeholder="Enter todo"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button
				type="submit"
				className="w-[20%] bg-sky-200 text-black dark:bg-sky-700 dark:text-white">
				Add
			</button>
		</form>
	);
}

export default TodoForm;
