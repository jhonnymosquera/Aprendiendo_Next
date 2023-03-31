import { useTodos } from "../hooks/useTodos";

export default function TitleTodo() {
	const { pendingTodos } = useTodos();

	return <h1>Todoe: {pendingTodos}</h1>;
}
