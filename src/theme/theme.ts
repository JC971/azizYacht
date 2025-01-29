import { createTheme } from "@mui/material/styles";

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
