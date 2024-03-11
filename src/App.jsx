import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";

function App() {
	return (
		<div className="w-screen min-h-screen ">
			<h1 className="bg-cyan-950 text-white text-lg text-center p-3 md:text-xl lg:text-2xl">
				Modern Todo App
			</h1>
			<div className="w-full mx-auto xsm:w-[90%] sm:w-4/5 md:w-1/2 lg:w-[40%] ">
				{/* todo form */}
				<div
					id="todoForm"
					className="w-[90%] mx-auto my-4 md:mt-10 rounded-md overflow-hidden flex">
					<input
						type="text"
						className="w-[80%] px-4 py-3 outline-none bg-gray-200 placeholder:text-gray-700"
						placeholder="Enter todo"
					/>
					<button className="w-[20%] bg-cyan-700 text-white">Add</button>
				</div>
				{/* todo container */}
				<div id="todoContainer" className="w-[90%] mx-auto my-4">
					<div
						id="todoItem1"
						className="bg-slate-200 w-full my-3 p-4 rounded-md flex justify-between">
						<span>Todo Title</span>
						<div id="icons" className="flex gap-2">
							<MdEdit size={22} className="text-green-800" />
							<MdDelete size={22} className="text-red-500" />
						</div>
					</div>
					<div
						id="todoItem5"
						className="bg-slate-200 w-full my-3 p-4 rounded-md flex justify-between">
						<span>Todo Title </span>
						<div id="icons" className="flex gap-2">
							<MdEdit size={22} className="text-green-800" />
							<MdDelete size={22} className="text-red-500" />
						</div>
					</div>
					<div
						id="todoItem6"
						className="bg-slate-200 w-full my-3 p-4 rounded-md flex justify-between">
						<span>Todo Title</span>
						<div id="icons" className="flex gap-2">
							<MdEdit size={22} className="text-green-800" />
							<MdDelete size={22} className="text-red-500" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
