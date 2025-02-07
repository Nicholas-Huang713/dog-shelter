import { Typography, Button, Container, Box, Paper } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../hooks/useAuth";
import { useNavigateTo } from "../../hooks/useNavigateTo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default function Home() {
  const { isAuthenticated } = useAuth();
  const { goDogSearch, goLogin } = useNavigateTo();
  const handleGetStartedClick = () => {
    isAuthenticated ? goDogSearch() : goLogin();
  };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Welcome to the Dog Shelter
          </Typography>
          <Typography variant="h5" color="textSecondary">
            We provide the best dogs near you
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>
        </Box>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Personalized Account
              </Typography>
              <Typography>
                Easily create an account to allow you to personalize your
                preferences
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Favorites List
              </Typography>
              <Typography>
                Search through our database of canines to find your favorite
                furry friend
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Comprehensive Matching
              </Typography>
              <Typography>
                Our comprehensive algorithm will find the right dog for you
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "background.paper", p: 6, mt: 4 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Dog Shelter
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          © 2025 Dog Shelter. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
