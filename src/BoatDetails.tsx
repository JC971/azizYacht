import React from "react";
import { useParams, Link } from "react-router-dom";
import boatsData from "../src/boatsTeysisData"; // Le fichier contenant tous les bateaux
import styles from "../styles/boatDetails.module.css";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	Typography,
	Box,
	Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const BoatDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>(); // Récupérer l'ID depuis l'URL
	const boat = boatsData.find((b) => b.id === Number(id));

	if (!boat) {
		return (
			<Box sx={{ textAlign: "center", marginTop: 4 }}>
				<Typography variant="h5" color="error">
					Bateau non trouvé
				</Typography>
				<Link to="/">
					<Button variant="contained" sx={{ marginTop: 2 }}>
						Retour aux bateaux
					</Button>
				</Link>
			</Box>
		);
	}

	return (
		<Box sx={{ padding: 3 }}>
			<Typography
				variant="h4"
				sx={{ textAlign: "center", marginBottom: 4, marginTop: 9 }}
			>
				{boat.title}
			</Typography>

			{/* Affichage des images en grille */}
			<Grid container spacing={2} justifyContent="center">
				{boat.images?.map((image, index) => (
					<Grid item key={index}>
						<img
							src={image}
							alt={`${boat.title} - ${index + 1}`}
							className={styles.detailImage}
						/>
					</Grid>
				))}
			</Grid>

			{/* Description */}
			<Typography variant="body1" sx={{ margin: "20px auto", maxWidth: 700 }}>
				{boat.description}
			</Typography>

			{/* Tableau des caractéristiques techniques */}
			<TableContainer
				component={Paper}
				sx={{ maxWidth: "600px", margin: "20px auto" }}
			>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>
								Longueur
							</TableCell>
							<TableCell>{boat.technicalDetails.length} pieds</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>
								Largeur
							</TableCell>
							<TableCell>{boat.technicalDetails.width} pieds</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>
								Tirant d'eau
							</TableCell>
							<TableCell>{boat.technicalDetails.draft} pieds</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>
								Cabines
							</TableCell>
							<TableCell>{boat.technicalDetails.cabins}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>
								Motorisation max
							</TableCell>
							<TableCell>{boat.technicalDetails.maxMotorization} CV</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{ fontWeight: "bold", color: "#1976d2" }}>
								Capacité passagers
							</TableCell>
							<TableCell>
								{boat.technicalDetails.passengerCapacity} personnes
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>

			<Box sx={{ textAlign: "center", marginTop: 3 }}>
				<Link to="/">
					<Button variant="contained">Retour aux bateaux</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default BoatDetails;
