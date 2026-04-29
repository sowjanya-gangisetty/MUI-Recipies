
import { Typography, Button, Container, Paper, Box } from "@mui/material";
import RecipeCard from '@/component/RecipeCard'
import { RecipeType } from "../types/types";


/*type RecipeType = {
    name: string,
    category: string,
    area: string,
    //instructions : string[],
    image: string,
    video: string

}*/

const RecipePage = async () => {

    let selectedRecipe: RecipeType | null = null

    try {
        const response: Response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const data = await response.json()
        console.log(data)
        const recipeData = data.meals[0]
        console.log(recipeData)

        selectedRecipe = {
            name: recipeData.strMeal,
            category: recipeData.strCategory,
            area: recipeData.strArea,
            image: recipeData.strMealThumb,
            instructions: recipeData.strInstructions,
            video: recipeData.strYoutube,
        }
        console.log(selectedRecipe)
    } catch (error) {
        console.log(error)
    }

    return (
        <>
            <Container maxWidth="md">
                <Paper elevation={2}>
                    <Box sx={{
                        m: {
                            xs: 2,
                            md: 10
                        },
                        p: {
                            xs: 2,
                            md: 6
                        },
                        textAlign: "center"
                    }}>
                        <Typography variant="h2" align="center" color="textPrimary" >Recipe Page
                            {selectedRecipe && <RecipeCard {...selectedRecipe} />}
                        </Typography>
                    </Box>
                </Paper>
            </Container>
            <Button href="/">Back</Button>
        </>
    )
}
export default RecipePage



/*
from api get:
name: strMeal : string
category : strCategory : string
area: strArea : string
sinsrtuctions : strInstructions : string
image: strMealThumb : string
video : strYoutube : string

for each strIngredient match it to the strMesure : string[]
strYoutube : string
*/