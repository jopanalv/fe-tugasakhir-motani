import React from 'react';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Banner from '../assets/Banner.svg';
import { Box, Container, Grid } from '@mui/material';
import { lightGreen, grey } from '@mui/material/colors';
import Carousel from 'react-material-ui-carousel';

const Hero = () => {
    const items = [
        {
            url: Banner
        },
        {
            url: Banner
        },
        {
            url: Banner
        },
    ]

    return (
        // <Container maxWidth='true' disableGutters={true}>
        <Grid mt={11} mb={3} container direction='row' justifyContent='space-between' alignItems='center'>
            <Box sx={{
                width: 236,
                height: 224,
                backgroundColor: lightGreen[500],
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                ml: -1,
                display: { xs: 'none', md: 'block' }
            }} />
            <Carousel navButtonsAlwaysInvisible sx={{ width: 960, mt: { sx: 1, md: 4 } }}>
                {
                    items.map((item, i) => <img src={item.url} />)
                }
            </Carousel>
            <Box sx={{
                width: 236,
                height: 224,
                backgroundColor: lightGreen[500],
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                mr: -1,
                display: { xs: 'none', md: 'block' }
            }} />
        </Grid>
        // </Container>
    )
}

export default Hero;