import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Layout } from "../components/layouts";

export default function HomePage() {
	return (
		<Layout title="Home - OpenJira">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Pendiente" />

						<CardContent>
							{/** */}
							{/** */}
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="En Progreso" />
					</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Completadas" />
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
}
