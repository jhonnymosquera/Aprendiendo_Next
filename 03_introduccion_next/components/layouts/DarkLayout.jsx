export default function DarkLayout({ children }) {
	return (
		<div
			style={{
				backgroundColor: "rgba(0,0,0,3)",
				padding: "10px",
				borderRadius: "5px",
			}}
		>
			<h3>DarkLayout</h3>
			<div>{children}</div>
		</div>
	);
}
