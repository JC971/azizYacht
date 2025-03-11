import { createTheme } from "@mui/material/styles";

//theme pour la page de description des bateaux neufs

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"@global": {
					".MuiBox-root": {
						maxWidth: "500px",
						"@media (max-width: 600px)": {
							maxWidth: "400px",
						},
						"@media (max-width: 430px)": {
							maxWidth: "300px",
						},
					},
				},
			},
		},
	},
});

export default theme;

