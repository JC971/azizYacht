import React from "react";
import { useParams } from "react-router-dom";
import boatsMakayData from "../../src/boatsMakayData";
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

const MakayDescriptions: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const boat = boatsMakayData.find((b) => b.id === parseInt(id || "0", 10));

	if (!boat) {
		return (
			<Typography variant="h5" color="error" align="center">
				Boat not found
			</Typography>
		);
	}

	const rows = [
		{ key: "Length", value: `${boat.technicalDetails.length || "N/A"} Feet` },
		{ key: "Width", value: `${boat.technicalDetails.width || "N/A"} Feet` },
		{ key: "Draft", value: `${boat.technicalDetails.draft || "N/A"} Feet` },
		{ key: "Cabins", value: `${boat.technicalDetails.cabins || "N/A"} Nbr` },
		{
			key: "Max Motorization",
			value: `${boat.technicalDetails.maxMotorization || "N/A"} Hp`,
		},
		{
			key: "Passenger Capacity",
			value: `${boat.technicalDetails.passengerCapacity || "N/A"}`,
		},
	];

	return (
		<Box sx={{ padding: 4 }}>
			{/* Titre et Image */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 2,
					margin: "50px",
					"@media (max-width:375px)": {
						margin: "50px 0",
						padding: "20px auto",
						fontSize: "12px",
						fontWeight: "bold",
						textAlign: "left",
					},
				}}
			>
				<Typography
					variant="h4"
					gutterBottom
					sx={{
						color: "rgb(86, 133, 160)",
						fontWeight: "bolder",
						"@media (max-width:375px)": {
							margin: "0",
							padding: "0",
							fontSize: "18px",
						},
					}}
				>
					{boat.name}
				</Typography>
				<img
					src={boat.image}
					alt={boat.name}
					style={{
						width: "100%",
						maxWidth: "500px",
						borderRadius: "8px",
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
					}}
				/>
				<Typography
					variant="body1"
					align="center"
					gutterBottom
					sx={{
						fontSize: "1.2rem",
						lineHeight: "1.6",
						color: "#555",
						textAlign: "center",
						margin: "20px 0",
						padding: "10px",
						backgroundColor: "#f9f9f9",
						borderRadius: "8px",
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						"@media (max-width:430px)": {
							margin: "0",
							padding: "20px auto",
							fontSize: "16px",
							fontWeight: "bold",
							textAlign: "left",
						},
						"@media (max-width:375px)": {
							margin: "0",
							padding: "20px auto",
							fontSize: "12px",
							fontWeight: "bold",
							textAlign: "left",
						},
					}}
				>
					{boat.description}
				</Typography>
				<Typography
					sx={{
						fontSize: "1rem",
						lineHeight: "1.5",
						color: "#333",
						marginTop: "20px",
						textAlign: "left",
						"@media (max-width:430px)": {
							margin: "0",
							padding: "20px auto",
							fontSize: "14px",
							fontWeight: "bold",
							textAlign: "justify",
						},
					}}
				>
					{boat.cockpitDescription}
				</Typography>
			</Box>

			{/* Technical Details */}
			<Box sx={{ marginTop: 4 }}>
				<Typography
					variant="h5"
					gutterBottom
					sx={{ textDecoration: "underline", textAlign: "center" }}
				>
					Technical Details
				</Typography>
				<TableContainer
					component={Paper}
					sx={{ maxWidth: "600px", margin: "0 auto" }}
				>
					<Table>
						<TableBody>
							{rows.map((row, index) => (
								<TableRow
									key={index}
									sx={{
										"&:nth-of-type(odd)": {
											backgroundColor: "#f9f9f9",
										},
									}}
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
		</Box>
	);
};

export default MakayDescriptions;
