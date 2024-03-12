import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
	const { deleteTodo, updateTodo, toggleIsCompleted } = useTodo();

	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(todo.title);
	const [isChecked, setIsChecked] = useState(false);

	const onDelete = () => {
		deleteTodo(todo.id);
	};

	const onEdit = () => {
		setIsEditing(true);
	};

	const onSave = () => {
		updateTodo(todo.id, newTitle);
		setIsEditing(false);
	};

	const onCheck = () => {
		setIsChecked((p) => !p);
		toggleIsCompleted(todo.id);
	};

	return (
		<div
			className={` ${
				isChecked ? "bg-pink-200" : "bg-sky-200"
			} w-full my-3 p-4 rounded-md flex justify-between`}>
			<div className="w-4/5">
				<input type="checkbox" value={isChecked} onChange={onCheck} />
				{isEditing ? (
					<input
						type="text"
						className="mx-4 w-3/5 md:text-lg text-slate-800 px-2 rounded-md"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
					/>
				) : (
					<span className="mx-4 text-md md:text-lg font-semibold text-slate-800">
						{todo.title}
					</span>
				)}
			</div>
			<div id="icons" className="flex justify-around gap-2 w-1/5">
				{isEditing ? (
					<button onClick={onSave} className="bg-white rounded-full p-2">
						<MdSave size={18} className="text-orange-800" />
					</button>
				) : (
					<button onClick={onEdit} className="bg-white rounded-full p-2">
						<MdEdit size={18} className="text-green-800" />
					</button>
				)}

				<button onClick={onDelete} className="bg-white rounded-full p-2">
					<MdDelete size={18} className="text-red-500" />
				</button>
			</div>
		</div>
	);
}

export default TodoItem;
