/*
import { useParams} from "react-router-dom";
import boatsTeysisData from "../src/boatsTeysisData";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme"; // Thème externalisé
import {
	Typography,
	Box,
	Grid,
	
	Button,
	
	useMediaQuery,
} from "@mui/material";
import { ArrowBack,  Download, Favorite } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const TeysisDescriptions = () => {
	const { id } = useParams<{ id: string }>();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const boat = boatsTeysisData.find((boat) => boat.id === Number(id));

	if (!boat) {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box textAlign="center" mt={10}>
					<Typography variant="h3" color="error">
						⚓ Bateau non trouvé
					</Typography>
					<Button variant="contained" sx={{ mt: 3 }} href="/new">
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
			value: `${boat.technicalDetails.length} pi`,
			icon: "📏",
		},
		{
			label: "Largeur",
			value: `${boat.technicalDetails.width} pi`,
			icon: "⚖️",
		},
		{
			label: "Tirant d'eau",
			value: `${boat.technicalDetails.draft} pi`,
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
			<Box sx={{ p: isMobile ? 2 : 4, maxWidth: 1440, mx: "auto" }}>
				<Button
					startIcon={<ArrowBack />}
					href="/new"
					sx={{ mb: 4 }}
					variant="outlined"
				>
					Retour aux modèles
				</Button>

				<Typography
					variant="h2"
					component="h1"
					gutterBottom
					sx={{
						fontWeight: 700,
						color: "primary.main",
						textAlign: "center",
						mb: 5,
						letterSpacing: 2,
						textTransform: "uppercase",
					}}
				>
					{boat.title}
				</Typography>

				<Grid container spacing={4}>
					<Grid item xs={12} md={7}>
						<Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
							<ImageGallery
								items={galleryImages}
								additionalClass="boat-gallery"
								showPlayButton={false}
								showFullscreenButton={!isMobile}
								renderItem={(item) => (
									<LazyLoadImage
										src={item.original}
										alt={item.originalAlt}
										effect="opacity"
										style={{
											width: "100%",
											height: isMobile ? 300 : 500,
											objectFit: "cover",
										}}
									/>
								)}
							/>
						</Box>
					</Grid>

					<Grid item xs={12} md={5}>
						<Box sx={{ mb: 4 }}>
							<Typography
								variant="h5"
								gutterBottom
								sx={{ color: "primary.main" }}
							>
								🔍 Points clés
							</Typography>
							<Grid container spacing={2}>
								{technicalDetails.map((detail) => (
									<Grid item xs={6} sm={4} key={detail.label}>
										<Box
											sx={{
												p: 2,
												borderRadius: 2,
												bgcolor: "background.paper",
												boxShadow: 1,
												textAlign: "center",
											}}
										>
											<Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
												{detail.icon} {detail.label}
											</Typography>
											<Typography variant="h6" fontWeight={700}>
												{detail.value}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>

						<Box sx={{ bgcolor: "background.paper", p: 3, borderRadius: 3 }}>
							<Typography
								variant="h5"
								gutterBottom
								sx={{ color: "primary.main" }}
							>
								📋 Caractéristiques
							</Typography>
							{boat.teysisBoatsDescription.split("\n\n").map((text, i) => (
								<Typography
									key={i}
									paragraph
									sx={{ lineHeight: 1.8, textAlign: "justify" }}
								>
									{text}
								</Typography>
							))}
						</Box>
					</Grid>
				</Grid>

				<Box sx={{ mt: 6, textAlign: "center" }}>
					<Button
						variant="contained"
						size="large"
						startIcon={<Download />}
						sx={{ mr: 2 }}
					>
						Télécharger la fiche technique
					</Button>
					<Button
						variant="outlined"
						size="large"
						startIcon={<Favorite />}
						color="secondary"
					>
						Ajouter aux favoris
					</Button>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default TeysisDescriptions;
*/

import { useParams, useNavigate } from "react-router-dom";
import boatsTeysisData from "../src/boatsTeysisData";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme"; // Thème externalisé
import {
	Typography,
	Box,
	Grid,
	Button,
	useMediaQuery,
} from "@mui/material";
import { ArrowBack, Download, Favorite } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const TeysisDescriptions = () => {
	const { id } = useParams<{ id: string }>();
	console.log("ID reçu après rafraîchissement :", id);
	const navigate = useNavigate(); // ✅ Remplace href par useNavigate
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const boat = boatsTeysisData.find((boat) => boat.id === Number(id));
	console.log("ID reçu :", id);

	if (!boat) {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box textAlign="center" mt={10}>
					<Typography variant="h3" color="error">
						⚓ Bateau non trouvé
					</Typography>
					<Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/new")}>
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
			value: `${boat.technicalDetails.length} pi`,
			icon: "📏",
		},
		{
			label: "Largeur",
			value: `${boat.technicalDetails.width} pi`,
			icon: "⚖️",
		},
		{
			label: "Tirant d'eau",
			value: `${boat.technicalDetails.draft} pi`,
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
			<Box sx={{ p: isMobile ? 2 : 4, maxWidth: 1440, mx: "auto" }}>
				<Button
					startIcon={<ArrowBack />}
					onClick={() => navigate("/new")} // ✅ Remplace href par useNavigate
					sx={{ mb: 4 }}
					variant="outlined"
				>
					Retour aux modèles
				</Button>

				<Typography
					variant="h2"
					component="h1"
					gutterBottom
					sx={{
						fontWeight: 700,
						color: "primary.main",
						textAlign: "center",
						mb: 5,
						letterSpacing: 2,
						textTransform: "uppercase",
					}}
				>
					{boat.title}
				</Typography>

				<Grid container spacing={4}>
					<Grid item xs={12} md={7}>
						<Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
							<ImageGallery
								items={galleryImages}
								additionalClass="boat-gallery"
								showPlayButton={false}
								showFullscreenButton={!isMobile}
								renderItem={(item) => (
									<LazyLoadImage
										src={item.original}
										alt={item.originalAlt}
										effect="opacity"
										style={{
											width: "100%",
											height: isMobile ? 300 : 500,
											objectFit: "cover",
										}}
									/>
								)}
							/>
						</Box>
					</Grid>

					<Grid item xs={12} md={5}>
						<Box sx={{ mb: 4 }}>
							<Typography
								variant="h5"
								gutterBottom
								sx={{ color: "primary.main" }}
							>
								🔍 Points clés
							</Typography>
							<Grid container spacing={2}>
								{technicalDetails.map((detail) => (
									<Grid item xs={6} sm={4} key={detail.label}>
										<Box
											sx={{
												p: 2,
												borderRadius: 2,
												bgcolor: "background.paper",
												boxShadow: 1,
												textAlign: "center",
											}}
										>
											<Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
												{detail.icon} {detail.label}
											</Typography>
											<Typography variant="h6" fontWeight={700}>
												{detail.value}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>

						<Box sx={{ bgcolor: "background.paper", p: 3, borderRadius: 3 }}>
							<Typography
								variant="h5"
								gutterBottom
								sx={{ color: "primary.main" }}
							>
								📋 Caractéristiques
							</Typography>
							{boat.teysisBoatsDescription.split("\n\n").map((text, i) => (
								<Typography
									key={i}
									paragraph
									sx={{ lineHeight: 1.8, textAlign: "justify" }}
								>
									{text}
								</Typography>
							))}
						</Box>
					</Grid>
				</Grid>

				<Box sx={{ mt: 6, textAlign: "center" }}>
					<Button
						variant="contained"
						size="large"
						startIcon={<Download />}
						sx={{ mr: 2 }}
					>
						Télécharger la fiche technique
					</Button>
					<Button
						variant="outlined"
						size="large"
						startIcon={<Favorite />}
						color="secondary"
					>
						Ajouter aux favoris
					</Button>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default TeysisDescriptions;

