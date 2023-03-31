import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

export default function TodoList() {
	const { todos } = useTodos();

	// const { todoState } = useContext(TodoContext);

	// const { todos } = todoState;

	return (
		<ul>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
}
