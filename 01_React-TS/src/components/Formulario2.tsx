import { useForm } from "../hooks/useFrom";

interface FromData {
	codigoPostal: string;
	ciudad: string;
}

export default function Formulario2() {
	const { codigoPostal, ciudad, formulario, handlerChange } = useForm<FromData>({
		codigoPostal: "",
		ciudad: "",
	});

	return (
		<form>
			<div className="mb-3">
				<label className="from-label">Codigo Postal</label>
				<br />
				<input
					type="email"
					className="from-control"
					name="codigoPostal"
					onChange={handlerChange}
					value={codigoPostal}
				/>
			</div>

			<div className="mb-3">
				<label className="from-label">Ciudad:</label>
				<br />
				<input
					type="text"
					className="from-control"
					name="ciudad"
					onChange={handlerChange}
					value={ciudad}
				/>
			</div>

			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
}
