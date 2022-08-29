import { Box, Container, Grid, ThemeProvider, createTheme, Toolbar, Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import React from 'react';

const Footer = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: lightGreen[500],
                // contrastText: '#fff',
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters={true} maxWidth sx={{ backgroundColor: 'primary.main', mb: -1 }}>
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
                    <Typography variant='body1'>Copyright {<CopyrightIcon />} 2022 Jovan Alvado A.M</Typography>
                    <Typography variant='body1'>Social Media</Typography>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default Footer;