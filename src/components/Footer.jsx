import { Box, Container, Grid, ThemeProvider, createTheme, Toolbar, Typography, IconButton } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: lightGreen[500],
                contrastText: '#fff',
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters={true} sx={{ backgroundColor: 'primary.main', mb: -1, display: { xs: 'none', md: 'flex' } }}>
                <Grid container direction='row' justifyContent='space-around' alignItems='center'>
                    <Toolbar disableGutters>
                        <Box sx={{
                            width: 100,
                            height: 35,
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }} />
                    </Toolbar>
                    <Typography variant='body1' sx={{ color: '#fff' }}>Copyright 2022 - Jovan Alvado A.M</Typography>
                    <Grid item>
                        <IconButton href='facebook.com' target='_blank' aria-label='delete' size='large' sx={{color: '#fff'}}>
                            <Facebook fontSize='inherit' />
                        </IconButton>
                        <IconButton href='instagram.com' target='_blank' aria-label='delete' size='large' sx={{color: '#fff'}}>
                            <Instagram fontSize='inherit' />
                        </IconButton>
                        <IconButton href='twitter.com' target='_blank' aria-label='delete' size='large' sx={{color: '#fff'}}>
                            <Twitter fontSize='inherit' />
                        </IconButton>
                        <IconButton href='linkedin.com' target='_blank' aria-label='delete' size='large' sx={{color: '#fff'}}>
                            <LinkedIn fontSize='inherit' />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default Footer;