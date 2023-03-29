import { useForm } from "../hooks/useFrom";

interface FromData {
	email: string;
	nombre: string;
	edad: number;
}

export default function Formulario() {
	const { formulario, handlerChange } = useForm<FromData>({
		email: "ss",
		nombre: "ss",
		edad: 0,
	});

	const { email, nombre, edad } = formulario;

	// const [formulario, setFormulario] = useState({
	// 	email: "",
	// 	nombre: "",
	// });

	// const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = target;

	// 	setFormulario({
	// 		...formulario,
	// 		[name]: value,
	// 	});
	// };

	return (
		<form>
			<h2> Personal hooks</h2>
			<div className="mb-3">
				<label className="from-label">Email:</label>
				<br />
				<input
					type="email"
					className="from-control"
					name="email"
					onChange={handlerChange}
					value={email}
				/>
			</div>

			<div className="mb-3">
				<label className="from-label">Nombre:</label>
				<br />
				<input
					type="text"
					className="from-control"
					name="nombre"
					onChange={handlerChange}
					value={nombre}
				/>
			</div>

			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
}
