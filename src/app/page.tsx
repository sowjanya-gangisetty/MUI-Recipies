
import styles from "./page.module.css";
import { Typography , Button} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Home() {
  return (
    <div className={styles.page}>
        <Typography variant="h1" align="center" color="textPrimary"> Welcome to My recipies</Typography>
        <Button href="/recipe"  startIcon={<RestaurantMenuIcon/ >} size="large" variant="outlined" color="secondary">Click me!!</Button>
    </div>
  );
}
