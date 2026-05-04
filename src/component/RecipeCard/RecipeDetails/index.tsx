import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

type RecipeDeatisType = {
    instructions: string,
    video: string,
    ingredients:string[]
}

export default function RecipeDetails({ instructions, video, ingredients }: RecipeDeatisType) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const embedUrl = video.replace("watch?v=", "embed/")

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Instructions" value="1" />
                        <Tab label="Ingredients" value="2" />
                        <Tab label="Video" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Instructions : {instructions}
                    </Typography>
                </TabPanel>
                <TabPanel value="2"> 
                    <Box
                        component="ul"
                        sx={{
                            listStyleType: "circle",
                            display: "flex",
                            flexDirection: "column",
                            margin: 0,
                            fontSize: 22
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
                </TabPanel>
                <TabPanel value="3">
                    {embedUrl &&
                        <CardMedia
                            component="iframe"
                            height="194"
                            src={embedUrl}
                        />
                    }
                </TabPanel>
            </TabContext>
        </Box>
    );
}
