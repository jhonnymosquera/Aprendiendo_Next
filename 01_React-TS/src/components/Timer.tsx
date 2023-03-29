import { useEffect, useRef, useState } from "react";

type TimerArgs = {
	milisegundos: number;
};

export default function Timer({ milisegundos }: TimerArgs) {
	const [segundos, setSegundos] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundos(s => s + 1);
		}, milisegundos);

		return () => clearInterval(interval);
	}, [milisegundos]);

	return (
		<>
			<h4>
				Timer: <small>{segundos}</small>
			</h4>
		</>
	);
}
