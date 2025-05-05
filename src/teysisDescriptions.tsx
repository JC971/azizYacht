import { useParams, useNavigate } from "react-router-dom";
import boatsTeysisData from "../src/boatsTeysisData";
import { ThemeProvider, CssBaseline, Box, Button, Grid } from "@mui/material";
import { theme } from "./theme/theme"; // Thème externalisé
import { ArrowBack } from "@mui/icons-material";
//import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "../styles/TeysisDescriptions.module.css";

const TeysisDescriptions = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const boat = boatsTeysisData.find((boat) => boat.id === Number(id));

	if (!boat) {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box textAlign="center" mt={10}>
					<h3 className={styles.notFound}>⚓ Bateau non trouvé</h3>
					<Button
						variant="contained"
						sx={{ mt: 3 }}
						onClick={() => navigate("/new")}
					>
						Voir tous les bateaux
					</Button>
				</Box>
			</ThemeProvider>
		);
	}

	const galleryImages = boat.images.map((img) => ({
		original: img,
		thumbnail: img,
		originalAlt: boat.title,
		thumbnailAlt: `Miniature ${boat.title}`,
	}));

	const technicalDetails = [
		{
			label: "Longueur",
			value: `${boat.technicalDetails.length} (m)`,
			icon: "📏",
		},
		{
			label: "Largeur",
			value: `${boat.technicalDetails.width} (m)`,
			icon: "⚖️",
		},
		{
			label: "Tirant d'eau",
			value: `${boat.technicalDetails.draft} (m)`,
			icon: "🌊",
		},
		{ label: "Cabines", value: boat.technicalDetails.cabins, icon: "🚪" },
		{
			label: "Motorisation",
			value: `${boat.technicalDetails.maxMotorization} CV`,
			icon: "⚙️",
		},
		{
			label: "Passagers",
			value: boat.technicalDetails.passengerCapacity,
			icon: "👥",
		},
	];

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box className={styles.container}>
				<Button
					startIcon={<ArrowBack />}
					onClick={() => navigate("/new")}
					className={styles.buttonBack}
					variant="outlined"
				>
					Retour aux modèles
				</Button>

				<h1 className={styles.title}>{boat.title}</h1>

				<Grid container spacing={4}>
					<Grid item xs={12} md={7}>
						<Box className={styles.galleryBox}>
							<ImageGallery
								items={galleryImages}
								additionalClass="boat-gallery"
								showPlayButton={false}
								showFullscreenButton={true}
								renderItem={(item) => (
									<img
										src={item.original}
										alt={item.originalAlt}
										className={styles.galleryImage}
									/>
								)}
							/>
						</Box>
					</Grid>

					<Grid item xs={12} md={5}>
						<Box className={styles.techBox}>
							<h2 className={styles.techTitle}>🔍 Points clés</h2>
							<Grid container spacing={2}>
								{technicalDetails.map((detail) => (
									<Grid item xs={6} sm={6} md={4} key={detail.label}>
										<Box
											className={`${styles.detailCard} ${styles.responsiveCard}`}
										>
											<p className={styles.detailLabel}>
												{detail.icon} {detail.label}
											</p>
											<p className={styles.detailValue}>{detail.value}</p>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>

						<Box className={styles.descriptionBox}>
							<h2 className={styles.techTitle}>📋 Caractéristiques</h2>
							{boat.teysisBoatsDescription.split("\n\n").map((text, i) => (
								<p key={i} className={styles.descriptionText}>
									{text}
								</p>
							))}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
};

export default TeysisDescriptions;

