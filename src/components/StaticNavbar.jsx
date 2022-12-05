import { AppBar, Box, Container, Toolbar, Grid, Stack, Typography, Button, Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen, grey } from '@mui/material/colors';
import Notification from './Notification';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StaticNavbar = ({ title }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: lightGreen[500],
                // contrastText: '#fff',
            },
            secondary: {
                main: grey[200],
                contrastText: '#fff'
            }
        },
    });

    const { user } = useSelector(state => state.auth);
    return (
        <ThemeProvider theme={theme}>
            <AppBar color='default' position='fixed'>
                <Container disableGutters={true}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Toolbar disableGutters>
                            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Button>
                                    <Box component='img' src={Logo} alt='logo website' sx={{
                                        width: 100,
                                        height: 35,
                                        display: { xs: 'none', md: 'block' }
                                    }} />
                                </Button>
                            </Link>
                        </Toolbar>
                        <Typography
                            align='center'
                            variant='h6'>
                            {title}
                        </Typography>
                        <Stack direction='row' spacing={1}>
                            <Notification />
                            <Link to='/profile' style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Button sx={{ display: { xs: 'none', md: 'inherit' } }}>
                                    <Avatar>{user?.Profile.name[0]}</Avatar>
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default StaticNavbar;