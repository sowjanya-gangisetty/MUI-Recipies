'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import type { RecipeType } from '@/app/types/types';
import { Box } from '@mui/material';


export default function RecipeCard({ name, area, category, instructions, image, video, ingredients }: RecipeType) {

    const embedUrl = video.replace("watch?v=", "embed/")

    return (
        <Card sx={{ maxWidth: "md" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={name}
                subheader={`${category} - ${area}`}
            />
            <CardMedia
                component="img"
                height="194"
                alt={name}
                src={image}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Instructions : {instructions}
                </Typography>
                <Typography variant="h6" sx={{ paddingBottom:1 }}>
                    Ingredients
                </Typography>

                <Box
                    component="ul"
                    sx={{
                        listStyleType: "circle",
                        display: "flex",
                        flexDirection: "column",
                        margin:0 ,
                        fontSize:22
                    }}
                > 
                    {ingredients.map((item, index) => (
                        <Box
                            component="li"
                            key={index}
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            <Typography variant="body1">{item}</Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
            {embedUrl &&
                <CardMedia
                    component="iframe"
                    height="194"
                    src={embedUrl}
                />
            }
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
}
