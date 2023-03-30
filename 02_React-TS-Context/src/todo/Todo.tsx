import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

export default function Todo() {
	return (
		<TodoProvider>
			<h1>Todo: </h1>

			<TodoList />
		</TodoProvider>
	);
}
