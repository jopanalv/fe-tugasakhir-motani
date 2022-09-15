import { AppBar, Box, Container, Toolbar, Grid, Stack, Typography, Button, Avatar } from '@mui/material';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen, grey } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
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

    // const { user } = useSelector(state => state.auth);

    return (
        <ThemeProvider theme={theme}>
            <AppBar color='default' position='fixed'>
                <Container disableGutters={true}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Toolbar disableGutters>
                            <Box sx={{
                                width: 100,
                                height: 35,
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                                display: { xs: 'none', md: 'block' }
                            }} />
                        </Toolbar>
                        <Typography
                            align='center'
                            variant='h6'>
                            {title}
                        </Typography>
                        <Stack direction='row' spacing={1}>
                            <Button href='/profile' sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Avatar>{null}</Avatar>
                            </Button>
                        </Stack>
                    </Grid>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default StaticNavbar;