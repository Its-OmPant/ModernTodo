import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";

import { TodoContainer, TodoForm } from "./components";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function App() {
	const [todos, setTodos] = useState([]);

	const clearAll = () => {
		let permission = confirm("Are u sure to delete all items");

		if (permission) {
			localStorage.clear();
		}
		setTodos([]);
	};

	const addTodo = (todo) => {
		setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
		console.log("Deleted an item");
	};

	const updateTodo = (id, newTitle) => {
		setTodos((prev) =>
			prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
		);
	};

	const toggleIsCompleted = (id) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
			)
		);
		console.log(todos);
	};

	useEffect(() => {
		const todoArray = JSON.parse(localStorage.getItem("todos"));
		if (todoArray && todoArray.length > 0) setTodos(todoArray);
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoProvider
			value={{ todos, addTodo, deleteTodo, updateTodo, toggleIsCompleted }}>
			<div className="w-screen h-screen overflow-hidden">
				<nav className="bg-cyan-950 text-white text-center p-3 flex justify-between px-6">
					<h1 className="text-lg md:text-xl lg:text-2xl">Modern Todo App</h1>
					<div className="flex ">
						<button className="text-black p-1 mx-1 rounded-xl">
							<MdDarkMode size={21} color="white" />
						</button>
						<button
							onClick={clearAll}
							className="bg-red-200 text-black px-2 mx-1 rounded-xl">
							Clear All
						</button>
					</div>
				</nav>
				<div className="w-full mx-auto xsm:w-[90%] sm:w-4/5 md:w-1/2 lg:w-[40%] ">
					<TodoForm />
					<TodoContainer />
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
