import TitleTodo from "./components/TitleTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

export default function Todo() {
	return (
		<TodoProvider>
			<TitleTodo />
			<TodoList />
		</TodoProvider>
	);
}
