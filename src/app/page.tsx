
import styles from "./page.module.css";
import { Typography , Button, Container, Paper, Box} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Paper elevation={2}>
        <Box sx={{
          m: 6,
          p:4,
          textAlign:"center",
        }}>
        <Typography variant="h1" align="center" color="textPrimary"> Welcome to My recipies</Typography>
        <Button href="/recipe"  startIcon={<RestaurantMenuIcon/ >} 
                size="large" variant="outlined" color="secondary"
                sx={{
                  m:4,
                  borderRadius:"50px"
                }}>
            Click me!
        </Button>
      </Box>
      </Paper>
    </Container>
  );
}
