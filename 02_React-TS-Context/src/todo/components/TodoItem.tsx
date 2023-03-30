import { Todo } from "../interfaces/interfaces";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

interface props {
	todo: Todo;
}

export default function TodoItem({ todo }: props) {
	const { toggleTodo } = useContext(TodoContext);

	const handleClick = () => {
		toggleTodo(todo.id);
	};

	return (
		<li
			style={{
				cursor: "pointer",
				textDecoration: todo.completed ? "line-through" : "",
			}}
			onDoubleClick={handleClick}
		>
			{todo.desc}
		</li>
	);
}
