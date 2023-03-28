import { useEffect, useState } from "react";

type TimerArgs = {
	milisegundos: number;
};

export default function Timer(arg: TimerArgs) {
	const [segundos, setSegundos] = useState(0);

	useEffect(() => {
		let time = setInterval(() => {
			setSegundos(s => s + 1);
		}, arg.milisegundos);

		if (segundos == 10) {
			clearInterval(time);
		}
	}, []);

	return (
		<>
			<h4>
				Timer: <small>{segundos}</small>
			</h4>
		</>
	);
}
