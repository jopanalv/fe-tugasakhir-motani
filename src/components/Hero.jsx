import React from 'react';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Banner from '../assets/Banner.svg';
import Slider from 'react-slick';
import $ from 'jquery';
import { Box, Container, Grid } from '@mui/material';
import { lightGreen, grey } from '@mui/material/colors';

const Hero = () => {
    return (
        // <Container maxWidth='true' disableGutters={true}>
        <Grid mt={11} mb={3} container direction='row' justifyContent='space-between' alignItems='center'>
            <Box sx={{
                width: 236,
                height: 224,
                backgroundColor: lightGreen[500],
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                ml: -1
            }} />
            <Box><img src={Banner} /></Box>
            <Box sx={{
                width: 236,
                height: 224,
                backgroundColor: lightGreen[500],
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                mr: -1
            }} />
        </Grid>
        // </Container>
    )
}

export default Hero;