'use client'
import styles from "./page.module.css";
import { Typography , Button, Container, Paper, Box} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {styled} from '@mui/material/styles'

const StyledButton = styled(Button)`
background-color: lightgrey;
color : red ;
padding:12px`

export default function Home() {
  return (
    <Container maxWidth="md">
      <Paper elevation={2}>
        <Box sx={{
          m:{
            xs:2,
            md:10
          },
         p:{
          xs:2,
          md:6
         },
          textAlign:"center"
        }}>
        <Typography variant="h1" align="center" color="textPrimary"
                    sx={{
                      fontSize:{
                      xs:"3rem",
                      md:"6rem"
                    }}}> 
          Welcome to My recipies
        </Typography>
        <Button href="/recipe"  startIcon={<RestaurantMenuIcon/ >} 
                size="large" variant="outlined" color="secondary"
                sx={{
                  m:4,
                  borderRadius:"50px"
                }}>
            Click me!!
        </Button>
        <StyledButton>Styled Button</StyledButton>
      </Box>
      </Paper>
    </Container>
  );
}
