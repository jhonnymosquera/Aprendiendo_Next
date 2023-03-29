import { useReducer } from "react";

const initialState = {
	contador: 0,
};

type ActionType =
	| { type: "incrementar" }
	| { type: "decrementar" }
	| { type: "custom"; payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
	switch (action.type) {
		case "incrementar":
			return {
				...state,
				contador: state.contador + 1,
			};

		case "decrementar":
			return {
				...state,
				contador: state.contador - 1,
			};

		case "custom":
			return {
				...state,
				contador: action.payload,
			};

		default:
			return state;
	}
};

export default function ContadorRedu() {
	const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

	return (
		<>
			<h2>Use Reducer</h2>
			<h2>contador {contador} </h2>

			<button className="btn btn-success" onClick={() => dispatch({ type: "incrementar" })}>
				incrementar
			</button>

			<button className="btn btn-danger" onClick={() => dispatch({ type: "decrementar" })}>
				Decrementar
			</button>

			<button
				className="btn btn-primary"
				onClick={() => dispatch({ type: "custom", payload: 500 })}
			>
				500
			</button>
		</>
	);
}
