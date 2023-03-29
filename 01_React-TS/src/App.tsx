import ContadorReducer from "./components/ContadorRedu";
import Counter from "./components/Counter";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";
import TimerPadre from "./components/TimerPadre";
import Usuario from "./components/Usuario";

function App() {
	return (
		<>
			<h1>React + TypeScript</h1>
			<hr />
			<Counter />
			<hr />
			<Usuario />
			<hr />

			<h2>useEffect - useRef</h2>
			<hr />

			<TimerPadre />

			<hr />

			<ContadorReducer />

			<hr />

			<Formulario />
			<hr />
			<Formulario2 />
		</>
	);
}

export default App;
