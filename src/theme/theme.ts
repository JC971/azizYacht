
// boatTheme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1a365d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2b6cb0",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "2.8rem",
      fontWeight: 700,
      color: "#1a365d",
      
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 600,
      
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "12px 24px",
          margin: "60px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});