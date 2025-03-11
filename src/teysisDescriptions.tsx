import { useParams } from "react-router-dom";
import boatsTeysisData from "../src/boatsTeysisData";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	Typography,
	Box,
} from "@mui/material";

// Création du thème local uniquement pour ce composant
const theme = createTheme({
	typography: {
		h4: {
			color: "#1976d2",
			fontWeight: "bold",
			textAlign: "center",
			padding: "50px",
		},
		body1: {
			textAlign: "justify",
			fontSize: "1.1rem",
			lineHeight: 1.5,
			color: "#333",
		},
	},
	components: {
		MuiTableCell: {
			styleOverrides: {
				root: {
					fontSize: "1rem",
					color: "#333",
				},
			},
		},
	},
});

const TeysisDescriptions = () => {
	const { id } = useParams<{ id: string }>();
	const boat = boatsTeysisData.find((boat) => boat.id === Number(id));

	if (!boat) {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Typography
					variant="h5"
					color="error"
					align="center"
					sx={{ marginTop: 4 }}
				>
					Bateau non trouvé
				</Typography>
			</ThemeProvider>
		);
	}

	const technicalDetails = [
		{ key: "Longueur", value: `${boat.technicalDetails.length} pieds` },
		{ key: "Largeur", value: `${boat.technicalDetails.width} pieds` },
		{ key: "Tirant d'eau", value: `${boat.technicalDetails.draft} pieds` },
		{ key: "Cabines", value: String(boat.technicalDetails.cabins) },
		{
			key: "Motorisation max",
			value: `${boat.technicalDetails.maxMotorization} CV`,
		},
		{
			key: "Capacité passagers",
			value: String(boat.technicalDetails.passengerCapacity),
		},
	];

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ padding: 3 }}>
				{/* Titre du bateau */}
				<Typography variant="h4" gutterBottom>
					{boat.title}
				</Typography>

				{/* Image du bateau */}
				<Box
					sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}
				>
					<img
						src={boat.image}
						alt={boat.title}
						style={{
							width: "100%",
							maxWidth: "500px",
							borderRadius: "8px",
							boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
						}}
					/>
				</Box>

				{/* Description du bateau */}
				<Typography
					variant="body1"
					sx={{ marginBottom: 3, margin: "20px 60px" }}
				>
					{boat.teysisBoatsDescription}
				</Typography>

				{/* Tableau des caractéristiques techniques */}
				<TableContainer
					component={Paper}
					sx={{ maxWidth: "600px", margin: "0 auto" }}
				>
					<Table>
						<TableBody>
							{technicalDetails.map((row, index) => (
								<TableRow
									key={index}
									sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}
								>
									<TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>
										{row.key}
									</TableCell>
									<TableCell>{row.value}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</ThemeProvider>
	);
};

export default TeysisDescriptions;
