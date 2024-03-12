import { useEffect, useState } from "react";
import { TodoProvider, ThemeProvider } from "./contexts";

import { TodoContainer, TodoForm } from "./components";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function App() {
	// Todo related
	const [todos, setTodos] = useState([]);

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

	const clearAll = () => {
		let permission = confirm("Are u sure to delete all items");

		if (permission) {
			localStorage.clear();
		}
		setTodos([]);
	};

	useEffect(() => {
		const todoArray = JSON.parse(localStorage.getItem("todos"));
		if (todoArray && todoArray.length > 0) setTodos(todoArray);
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// Theme related

	const [theme, setTheme] = useState("light");

	const darkMode = () => {
		console.log("dark");
		setTheme("dark");
	};
	const lightMode = () => {
		setTheme("light");
	};

	useEffect(() => {
		let doc = document.querySelector("html");
		doc.classList.remove("dark", "light");
		doc.classList.add(theme);
	}, [theme]);

	return (
		<ThemeProvider value={{ theme, darkMode, lightMode }}>
			<TodoProvider
				value={{ todos, addTodo, deleteTodo, updateTodo, toggleIsCompleted }}>
				<div className="w-screen h-screen overflow-hidden dark:bg-black/95">
					<nav className="bg-sky-800 m-4 rounded-lg text-white text-center p-3 flex justify-between px-6 shadow-gray-400 shadow-lg dark:bg-sky-950 dark:shadow-gray-800">
						<h1 className="text-lg md:text-xl lg:text-2xl">Modern Todo App</h1>
						<div className="flex ">
							<button
								onClick={theme == "light" ? darkMode : lightMode}
								className="text-black p-1 mx-1 rounded-xl">
								{theme == "light" ? (
									<MdDarkMode size={21} className="text-white" />
								) : (
									<MdLightMode size={21} className="text-white" />
								)}
							</button>
							<button
								onClick={clearAll}
								className="bg-white text-red-900 font-bold px-2 mx-1 rounded-xl">
								Clear All
							</button>
						</div>
					</nav>
					<div className="w-full mx-auto xsm:w-[90%] sm:w-4/5 md:w-1/2 lg:w-[40%]">
						<TodoForm />
						<TodoContainer />
					</div>
				</div>
			</TodoProvider>
		</ThemeProvider>
	);
}

export default App;
